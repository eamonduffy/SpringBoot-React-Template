package com.duffy.backend.resolver.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.repository.example.TutorialRepository;

@Component
public class TutorialQuery implements GraphQLQueryResolver {

    @Autowired
    private TutorialRepository tutorialRepository;

    public TutorialQuery(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    public Iterable<Tutorial> findAllTutorials() {
        return tutorialRepository.findAll();
    }

    public long countTutorials() {
        return tutorialRepository.count();
    }
}
