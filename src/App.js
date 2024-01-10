import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { inject } from '@vercel/analytics';
import Preloader from './components/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './components/Cursor';
import Main from './pages/Main';
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const PopUp = lazy(() => import('./components/PopUp'));
const MoreOurProjects = lazy(() => import('./pages/MoreOurProjects'));
const ProjectsInfo = lazy(() => import('./pages/ProjectsInfoPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Cursor />
        <Header />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/projects" element={<MoreOurProjects />} />
          <Route path="/projects/info/:id" element={<ProjectsInfo />} />
        </Routes>
        <PopUp />
        <Footer />
        <ToastContainer />
      </Suspense>
    </Router>
  );
}
inject();
export default App;
