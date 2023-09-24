import  { NavLink } from "react-router-dom";
import './style.scss';
import logo from "./img/logo.png";
import textLogo from "./img/text-logo.png";
import { projects } from '../../data/projects';
import Header from "../../components/Header";
import First from "../Main/First/First";
function MoreOurProjects() {
  const oldProjects = projects.filter(project => project.section === "old");
  return (
      <section className="moreOurProjects">
        <Header/>
        <First/>
        <div className="moreOurProjects-section">
        <div className="moreOurProjects-center">
          <div className="moreOurProjects-center-ticker-wrapper">
            <div className="moreOurProjects-center-ticker">
              <div className="moreOurProjects-center--container">
                <img src={logo} alt="" className="moreOurProjects-center--logo" />
                <img
                    src={textLogo}
                    alt=""
                    className="moreOurProjects-center--logoText"
                />
              </div>
            </div>
          </div>
        </div>
        {oldProjects.map((block) => (
            <NavLink
                key={block.id}
                to={`/bureaux/projects-info/${block.id}`}
                className={`moreOurProjects-grid--block ${Math.floor(block.id / 2) % 4 === 0 ? 'first-pair' : Math.floor(block.id / 2) % 4 === 1 ? 'second-pair' : Math.floor(block.id / 2) % 4 === 2 ? 'third-pair' : 'fourth-pair'}`}>
              <img src={block.mainPhoto} alt={block.name} />
              <h3>{block.name}</h3>
              <span>{block.text}</span>
              <button className="round-button">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_0_40003)">
                    <path d="M21.9557 9.04175L9.03906 21.9584" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10.3359 9.04175H21.9609V20.6667" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_40003">
                      <rect width="31" height="31" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </NavLink>
        ))}
      </div>
      </section>
  );
}

export default MoreOurProjects;
