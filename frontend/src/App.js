import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/home";
import About from "./pages/about";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </>
    );
}

export default App;
