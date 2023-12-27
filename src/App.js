import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./routes/Navbar";
import Home from "./routes/Home";
import About from './routes/About';
import NoPage from "./routes/NoPage";

import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
