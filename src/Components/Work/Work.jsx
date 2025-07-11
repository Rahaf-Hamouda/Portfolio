import "./Work.css";
import login from "../../assets/login.png";
import card from "../../assets/ProfileCard.png";
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
  <div ref={galleryRef} className="active-gallery-wrapper">
    <ProjectLinks
      links={[
        {
          title: "Template One",
          url:"https://rahaf-hamouda.github.io/HTML_CSS_Template_One/",
          github: "https://github.com/Rahaf-Hamouda/HTML_CSS_Template_One",
        },
        {
          title: "Template Two",
          url:"https://rahaf-hamouda.github.io/Kasper-Template-Two/",
          github: "https://github.com/Rahaf-Hamouda/Kasper-Template-Two",
        },
        {
          title: "Flex-Panel-Gallery",
          url:"https://rahaf-hamouda.github.io/Flex-Panel-Gallery/",
          github: "https://github.com/Rahaf-Hamouda/Flex-Panel-Gallery",
        },
        {
          title: "Array-Cardio",
          url:"https://rahaf-hamouda.github.io/Array-Cardio/",
          github: "https://github.com/Rahaf-Hamouda/Array-Cardio",
        },
        {
          title: "Scoped-CSS-Variables-and-JS",
          url:"https://rahaf-hamouda.github.io/Scoped-CSS-Variables-and-JS/",
          github: "https://github.com/Rahaf-Hamouda/Scoped-CSS-Variables-and-JS",
        },
        {
          title: "JS-and-CSS-Clock",
          url:" https://rahaf-hamouda.github.io/-JS-and-CSS-Clock/",
          github: "https://github.com/Rahaf-Hamouda/-JS-and-CSS-Clock",
        },
        {
          title: "JavaScript-Drum-Kit",
          url:"https://rahaf-hamouda.github.io/JavaScript-Drum-Kit/",
          github: "https://github.com/Rahaf-Hamouda/JavaScript-Drum-Kit",
        },
        {
          title: "Type-Ahead",
          url:"https://rahaf-hamouda.github.io/Type-Ahead/",
          github: "https://github.com/Rahaf-Hamouda/Type-Ahead",
        },
        {
          title: "HTML5-Canvas-Drawing-App",
          url:"https://rahaf-hamouda.github.io/HTML5-Canvas-Drawing-App/",
          github: "https://github.com/Rahaf-Hamouda/HTML5-Canvas-Drawing-App",
        },
      ]}
    />
  </div>
)}
{activeGallery === "react" && (
  <div ref={galleryRef} className="active-gallery-wrapper">
    <ProjectLinks
      links={[
        {
          title: "Beauty Salon",
          url: "https://beauty-project-pi4w.vercel.app/",
          github: "https://github.com/Rahaf-Hamouda/Beauty-Project",
          isReact: true
        }
      ]}
    />
  </div>
)}
        </div>
      )}
    </section>
  );
};

export default Works;




// import "./Work.css";
// import { useState, useRef } from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import WordPress from "../Sections/Wordpress/Wodpress";
// import HTML from "../Sections/HTMLCSS/HTML";
// import ReactGallery from "../Sections/React/React";

// const Works = () => {
//   const [activeGallery, setActiveGallery] = useState(null);
//   const galleryRef = useRef(null);

//   const scrollToGallery = () => {
//     if (galleryRef.current) {
//       const yOffset = -100;
//       const y = galleryRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//   };

//   const handleCardClick = (galleryName) => {
//     const newGallery = activeGallery === galleryName ? null : galleryName;
//     setActiveGallery(newGallery);
//     if (newGallery) setTimeout(scrollToGallery, 100);
//   };

//   return (
//     <section id="works">
//       <h2 className="workstitle">My Projects</h2>
//       <span className="worksDesc">
//         Carefully crafted digital solutions with attention to detail
//       </span>

//       <div className="cards-wrapper">
//         {/* WordPress Card */}
//         <div className="card_container" onClick={() => handleCardClick("wordpress")}>
//           <div className="card_content">
//             <h2>WordPress Development</h2>
//             <p className="project-description">
//               Built e-commerce and business websites using WooCommerce and Astra/Ultra themes,
//               focusing on performance and user experience.
//             </p>
//             <button className="worksBtn">
//               {activeGallery === "wordpress" ? "Hide Projects" : "View Projects"}
//             </button>
//           </div>
//         </div>

//         {/* HTML/CSS/JS Card */}
//         <div className="card_container" onClick={() => handleCardClick("html")}>
//           <div className="card_content">
//             <h2>Frontend Projects</h2>
//             <p className="project-description">
//               Created responsive websites and interactive UI components using modern
//               HTML5, CSS3, and JavaScript (ES6+).
//             </p>
//             <button className="worksBtn">
//               {activeGallery === "html" ? "Hide Projects" : "View Projects"}
//             </button>
//           </div>
//         </div>

//         {/* React Card */}
//         <div className="card_container" onClick={() => handleCardClick("react")}>
//           <div className="card_content">
//             <h2>React Applications</h2>
//             <p className="project-description">
//               Developed single-page applications with React.js, implementing modern
//               state management and responsive design patterns.
//             </p>
//             <button className="worksBtn">
//               {activeGallery === "react" ? "Hide Projects" : "View Projects"}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Active Gallery Section */}
//       {(activeGallery === "wordpress" || activeGallery === "html" || activeGallery === "react") && (
//         <div ref={galleryRef} className="active-gallery-wrapper">
//           {activeGallery === "wordpress" && <WordPress />}
//           {activeGallery === "html" && <HTML />}
//           {activeGallery === "react" && <ReactGallery />}
//         </div>
//       )}
//     </section>
//   );
// };

// export default Works;