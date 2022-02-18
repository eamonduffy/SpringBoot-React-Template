package com.example.demo.student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
// import com.example.demo.student.StudentService;
import java.util.List;


@RestController // makes this class serve restful endpoints
@RequestMapping(path = "api/v1/student") // set the path to access this
@CrossOrigin("*") // shouldn't do this in production since it allows everything, but usually allow things specifically
public class StudentController {

    private final StudentService studentService;

    @Autowired // the private StudentService will be injected and instantiated
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping // creates a get restful service
	public List<Student> getStudents() {
		return studentService.getStudents();
	}

    @PostMapping // post restful service
    public void registerNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

    @DeleteMapping(path = "{studentId}") // delete restful service
    public void deleteStudent(@PathVariable("studentId") Long studentId) {
        studentService.deleteStudent(studentId);
    }

    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") Long studentId, @RequestParam(required = false) String name, @RequestParam(required = false) String email) {
        studentService.updateStudent(studentId, name, email);
    }
    
}
