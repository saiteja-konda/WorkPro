package dev.teja.projectboard.controller;

import dev.teja.projectboard.domain.ProjectTask;
import dev.teja.projectboard.repository.ProjectTaskRepository;
import dev.teja.projectboard.service.ProjectTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/api/board")
public class ProjectTaskController {
    @Autowired
    public ProjectTaskService projectTaskService;

    @Autowired
    public ProjectTaskRepository projectTaskRepository;


    @PostMapping("")
    public ResponseEntity<?> addPTToBoard(@Valid @RequestBody ProjectTask projectTask, BindingResult result){

        if(result.hasErrors()){
            Map<String, String> errorMap = new HashMap<>();

                for(FieldError error : result.getFieldErrors()){
                    errorMap.put(error.getField(), error.getDefaultMessage());
            }
                return  new ResponseEntity<Map<String, String>>(errorMap,HttpStatus.BAD_REQUEST);
        }

        ProjectTask newPT = projectTaskService.saveOrUpdateProjectTask(projectTask);
        return new ResponseEntity<ProjectTask>(newPT,HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public Iterable<ProjectTask> getAllPTs(){
        return projectTaskService.findAll();
    }

    @GetMapping("/{id}")
    public  ResponseEntity<?> getById(@PathVariable Long id){
        ProjectTask projectTask = projectTaskService.findById(id);
        return new ResponseEntity<ProjectTask>(projectTask, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ProjectTask updateProjectTask(@PathVariable Long id,  @RequestBody ProjectTask oldProjectTask){
        ProjectTask projectTask = projectTaskRepository.findById(id).orElse(null);

        assert projectTask != null;
        projectTask.setSummary(oldProjectTask.getSummary());
        projectTask.setStatus(oldProjectTask.getStatus());
        projectTask.setAcceptenceCriteria(oldProjectTask.getAcceptenceCriteria());

        return projectTaskRepository.save(projectTask);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProjectTask(@PathVariable Long id){
        projectTaskService.delete(id);
        return new  ResponseEntity<String>("Project task deleted successfully", HttpStatus.OK);
    }

}
