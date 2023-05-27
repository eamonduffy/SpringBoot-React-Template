package com.duffy.backend.controller.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;

import com.duffy.backend.model.example.Author;
import com.duffy.backend.model.example.AuthorInput;
import com.duffy.backend.service.example.AuthorService;

@Controller
public class AuthorController {

    @Autowired
    AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @QueryMapping
    public Author findAuthorByID(@Argument Integer id) {
        return authorService.findAuthorByID(id);
    }

    @QueryMapping
    public Iterable<Author> findAllAuthors() {
        return authorService.findAllAuthors();
    }

    @QueryMapping
    public long countAuthors() {
        return authorService.countAuthors();
    }

    @MutationMapping
    public Author createAuthor(@Argument String name, @Argument Integer age) {
        return authorService.createAuthor(name, age);
    }

    @MutationMapping
    public Author addAuthor(@Argument AuthorInput author) {
        return authorService.addAuthor(author);
    }

    @MutationMapping
    public void deleteAuthor(@Argument Integer id) {
        authorService.deleteAuthor(id);
    }

    @MutationMapping
    public Author updateAuthor(@Argument Integer id, @Argument AuthorInput author) {
        return authorService.updateAuthor(id, author);
    }
}
