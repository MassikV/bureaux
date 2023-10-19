import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import ProjectLoader from "./components/ProjectLoader";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = lazy(() => import("./pages/Main"));
const MoreOurProjects = lazy(() => import('./pages/MoreOurProjects'));
const ProjectsInfo = lazy(() => import('./pages/ProjectsInfoPage'));

function App() {
  return (
      <Router>
        <Suspense fallback={<ProjectLoader />}>
        <Header/>
        <Routes>
          <Route
              exact
              path="/bureaux/"
              element={<Main />}
          />
          <Route
              path="/bureaux/projects"
              element={<MoreOurProjects />}
          />
          <Route
              path="/bureaux/projects/info/:id"
              element={<ProjectsInfo />}
          />
        </Routes>
        <PopUp />
        <Footer />
        <ToastContainer />
        </Suspense>
      </Router>
  );
}

export default App;
