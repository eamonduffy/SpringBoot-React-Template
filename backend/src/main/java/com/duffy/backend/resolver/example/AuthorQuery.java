package com.duffy.backend.resolver.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.duffy.backend.model.example.Author;
import com.duffy.backend.repository.example.AuthorRepository;

@Component
public class AuthorQuery implements GraphQLQueryResolver {

    @Autowired
    private AuthorRepository authorRepository;

    public AuthorQuery(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Iterable<Author> findAllAuthors() {
        return authorRepository.findAll();
    }

    public long countAuthors() {
        return authorRepository.count();
    }
}
