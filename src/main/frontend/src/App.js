import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

// COMPONENTS
import TestFunctionalComp from "./Components/TestFunctionalComp";
import TestClassComp from "./Components/TestClassComp";
import Form from "./Components/Form";

// component that retrieves data from db and displays in html
const StudentProfiles = () => {
  const [studentProfiles, setStudentProfiles] = useState([]);

  const fetchStudentProfiles = () => {
    axios.get("http://localhost:8080/api/v1/student").then((res) => {
      console.log(res);
      setStudentProfiles(res.data);
    });
  };

  useEffect(() => {
    fetchStudentProfiles();
  }, []);

  return studentProfiles.map((studentProfile, index) => {
    return (
      <div key={index}>
        <h1>{studentProfile.name}</h1>
        <p>{studentProfile.email}</p>
      </div>
    );
  });
};

function App() {
  return (
    <div className="App">
      <StudentProfiles />
      {/* <TestClassComp />
      <TestFunctionalComp /> */}
      <Form />
    </div>
  );
}

export default App;
