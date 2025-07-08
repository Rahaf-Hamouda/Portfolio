import "./Work.css";
import login from "../../assets/login.png";
import card from "../../assets/card.png";
import de6 from "../../assets/de6.png";
import { useState, useRef } from "react";

import WordPress from "../Sections/Wordpress/Wodpress";
import HTML from "../Sections/HTMLCSS/HTML";
import ReactGallery from "../Sections/React/React";
import ProjectLinks from "../Sections/ProjectLinks/ProjectLinks";

const Works = () => {
  const [activeGallery, setActiveGallery] = useState(null);
  const galleryRef = useRef(null);

  const scrollToGallery = () => {
    if (galleryRef.current) {
      const yOffset = -350;   
      const y =
        galleryRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleCardClick = (galleryName) => {
    const newGallery = activeGallery === galleryName ? null : galleryName;
    setActiveGallery(newGallery);

    setTimeout(() => {
      if (newGallery) {
        scrollToGallery();
      }
    }, 100);
  };

  return (
    <section id="works">
      <h2 className="workstitle">My Project</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details
      </span>

      <div className="cards-wrapper">
        <div className="card_container">
          <div className="card_title">
            <h2>WordPress Project</h2>
            <div className="image_container">
              <img src={de6} alt="WordPress Project" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() => handleCardClick("wordpress")}
            >
              {activeGallery === "wordpress" ? "Hide" : "See More"}
            </button>
          </div>
        </div>

        <div className="card_container">
          <div className="card_title">
            <h2>HTML & CSS & JS Project</h2>
            <div className="image_container">
              <img src={card} alt="HTML & CSS Project" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() => handleCardClick("html")}
            >
              {activeGallery === "html" ? "Hide" : "See More"}
            </button>
          </div>
        </div>

        <div className="card_container">
          <div className="card_title">
            <h2>ReactJS Project</h2>
            <div className="image_container">
              <img src={login} alt="React Project" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() => handleCardClick("react")}
            >
              {activeGallery === "react" ? "Hide" : "See More"}
            </button>
          </div>
        </div>
      </div>

      {(activeGallery === "wordpress" ||
        activeGallery === "html" ||
        activeGallery === "react") && (
        <div ref={galleryRef} className="active-gallery-wrapper">
          {activeGallery === "wordpress" && <WordPress />}
          {activeGallery === "html" && <HTML />}
          {activeGallery === "react" && <ReactGallery />}

          {activeGallery === "html" && (
            <ProjectLinks
              links={[
                {
                  title: "Template One",
                  url: "https://rahaf-hamouda.github.io/HTML_CSS_Template_One/",
                },
                 {
                  title: "Template Two",
                  url: "https://rahaf-hamouda.github.io/Kasper-Template-Two/",
                },
                {
                  title: "Flex-Panel-Gallery",
                  url: " https://rahaf-hamouda.github.io/Flex-Panel-Gallery/",
                },
                {
                  title: "Array-Cardio",
                  url: "https://rahaf-hamouda.github.io/Array-Cardio/",
                },
                {
                  title: "Scoped-CSS-Variables-and-JS",
                  url: "https://rahaf-hamouda.github.io/Scoped-CSS-Variables-and-JS/",
                },
                {
                  title: "JS-and-CSS-Clock",
                  url: " https://rahaf-hamouda.github.io/-JS-and-CSS-Clock/",
                },
                {
                  title: "JavaScript-Drum-Kit",
                  url: "https://rahaf-hamouda.github.io/JavaScript-Drum-Kit/",
                },
                {
                  title: "Type-Ahead",
                  url: "https://rahaf-hamouda.github.io/Type-Ahead/",
                },
                {
                  title: "HTML5-Canvas-Drawing-App",
                  url: "https://rahaf-hamouda.github.io/HTML5-Canvas-Drawing-App/",
                },
              ]}
            />
          )}

          {activeGallery === "react" && (
            <ProjectLinks
              links={[
                {
                  title: "Beauty",
                  url: "https://beauty-project-pi4w.vercel.app/",
                },
              ]}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Works;
