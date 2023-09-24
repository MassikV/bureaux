import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from "../../data/projects";
import Header from '../../components/Header';
import "./style.scss";
const ProjectInfo = () => {
  const [shownPhotosCount, setShownPhotosCount] = useState(16);
  const navigate = useNavigate()
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const projectIndex = projects.findIndex((block) => block.id === projectId);

  useEffect(() => {
    setShownPhotosCount(16);
  }, [projectId])

  if (projectIndex === -1) {
    return <div>Проект не знайдено</div>;
  }

  const goToNextProject = () => {
    const nextProjectIndex = (projectIndex + 1) % projects.length;
    const nextProjectId = projects[nextProjectIndex].id;
    navigate(`/bureaux/projects-info/${nextProjectId}`);
  };

  const goToPreviousProject = () => {
    const previousProjectIndex = (projectIndex - 1 + projects.length) % projects.length;
    const previousProjectId = projects[previousProjectIndex].id;
    navigate(`/bureaux/projects-info/${previousProjectId}`);
  };

  const project = projects[projectIndex];

  const loadMorePhotos = () => {
    setShownPhotosCount(prevCount => prevCount + 16);
  };

  return (
      <div className='project-block'>
        <div className="project-block__info">
          <Header />
          <div className="project-block__intro">
            <div className="project-block__wrapper">
              <h1 className="project-block__title">{project.name}</h1>
              <div className="project-block__description">
                <span className="project-block__subtitle">{project.square}</span>
                <span className="project-block__subtitle">{project.city}</span>
                <span className="project-block__subtitle">{project.year}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='project-info'>
          {project.allPhoto.slice(0, shownPhotosCount).map((item, i) => (
              <div className='project-info__item' key={i}>
                <img className='project-info__img' src={item} alt={''}/>
              </div>
          ))}
        </div>
        {
            shownPhotosCount < project.allPhoto.length &&
            <button className="project-info__load-more" onClick={loadMorePhotos}>Показати більше</button>
        }
        <div className="buttons">
          <div className="buttons__wrapper">
            <div className="buttons__btn" onClick={goToPreviousProject}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <g clip-path="url(#clip0_0_40643)">
                  <path d="M16.875 20.252L10.125 13.502L16.875 6.75195" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_0_40643">
                    <rect width="27" height="27" fill="white" transform="matrix(0 -1 -1 0 27 27)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span>Попередній проєкт</span>
          </div>
          <div className="buttons__wrapper">
            <span>Наступний проєкт</span>
            <div className="buttons__btn" onClick={goToNextProject}>
              <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                <g clip-path="url(#clip0_0_40650)">
                  <path d="M10.125 20.252L16.875 13.502L10.125 6.75195" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                  <clipPath id="clip0_0_40650">
                    <rect width="27" height="27" fill="white" transform="matrix(0 -1 1 0 0 27)"/>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ProjectInfo;
