package com.duffy.backend.resolver.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLResolver;
import com.duffy.backend.model.example.Author;
import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.repository.example.AuthorRepository;

// GraphQlResolver is for when you want to resolve complex fields like `author` in `Tutorial`.

@Component
public class TutorialResolver implements GraphQLResolver<Tutorial> {

    @Autowired
    private AuthorRepository authorRepository;

    public TutorialResolver(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author getAuthor(Tutorial tutorial) {
        return authorRepository.findById(tutorial.getId()).orElseThrow(null);
    }
}
