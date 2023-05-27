package com.duffy.backend.repository.example;

import org.springframework.data.jpa.repository.JpaRepository;

import com.duffy.backend.model.example.Tutorial;

public interface TutorialRepository extends JpaRepository<Tutorial, Long> {

}
