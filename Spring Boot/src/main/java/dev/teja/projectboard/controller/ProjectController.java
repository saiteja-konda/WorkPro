package dev.teja.projectboard.controller;

import dev.teja.projectboard.domain.Project;
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
    private MapValidationErrorService mapValidationErrorService;

    @PostMapping("/")
    public ResponseEntity<?> createNewProject(@Valid @RequestBody Project project, BindingResult result){

        ResponseEntity<?> errorMap = mapValidationErrorService.MapValidationService(result);
        if (errorMap!=null) return errorMap;
        Project project1 = projectService.saverOrUpdateProject(project);
        return new ResponseEntity<Project> (project, HttpStatus.CREATED);
    }
}
