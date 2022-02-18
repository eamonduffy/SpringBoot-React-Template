package com.example.demo.student;

import java.time.LocalDate;
import java.time.Month;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class StudentConfig {
    
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository studentRepository) {
        return args -> {
            Student eamon = new Student(
                "Eamon",
                "eamon.duffy@gmail.com",
                LocalDate.of(1998, Month.MARCH, 11)
            );

            Student conor = new Student(
                "Conor",
                "conor.duffy@gmail.com",
                LocalDate.of(1997, Month.JANUARY, 5)
            );

            // save to database
            studentRepository.saveAll(List.of(eamon, conor));
        };
    }
}
