package com.duffy.backend.model.example;

// must be explicit to what graphql request will use so must be 'authorId' if that's what's being referenced
public record TutorialInput(String title, String description, Integer authorId) {

}
