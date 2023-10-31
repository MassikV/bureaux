import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import PopUp from './components/PopUp';
import Preloader from './components/Preloader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cursor from './components/Cursor';
import Main from './pages/Main';
// const Main = lazy(() => import('./pages/Main'));
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
          <Route path="projects" element={<MoreOurProjects />} />
          <Route path="projects/info/:id" element={<ProjectsInfo />} />
        </Routes>
        <PopUp />
        <Footer />
        <ToastContainer />
      </Suspense>
    </Router>
  );
}

export default App;
