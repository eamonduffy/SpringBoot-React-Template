package com.duffy.backend.service.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duffy.backend.model.example.Author;
import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.model.example.TutorialInput;
import com.duffy.backend.repository.example.AuthorRepository;
import com.duffy.backend.repository.example.TutorialRepository;

@Service
public class TutorialService {

    @Autowired
    private TutorialRepository tutorialRepository;

    @Autowired
    private AuthorRepository authorRepository;

    public TutorialService(TutorialRepository tutorialRepository, AuthorRepository authorRepository) {
        this.tutorialRepository = tutorialRepository;
        this.authorRepository = authorRepository;
    }

    public Tutorial findTutorialByID(Integer id) {
        return tutorialRepository.findById(id).orElse(null);
    }

    public Iterable<Tutorial> findAllTutorials() {
        return tutorialRepository.findAll();
    }

    public long countTutorials() {
        return tutorialRepository.count();
    }

    public Tutorial createTutorial(String title, String description, Integer authorId) {
        System.out.println("Creating new tutorial");
        System.out.println("author ID: " + authorId);

        Author author = authorRepository.findById(authorId)
                .orElseThrow(() -> new IllegalArgumentException("Author not found with id: " + authorId));

        Tutorial tutorial = new Tutorial();
        tutorial.setTitle(title);
        tutorial.setAuthor(author);
        tutorial.setDescription(description);

        System.out.println("New tutorial being added: " + tutorial);
        tutorialRepository.save(tutorial);
        return tutorial;
    }

    public void deleteTutorial(Integer id) {
        tutorialRepository.deleteById(id);
    }

    public Tutorial addTutorial(TutorialInput tutorial) {
        Author author = authorRepository.findById(tutorial.authorId())
                .orElseThrow(() -> new IllegalArgumentException("Author not found with id: " + tutorial.authorId()));

        Tutorial tutorialToAdd = new Tutorial();
        tutorialToAdd.setTitle(tutorial.title());
        tutorialToAdd.setDescription(tutorial.description());
        tutorialToAdd.setAuthor(author);

        tutorialRepository.save(tutorialToAdd);
        return tutorialToAdd;
    }

    public Tutorial updateTutorial(Integer id, TutorialInput tutorial) {
        Tutorial tutorialToUpdate = tutorialRepository.findById(id).orElse(null);
        if (tutorialToUpdate == null) {
            throw new RuntimeException("Tutorial not found, use a different ID");
        }

        Author author = authorRepository.findById(tutorial.authorId())
                .orElseThrow(() -> new IllegalArgumentException("Author not found with id: " + tutorial.authorId()));

        tutorialToUpdate.setTitle(tutorial.title());
        tutorialToUpdate.setDescription(tutorial.description());
        tutorialToUpdate.setAuthor(author);

        tutorialRepository.save(tutorialToUpdate);
        return tutorialToUpdate;
    }

}
