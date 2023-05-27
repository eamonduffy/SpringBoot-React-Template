package com.duffy.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;

import com.duffy.backend.service.AuthorService;
import com.duffy.backend.model.example.Author;

@Controller
public class AuthorController {

    @Autowired
    AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @QueryMapping
    public Iterable<Author> findAllAuthors() {
        return authorService.findAllAuthors();
    }

    @MutationMapping
    public Author createAuthor(String name, Integer age) {
        return authorService.createAuthor(name, age);
    }
}
