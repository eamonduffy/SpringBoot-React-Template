package com.duffy.backend.resolver.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.duffy.backend.model.example.Author;
import com.duffy.backend.repository.example.AuthorRepository;

@Component
public class AuthorMutation implements GraphQLMutationResolver {

    @Autowired
    private AuthorRepository authorRepository;

    public AuthorMutation(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author createAuthor(String name, Integer age) {
        Author author = new Author();
        author.setName(name);
        author.setAge(age);

        authorRepository.save(author);

        return author;
    }
}
