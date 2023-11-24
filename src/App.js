import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Preloader from './components/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './components/Cursor';
const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const PopUp = lazy(() => import('./components/PopUp'));
const Main = lazy(() => import('./pages/Main'));
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
      <Analytics />
    </Router>
  );
}

export default App;
