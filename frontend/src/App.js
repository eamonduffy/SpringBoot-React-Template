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
        <div className="app-container">
            <Navbar />
            <div className="content-container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/example-apis" element={<ExampleAPIs />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;
