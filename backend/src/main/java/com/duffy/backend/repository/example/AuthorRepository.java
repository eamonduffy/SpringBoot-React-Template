package com.duffy.backend.repository.example;

import org.springframework.data.jpa.repository.JpaRepository;

import com.duffy.backend.model.example.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer> {

}
