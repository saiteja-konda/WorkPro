package dev.teja.projectboard.service;

import dev.teja.projectboard.domain.Backlog;
import dev.teja.projectboard.domain.Project;
import dev.teja.projectboard.domain.User;
import dev.teja.projectboard.exception.ProjectIdException;
import dev.teja.projectboard.exception.ProjectNotFoundException;
import dev.teja.projectboard.repository.BacklogRepository;
import dev.teja.projectboard.repository.ProjectRepository;
import dev.teja.projectboard.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;
    @Autowired
    private BacklogRepository backlogRepository;
    @Autowired
    private UserRepository userRepository;

    public Project saverOrUpdateProject(Project project, String username) {
        try {
            User user = userRepository.findByUsername(username);
            project.setUser(user);
            project.setProjectLeader(user.getUsername());
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());

            if (project.getId() == null) {
                Backlog backlog = new Backlog();
                project.setBacklog(backlog);
                backlog.setProject(project);
                backlog.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            }

            if (project.getId() != null) {
                project.setBacklog(backlogRepository.findByProjectIdentifier(project.getProjectIdentifier().toUpperCase()));
            }
            project.setProjectIdentifier(project.getProjectIdentifier().toUpperCase());
            return projectRepository.save(project);
        } catch (Exception e) {
            throw new ProjectIdException("Project ID '" + project.getProjectIdentifier().toUpperCase() + "' already exists");
        }
    }

    public Project findProjectByIdentifier(String projectId, String username) {
        Project project = projectRepository.findByProjectIdentifier(projectId.toUpperCase());
        if (project == null) {
            throw new ProjectIdException("Project ID '" + projectId + "' dose not exists");
        }
        if (!project.getProjectLeader().equals(username)) {
            throw new ProjectNotFoundException("No such Project found in your account");
        }
        return project;
    }

    public Iterable<Project> findAll(String username) {
        return projectRepository.findByProjectLeader(username);
    }

    public void deleteProjectByIdentifier(String projectId, String username) {

        projectRepository.delete(findProjectByIdentifier(projectId,username));
    }

}
