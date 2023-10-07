  import React from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
  import { useState, useEffect } from 'react';
  import {projects} from "../../../data/projects";

  function Buttons (){
    const [shownPhotosCount, setShownPhotosCount] = useState(16);
    const navigate = useNavigate()
    const { id } = useParams();
    const projectId = parseInt(id, 10);
    const projectIndex = projects.findIndex((block) => block.id === projectId);

    useEffect(() => {
      setShownPhotosCount(16);
    }, [projectId])

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
      return (
          <div className="buttons buttons-padding">
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
            <span style={{display:"none"}}>Кількість показаних фотографій: {shownPhotosCount}</span>
          </div>
      );
    }


  export default Buttons;