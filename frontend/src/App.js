import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home";
import ExampleAPIs from "./pages/ExampleAPIs";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/example-apis" element={<ExampleAPIs />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
