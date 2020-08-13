package dev.teja.projectboard.repository;

import dev.teja.projectboard.domain.Backlog;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BacklogRepository extends CrudRepository<Backlog,Long > {
    Backlog findByProjectIdentifier(String Identifier);
}

