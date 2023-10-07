import './App.css';
import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import Main from './pages/Main';
import MoreOurProjects from './pages/MoreOurProjects';
import PhonePopUp from "./components/PhonePopUp";
import ProjectsInfo from './pages/ProjectsInfoPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <Router>
      <Header/>
      <PhonePopUp />
      <Routes>
        <Route path="/bureaux/" element={<Main />} />
        <Route path="/bureaux/projects" element={<MoreOurProjects />} />
        <Route path="/bureaux/projects-info/:id" element={<ProjectsInfo />} />
      </Routes>
      <PopUp />
      <Footer />
      <ToastContainer />
    </Router>
  );
}

export default App;
