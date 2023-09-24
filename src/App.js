import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import PopUp from "./components/PopUp";
import Main from './pages/Main';
import MoreOurProjects from './pages/MoreOurProjects';
import PhonePopUp from "./components/PhonePopUp";
import ProjectsInfo from './pages/ProjectsInfoPage';

function App() {


  return (
    <Router>
      <PhonePopUp />
      <Routes>
        <Route path="/bureaux/" element={<Main />} />
        <Route path="/bureaux/projects" element={<MoreOurProjects />} />
        <Route path="/bureaux/projects-info/:id" element={<ProjectsInfo />} />
      </Routes>
      <PopUp />
      <Footer />
    </Router>
  );
}

export default App;
