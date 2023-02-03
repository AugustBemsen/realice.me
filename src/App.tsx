import React from "react";
import { Route, Routes } from "react-router-dom";
import HOC from "./layout";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Resume from "./pages/resume";

function App() {
  return (
    <Routes>
      <Route element={<HOC />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<h1>Projects</h1>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
