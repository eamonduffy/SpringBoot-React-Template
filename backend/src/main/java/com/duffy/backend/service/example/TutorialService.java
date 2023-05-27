package com.duffy.backend.service.example;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duffy.backend.model.example.Tutorial;
import com.duffy.backend.repository.example.TutorialRepository;

@Service
public class TutorialService {

    @Autowired
    private TutorialRepository tutorialRepository;

    public TutorialService(TutorialRepository tutorialRepository) {
        this.tutorialRepository = tutorialRepository;
    }

    public Tutorial findTutorialByID(Integer id) {
        return tutorialRepository.findById(id).orElse(null);
    }

    // public Iterable<Tutorial> findAllTutorials() {
    // return tutorialRepository.findAll();
    // }

    // public long countTutorials() {
    // return tutorialRepository.count();
    // }

    // public Tutorial createTutorial(String title, String description, Integer id)
    // {
    // System.out.println("Creating new tutorial");
    // Tutorial tutorial = new Tutorial();
    // tutorial.setTitle(title);
    // tutorial.setAuthorID(id);
    // if (description != null)
    // tutorial.setDescription(description);

    // System.out.println("New tutorial being added: " + tutorial);
    // tutorialRepository.save(tutorial);
    // return tutorial;
    // }

    // public void deleteTutorial(Integer id) {
    // tutorialRepository.deleteById(id);
    // }

    // public Tutorial updateTutorial(Integer id, String title, String description)
    // {
    // Optional<Tutorial> optTutorial = tutorialRepository.findById(id);

    // Tutorial tutorial = new Tutorial();
    // if (optTutorial.isPresent()) {
    // Tutorial tutorialToUpdate = optTutorial.get();
    // if (title != null)
    // tutorialToUpdate.setTitle(title);
    // if (description != null)
    // tutorialToUpdate.setDescription(description);

    // tutorialRepository.save(tutorialToUpdate);
    // tutorial = tutorialToUpdate;
    // }
    // return tutorial;
    // }

}
