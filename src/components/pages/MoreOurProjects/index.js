import React from 'react';
import './style.scss'
import logo from "./img/logo.png";
import textLogo from "./img/text-logo.png";
import columnPhoto1 from './img/1.png'
import columnPhoto2 from './img/2.png'
import columnPhoto3 from './img/3.png'
import columnPhoto4 from './img/4.png'
import columnPhoto5 from './img/5.png'
import columnPhoto6 from './img/6.png'
import columnPhoto7 from './img/7.png'
import columnPhoto8 from './img/8.png'

function MoreOurProjects() {
  const blocks = [
    {
      name: "ItalKv",
      text: "74 м. кв.",
      image: columnPhoto1,
    },
    {
      name: "VRSHV+ 90",
      text: "90 м. кв.",
      image: columnPhoto2,
    },
    {
      name: "VRSHV+ 74",
      text: "74 м. кв.",
      image: columnPhoto3,
    },
    {
      name: "Seven01",
      text: "100 м. кв.",
      image: columnPhoto4,
    },
    {
      name: "RiverStone",
      text: "100 м. кв.",
      image: columnPhoto5,
    },
    {
      name: "VRSHV 107",
      text: "107 м. кв.",
      image: columnPhoto6,
    },
    {
      name: "Green Ville Park",
      text: "100 м. кв.",
      image: columnPhoto7,
    },
    {
      name: "Berezhansk",
      text: "74 м. кв.",
      image: columnPhoto8,
    },
  ];

  return (
      <section className="moreOurProjects">

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
        {blocks.map((block, index) => (
            <div
                key={index}
                className={`moreOurProjects-grid--block ${(Math.floor(index / 2) % 4 === 0) ? 'first-pair' : (Math.floor(index / 2) % 4 === 1) ? 'second-pair' : (Math.floor(index / 2) % 4 === 2) ? 'third-pair' : 'fourth-pair'}`}
            >
              <img src={block.image} alt={block.name} />
              <h3>{block.name}</h3>
              <span>{block.text}</span>
              <button className="round-button">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_0_40003)">
                    <path d="M21.9557 9.04175L9.03906 21.9584" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.3359 9.04175H21.9609V20.6667" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_0_40003">
                      <rect width="31" height="31" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>

              </button>
            </div>
        ))}
      </section>
  );
}

export default MoreOurProjects;
