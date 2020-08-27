package dev.teja.projectboard.service;

import dev.teja.projectboard.controller.ProjectTaskController;
import dev.teja.projectboard.domain.Backlog;
import dev.teja.projectboard.domain.Project;
import dev.teja.projectboard.domain.ProjectTask;
import dev.teja.projectboard.exception.ProjectNotFoundException;
import dev.teja.projectboard.repository.BacklogRepository;
import dev.teja.projectboard.repository.ProjectRepository;
import dev.teja.projectboard.repository.ProjectTaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectTaskService {
    @Autowired
    private ProjectTaskRepository projectTaskRepository;

    @Autowired
    private BacklogRepository backlogRepository;

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectRepository projectRepository;

    public ProjectTask addProjectTask(String projectIdentifier, ProjectTask projectTask, String username) {

        Backlog backlog = projectService.findProjectByIdentifier(projectIdentifier, username).getBacklog();// backlogRepository.findByProjectIdentifier(projectIdentifier);
        projectTask.setBacklog(backlog);

        Integer BacklogSequence = backlog.getPTSequence();
        BacklogSequence++;

        backlog.setPTSequence(BacklogSequence);

        projectTask.setProjectSequence(backlog.getProjectIdentifier() + "-" + BacklogSequence);
        projectTask.setProjectIdentifier(projectIdentifier);

        if (projectTask.getPriority() == null || projectTask.getPriority() == 0) { //projectTask.getPriority()==0 || this needs to be added while integrating to UI
            projectTask.setPriority(3);
        }
        if (projectTask.getStatus() == "" || projectTask.getStatus() == null) {
            projectTask.setStatus("TO_DO");
        }
        return projectTaskRepository.save(projectTask);

    }


    public ProjectTask saveOrUpdateProjectTask(ProjectTask projectTask) {

        return projectTaskRepository.save(projectTask);
    }

    public Iterable<ProjectTask> findAll() {
        return projectTaskRepository.findAll();
    }

    public ProjectTask findById(Long id) {
        return projectTaskRepository.getById(id);
    }

    public void delete(Long id) {
        ProjectTask projectTask = findById(id);
        projectTaskRepository.delete(projectTask);

    }

    public Iterable<ProjectTask> findBacklogById(String id, String username) {
        projectService.findProjectByIdentifier(id, username);
        return projectTaskRepository.findByProjectIdentifierOrderByPriority(id);
    }

    public ProjectTask findPTByProjectSequence(String backlog_id, String pt_id, String username) {

        //check for valid searching of back log
        projectService.findProjectByIdentifier(backlog_id, username);
        //check for the give task is valid
        ProjectTask projectTask = projectTaskRepository.findByProjectSequence(pt_id);
        if (projectTask == null) {
            throw new ProjectNotFoundException("Project Task with ID '" + pt_id + "' not found");
        }
        //check for the Backlog id and Pt id given in the path are matched
        if (!projectTask.getProjectIdentifier().equals(backlog_id)) {
            throw new ProjectNotFoundException(("Project Task '" + pt_id + "' dose not exists in " + backlog_id));
        }
        return projectTask;
    }

    public ProjectTask updateProjectSequence(ProjectTask updateTask, String backlog_id, String pt_id, String username) {
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id,username );
        projectTask = updateTask;
        return projectTaskRepository.save(projectTask);
    }

    public void deletePTByProjectSequence(String backlog_id, String pt_id, String username) {
        ProjectTask projectTask = findPTByProjectSequence(backlog_id, pt_id, username);
        projectTaskRepository.delete(projectTask);
    }
}

