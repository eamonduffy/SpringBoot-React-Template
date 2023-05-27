package com.duffy.backend.controller.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.service.example.TutorialService;

@Controller
public class TutorialController {

    @Autowired
    TutorialService tutorialService;

    public TutorialController(TutorialService tutorialService) {
        this.tutorialService = tutorialService;
    }

    @QueryMapping
    public Tutorial findTutorialByID(@Argument Integer id) {
        return tutorialService.findTutorialByID(id);
    }

    // @QueryMapping
    // public Iterable<Tutorial> findAllTutorials() {
    // return tutorialService.findAllTutorials();
    // }

    // @QueryMapping
    // public long countTutorials() {
    // return tutorialService.countTutorials();
    // }

    // @MutationMapping
    // public Tutorial createTutorial(@Argument String title, @Argument String
    // description, @Argument Integer id) {
    // System.out.println("Enter Create Tutorial");
    // return tutorialService.createTutorial(title, description, id);
    // }

    // // @MutationMapping
    // // public Tutorial addTutorial(@Argument TutorialInput tutorial) {
    // // return tutorialService.addTutorial(tutorial);
    // // }

    // @MutationMapping
    // public void deleteTutorial(@Argument Integer id) {
    // tutorialService.deleteTutorial(id);
    // }

    // @MutationMapping
    // public Tutorial updateTutorial(@Argument Integer id, @Argument String title,
    // String description) {
    // return tutorialService.updateTutorial(id, title, description);
    // }
}
