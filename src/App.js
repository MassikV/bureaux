import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer"
import PopUp from "./components/PopUp";
import Main from './pages/Main'
import MoreOurProjects from './pages/MoreOurProjects'
import PhonePopUp from "./components/PhonePopUp";
function App() {
  // const { language, toggleLanguage, theme, toggleTheme } = useGlobalContext();
  // <div className="theme-toggle" onClick={toggleTheme}>
  //   {theme === 'light' ? '🌞' : '🌙'}
  // </div>
  // <div className="language" onClick={toggleLanguage}>
  //   {language === 'ua' ? 'ua' : 'eng'}
  // </div>
  return (
      <Router>
        <Header />
        <PhonePopUp/>
          <Routes>
            <Route path="/bureaux/" element={<Main />} />
            <Route path="/projects" element={<MoreOurProjects />} />
          </Routes>
        <PopUp/>
          <Footer />
        </Router>
  );
}


export default App;
