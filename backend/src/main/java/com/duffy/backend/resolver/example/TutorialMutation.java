package com.duffy.backend.resolver.example;

import java.util.Optional;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.duffy.backend.model.example.Author;
import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.repository.example.TutorialRepository;

@Component
public class TutorialMutation implements GraphQLMutationResolver {

    private TutorialRepository tutorialRepository;

    public TutorialMutation(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    public Tutorial createTutorial(String title, String description, Long authorID) {
        Tutorial tutorial = new Tutorial();
        tutorial.setAuthor(new Author(authorID));
        tutorial.setTitle(title);
        tutorial.setDescription(description);

        tutorialRepository.save(tutorial);

        return tutorial;
    }

    public Tutorial updateTutorial(Long id, String title, String description) throws NotFoundException {
        Optional<Tutorial> optTutorial = tutorialRepository.findById(id);

        if (optTutorial.isPresent()) {
            Tutorial tutorial = optTutorial.get();

            if (title != null) {
                tutorial.setTitle(title);
            }
            if (description != null) {
                tutorial.setDescription(description);
            }

            tutorialRepository.save(tutorial);
            return tutorial;
        }

        throw new NotFoundException();
    }

    public boolean deleteTutorial(Long id) {
        tutorialRepository.deleteById(id);
        return true;
    }
}
