import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../../data/projects';
import Header from '../../components/Header';
import ProjectLoader from '../../components/ProjectLoader';
import './style.scss';
import Buttons from './Buttons';
import Modal from './Modal';

const ProjectInfo = () => {
  const [shownPhotosCount, setShownPhotosCount] = useState(16);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const projectIndex = projects.findIndex((block) => block.id === projectId);
  const [showSlider, setShowSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    setLoading(true);
    setShownPhotosCount(16);
    setTimeout(() => setLoading(false), 500);
  }, [projectId]);

  useEffect(() => {
    setLoading(false);
  }, [shownPhotosCount]);

  const handleLoadMorePhotos = (event) => {
    event.stopPropagation();
    setLoading(true);
    setShownPhotosCount((prevCount) => prevCount + 16);
    setTimeout(() => setLoading(false), 500);
  };

  if (projectIndex === -1) {
    return <div>Проект не найден</div>;
  }

  const project = projects[projectIndex];

  const projectBlockInfoStyle = {
    backgroundImage: `url(${project.mainPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const handlePrev = () => {
    if (sliderIndex > 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };

  const handleNext = () => {
    if (sliderIndex < project.allPhoto.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  return (
    <div className="project-container">
      <Header />
      <ProjectLoader loading={loading} />
      {!loading && (
        <div className="project-container__info" style={projectBlockInfoStyle}>
          <div className="project-container__intro">
            <div className="project-container__wrapper">
              <h1 className="project-container__title">{project.name}</h1>
              <div className="project-container__description">
                <span className="project-container__subtitle">{project.square}</span>
                <span className="project-container__subtitle">{project.city}</span>
                <span className="project-container__subtitle">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="project-container__photo">
        <div className="container">
          <Buttons />
          {!loading && (
            <div className="project-info">
              {project.allPhoto.slice(0, shownPhotosCount).map((item, i) => (
                <div
                  className="project-info__item"
                  key={i}
                  onClick={() => {
                    setSliderIndex(i);
                    setShowSlider(true);
                  }}>
                  <img loading="lazy" key={i} className="project-info__img" src={item} alt="" />
                </div>
              ))}
            </div>
          )}
          {!loading && shownPhotosCount < project.allPhoto.length && (
            <button className="project-info__load-more" onClick={handleLoadMorePhotos}>
              Показати більше
            </button>
          )}
          <Buttons />
        </div>
        {showSlider && (
          <Modal
            onClose={() => setShowSlider(false)}
            imageSrc={project.allPhoto[sliderIndex]}
            imageAlt="gallery image"
            onPrev={handlePrev}
            onNext={handleNext}
            isPrevDisabled={sliderIndex === 0}
            isNextDisabled={sliderIndex === project.allPhoto.length - 1}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
