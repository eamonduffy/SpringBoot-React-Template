package com.example.demo.student;
import java.util.List;
// import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service // sets this as a Bean (can also use @Component)
public class StudentService {

	private final StudentRepository studentRepository;
	
	@Autowired  // the private StudentRepository will be injected and instantiated 
	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}


	public List<Student> getStudents() {
		// returns list of all students from db
		return studentRepository.findAll();

		// static manual list for testing
		// return List.of(new Student(
		// 	1L,
		// 	"Eamon",
		// 	"eamon.duffy0@gmail.com",
		// 	LocalDate.of(1998, Month.MARCH, 5),
		// 	23
		// ));
	}


    public void addNewStudent(Student student) {
		// check if student email is in db already
		Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
		if (studentOptional.isPresent()) {
			throw new IllegalStateException("email taken");
		}

		studentRepository.save(student);
    }


	public void deleteStudent(Long studentId) {
		// check if student exists, delete student if exception not thrown
		boolean exists = studentRepository.existsById(studentId);
		if (!exists) {
			throw new IllegalStateException("student with id " + studentId + " does not exist");
		}
		studentRepository.deleteById(studentId);
	}

	@Transactional
    public void updateStudent(Long studentId, String name, String email) {
		// // create student entity to work with and see if it exists
		// Student student = studentRepository.findById(studentId)
		// 	.orElse(() -> IllegalStateException(
		// 		"student with id " + studentId + " does not exist"));

		// // check if name and email are not equal to null null
		// if (name != null && name.length() > 0 && !Objects.equals(student.getName(), name)) {
		// 	student.setName(name);
		// }

		// if (email != null && email.length() > 0 && !Objects.equals(student.getEmail(), email)) {
		// 	// check if updated email has been taken
		// 	Optional<Student> sOptional = studentRepository.findStudentByEmail(email);
		// 	if (sOptional.isPresent()) {
		// 		throw new IllegalStateException("email taken");
		// 	}
		// 	student.setEmail(email);
		// }
    }	
}
