import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../../data/projects';
import { NavLink } from 'react-router-dom';
import './style.scss';
import logo from './img/logo.png';
import textLogo from './img/text-logo.png';
import First from '../Main/First/First';

gsap.registerPlugin(ScrollTrigger);

function MoreOurProjects() {
  const oldProjects = projects.filter((project) => project.section === 'old');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      gsap.utils.toArray('.moreOurProjects-links').forEach((block) => {
        const isUpwards =
          block.classList.contains('first-pair') || block.classList.contains('second-pair');

        let startY = 0; // Початкове значення y

        if (isUpwards) {
          startY = -100; // Якщо це "first-pair" або "second-pair", рухати вгору від 0 до -100
        } else {
          startY = 100; // Якщо це "third-pair" або "fourth-pair", рухати вниз від 0 до 100
        }

        gsap.fromTo(
          block,
          {
            y: 0,
            opacity: 1,
          },
          {
            y: startY,
            duration: 2,
            scrollTrigger: {
              trigger: block,
              start: 'top 100%',
              end: 'bottom 10%',
              scrub: true,
            },
          }
        );
      });
    });
  }, []);

  return (
    <section className="moreOurProjects">
      <First />
      <div className="moreOurProjects-section">
        <div className="moreOurProjects-section-content">
          <div className="moreOurProjects-center">
            <div className="moreOurProjects-center-ticker-wrapper">
              <div className="moreOurProjects-center-ticker">
                <div className="moreOurProjects-center--container">
                  <img loading="lazy" src={logo} alt="" className="moreOurProjects-center--logo" />
                  <img
                    loading="lazy"
                    src={textLogo}
                    alt=""
                    className="moreOurProjects-center--logoText"
                  />
                </div>
              </div>
            </div>
          </div>
          {oldProjects
            .map((block) => (
              <NavLink
                key={block.id}
                to={`/projects/info/${block.id}`}
                className={`moreOurProjects-links moreOurProjects-grid--block ${
                  Math.floor(block.id / 2) % 4 === 0
                    ? 'first-pair'
                    : Math.floor(block.id / 2) % 4 === 1
                    ? 'second-pair'
                    : Math.floor(block.id / 2) % 4 === 2
                    ? 'third-pair'
                    : 'fourth-pair'
                }`}>
                <img loading="lazy" src={block.mainPhoto} alt={block.name} />
                <h3>{block.name}</h3>
                <span>{block.square}</span>
                <button className="round-button">
                  <svg
                    width="31"
                    height="31"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_0_40003)">
                      <path
                        d="M21.9557 9.04175L9.03906 21.9584"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.3359 9.04175H21.9609V20.6667"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_0_40003">
                        <rect width="31" height="31" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </NavLink>
            ))
            .slice(0, 8)}
        </div>
      </div>
    </section>
  );
}

export default MoreOurProjects;
