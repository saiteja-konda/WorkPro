package dev.teja.projectboard.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Backlog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private Integer PTSequence = 0;
    private String projectIdentifier;

    //OneToOne with project
    //OneToMany ProjectTasks

    public Backlog() {
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public Integer getPTSequence() {
        return PTSequence;
    }

    public void setPTSequence(Integer PTSequence) {
        this.PTSequence = PTSequence;
    }

    public String getProjectIdentifier() {
        return projectIdentifier;
    }

    public void setProjectIdentifier(String projectIdentifier) {
        this.projectIdentifier = projectIdentifier;
    }
}
