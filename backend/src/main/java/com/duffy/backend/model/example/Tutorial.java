package com.duffy.backend.model.example;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class Tutorial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false, updatable = false)
    private Author author;

    @Override
    public String toString() {
        return "Tutorial [id=" + id + ", title=" + title + ", description=" + description + ", author=" + author + "]";
    }
}
