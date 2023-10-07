import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { projects } from "../../data/projects";
import Header from '../../components/Header';
import "./style.scss";
import Buttons from "./Buttons";

const ProjectInfo = () => {
  const [shownPhotosCount, setShownPhotosCount] = useState(16);
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const projectIndex = projects.findIndex((block) => block.id === projectId);

  useEffect(() => {
    setShownPhotosCount(16);
  }, [projectId])

  if (projectIndex === -1) {
    return <div>Проект не знайдено</div>;
  }

  const project = projects[projectIndex];

  const loadMorePhotos = () => {
    setShownPhotosCount(prevCount => prevCount + 16);
  };

  
  const projectBlockInfoStyle = {
    backgroundImage: `url(${project.mainPhoto})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
      <div className='project-block'>
        <div className="project-block__info" style={projectBlockInfoStyle}>
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
        <div className='container-info'>
        <Buttons/>
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
        <Buttons/>
        </div>

      </div>
  );
}

export default ProjectInfo;
