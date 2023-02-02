import React from "react";
import { Route, Routes } from "react-router-dom";
import HOC from "./layout";
import Home from "./pages/home";
import Resume from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route element={<HOC />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
