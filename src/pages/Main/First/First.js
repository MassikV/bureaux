import Header from "../../../components/Header"
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./img/logo.png"
import "./first.scss";
import { projects } from "../../../data/projects";
import MoreProject from "../../../components/MoreProject/MoreProject";
import React, { useState } from 'react';

const First = () => {
  const location = useLocation();
    const newProjects = projects.filter(project => project.section === "new");
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (projectId) => {
    setHoveredProject(projectId);
  }

  const handleMouseLeave = () => {
    setHoveredProject(null);
  }
    return(
        <section className="First">
            <Header/>
            <div className="First__info">
                <img src={Logo} alt="" className="First__logo" />
                <p className="First__title">Оселя з українською душeю</p>
            </div>
          {!location.pathname.includes('/projects') && (
            <div className="First__projects">
                <h3 className="First__projects__title">Проекти</h3>
                <div className="First__projects__wrapper">
                    {newProjects.map((item) => (
                        <NavLink to={`/bureaux/projects/${item.id}`} className="First__projects__block" key={item.id} onMouseEnter={() => handleMouseEnter(item.id)}
                                 onMouseLeave={handleMouseLeave}>
                            <img src={item.mainPhoto} className="First__projects__img" alt="" />
                            {hoveredProject === item.id && (
                                <div className="First__projects--container">
                                  <span className="First__projects--number">{item.id-8}</span>
                                  <p className="First__projects--title">{item.name}</p>
                                  <p className="First__projects--square">{item.text}</p>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
                <MoreProject/>
            </div>
          )}
          {location.pathname === '/bureaux/projects' && (
              <div className="moreOurProjects-info">
                <h2>Наші проєкти</h2>
                <p>
                  У нас є можливість виконання проектів під ключ і для цього ми маємо
                  надійних підрядників, які здатні якісно закрити весь спектр необхідних
                  послуг.
                </p>
              </div>
          )}
        </section>
    );
}

export default First;