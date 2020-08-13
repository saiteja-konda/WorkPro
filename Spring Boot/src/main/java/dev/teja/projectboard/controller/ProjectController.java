package dev.teja.projectboard.controller;

import dev.teja.projectboard.domain.Project;
import dev.teja.projectboard.domain.ProjectTask;
import dev.teja.projectboard.repository.ProjectRepository;
import dev.teja.projectboard.service.MapValidationErrorService;
import dev.teja.projectboard.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@CrossOrigin
@RestController
@RequestMapping("/api/project")
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result) {

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap != null) return errorMap;
        Project project1 = projectService.saverOrUpdateProject(project);
        return new ResponseEntity<Project>(project, HttpStatus.CREATED);
    }

    @GetMapping("/{projectId}")
    public ResponseEntity<?> getProjectById(@PathVariable String projectId) {
        Project project = projectService.findProjectByIdentifier(projectId);
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("/")
    public Iterable<Project> getAllProjects() {
        return projectService.findAll();
    }

    @DeleteMapping("/{projectId}")
    public ResponseEntity<?> deleteProjectById(@PathVariable String projectId){
projectService.deleteProjectByIdentifier(projectId);
return new ResponseEntity<String>("The Project ID:'"+projectId+"' has been deleted successfully ",HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public Project updateProject(@PathVariable Long id, @RequestBody Project oldProject){
        Project project = projectRepository.findById(id).orElse(null);

        project.setProjectName(oldProject.getProjectName());
        project.setDescription(oldProject.getDescription());
        project.setProjectIdentifier(oldProject.getProjectIdentifier());

        return projectRepository.save(project);
    }

//    @PutMapping("/{projectId}")
//    public Project updateProjectByIdentifier(@PathVariable String projectId, @RequestBody Project oldProject){
//        Project project = projectRepository.findByProjectIdentifier(projectId);
//
//        project.setProjectName(oldProject.getProjectName());
//        project.setDescription(oldProject.getDescription());
//        project.setProjectIdentifier(oldProject.getProjectIdentifier());
//
//        return projectRepository.save(project);
//    }

}
