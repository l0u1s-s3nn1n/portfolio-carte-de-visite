import React from "react";
//RouterDOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import des pages
import Home from './pages/Home';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';


  
//application principale
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/competences" element={<Knowledges/>} exact />
        <Route path="/portfolio" element={<Portfolio/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="*" element={<NotFound/>}/>      
      </Routes>
    </Router>
  </>
  );
};

export default App;
