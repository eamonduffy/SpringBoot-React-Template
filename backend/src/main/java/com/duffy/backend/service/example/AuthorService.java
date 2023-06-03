package com.duffy.backend.service.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.duffy.backend.model.example.Author;
import com.duffy.backend.model.example.AuthorInput;
import com.duffy.backend.repository.example.AuthorRepository;

@Service
public class AuthorService {

    @Autowired
    AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public Author findAuthorByID(Integer id) {
        return authorRepository.findById(id).orElse(null);
    }

    public Iterable<Author> findAllAuthors() {
        return authorRepository.findAll();
    }

    public long countAuthors() {
        return authorRepository.count();
    }

    public Author addAuthor(AuthorInput author) {
        return authorRepository.save(new Author(author.name(), author.age()));
    }

    public Author createAuthor(String name, Integer age) {
        Author author = new Author();
        author.setName(name);
        if (age != null)
            author.setAge(age);

        authorRepository.save(author);

        return author;
    }

    public boolean deleteAuthor(Integer id) {
        if (authorRepository.findById(id).isPresent()) {
            authorRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    public Author updateAuthor(Integer id, AuthorInput author) {
        Author authorToUpdate = authorRepository.findById(id).orElse(null);
        if (author == null) {
            throw new RuntimeException("Author not found, use a different ID");
        }

        authorToUpdate.setName(author.name());
        authorToUpdate.setAge(author.age());

        authorRepository.save(authorToUpdate);
        return authorToUpdate;
    }
}
