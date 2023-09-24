import "./style.scss";
import React, { useRef, useState, useEffect } from "react";
import ornament from "./img/ornament.png";
import ornament1 from "./img/ornament1.png";
import frame from "./img/Frame.svg";
import frame1 from "./img/Frame1.svg";
import frame2 from "./img/Frame2.svg";
import frame3 from "./img/Frame3.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ourWorks = [
  {
    image: frame,
    title: "Попередній ескіз",
    text: "Визначення стилістичного рішення інтер'єру, підготовка технічних завдань, планувальних рішень, колажів для всіх приміщень.",
  },
  {
    image: frame1,
    title: "Візуализація проєкта",
    text: "Детальна візуалізація кожної кімнати. 3D-зображення враховують раніше вибрані елементи інтер'єру та оздоблювальні матеріали",
  },
  {
    image: frame2,
    title: "Рабоча документація",
    text: "Створення робочої документації для проєкту дизайну інтер'єру: специфікації та планування з меблями.",
  },
  {
    image: frame3,
    title: "Авторський нагляд",
    text: "Контроль відповідність будівельних робіт проєктному плану. Наш дизайнер та інженер регулярно відвідують об'єкт і все контролюють. Ми здійснюємо закупівлю матеріалів.",
  },
];

function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const mainRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const list = mainRef.current.querySelector("ul");
      const sections = list.querySelectorAll("li");
      let activeIndex = 0;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          activeIndex = index;
        }
      });

      setCurrentIndex(activeIndex);

      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = (scrollTop / (scrollHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      sections.forEach((section, index) => {
        const stepper = section.querySelector(".ourWork-container--stepper");
        if (index === activeIndex) {
          stepper.classList.add("active-number");
        } else {
          stepper.classList.remove("active-number");
        }
        const imageContainer = section.querySelector(".ourWork-container--image");
        if (index === activeIndex) {
          imageContainer.classList.add("active");
        } else {
          imageContainer.classList.remove("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const list = mainRef.current.querySelector("ul");
    const sections = list.querySelectorAll("li");


    sections.forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center ",
          end: "bottom 70%",
          scrub: true,
        },
      });

      tl.to(section, {
        className: (index) => `+=active ${index % 2 === 0 ? "even" : "odd"}`,
        duration: 0.5,
      });

      const stepper = section.querySelector(".ourWork-container--stepper");
      const lineContainer = document.createElement("div");
      lineContainer.className = "vertical-line-container";
      stepper.appendChild(lineContainer);

      const line = document.createElement("div");
      line.className = "vertical-line";
      lineContainer.appendChild(line);

      if (line) {
        const startScroll = (index - 1) / sections.length;
        const endScroll = index / sections.length;

        tl.fromTo(
            line,
            { width: "0%" },
            { width: "100%", duration: 0.5, scrub: true, start: startScroll, end: endScroll }
        );
      }
    });
  }, []);

  const formatIndex = (index) => {
    const formattedIndex = index + 1;
    return formattedIndex < 10 ? `0${formattedIndex}` : formattedIndex;
  };

  return (
      <section className="ourWork" id="OurWork" ref={mainRef}>
        <div className="ourWork-header">
          <img src={ornament} alt="" />
          <h2 className="ourWork-header--title">як ми працюємо</h2>
          <img src={ornament1} alt="" />
        </div>
        <ul className="ourWork-list">
          {ourWorks.map((works, index) => (
              <li
                  key={index}
                  style={{ marginBottom: index === ourWorks.length - 1 ? "0" : "3rem" }}
              >
                <div className={`ourWork-container `}>
                  <div
                      className={`ourWork-container--image ${
                          index % 2 === 0 ? "image-box1" : "image-box2"
                      } `}
                      style={{
                        borderRadius:
                            index % 4 === 0
                                ? "10px 10px 0 10px"
                                : index % 4 === 1
                                    ? "10px 10px 10px 0"
                                    : index % 4 === 2
                                        ? "10px 0 10px 10px"
                                        : "0 10px 10px 10px",
                      }}
                  >
                    <img src={works.image} className="box" alt="" />
                  </div>
                  <div className="ourWork-container--stepper">
                    <div className="step-number">{formatIndex(index)}</div>
                    {index < ourWorks.length - 1 && <div className="stepper-line"></div>}
                  </div>
                  <div
                      className={`ourWork-container--info ${
                          index % 2 === 0 ? "info-box1" : "info-box2"
                      } ${index === currentIndex ? "active" : ""}`}
                  >
                    <h3 className="ourWork-container--title">{works.title}</h3>
                    <p className="ourWork-container--text box">{works.text}</p>
                  </div>
                </div>
              </li>
          ))}
        </ul>
      </section>
  );
}

export default OurWork;
