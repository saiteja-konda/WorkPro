package dev.teja.projectboard.service;

import dev.teja.projectboard.domain.Project;
import dev.teja.projectboard.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
    @Autowired
    public ProjectRepository projectRepository;

    public Project saverOrUpdateProject(Project project){
        return projectRepository.save(project);
    }
}
