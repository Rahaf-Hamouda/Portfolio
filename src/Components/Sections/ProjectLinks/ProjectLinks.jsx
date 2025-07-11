// import { FaExternalLinkAlt } from "react-icons/fa";
// import "./ProjectLinks.css";

// const ProjectLinks = ({ links }) => {
//   return (
//     <div className="project-links-container">
//       {links.map((link, idx) => (
//         <a
//           key={idx}
//           href={link.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="project-link"
//         >
//           <span>{link.title}</span>
//           <FaExternalLinkAlt className="link-icon" />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default ProjectLinks;
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectLinks.css";

const ProjectLinks = ({ links }) => {
  return (
    <div className="projects-grid">
      {links.map((project, idx) => (
        <div 
          key={idx} 
          className={`project-card ${project.isReact ? 'react-project' : ''}`}
        >
          <h3 className="project-title">{project.title}</h3>
          <div className="project-details">
            <p>{getProjectDescription(project.title)}</p>
            <p className="tech-used">Technologies: {getProjectTechnologies(project.title)}</p>
            <div className="project-links-container">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project"
              >
                {getButtonText(project.title)}
                <FaExternalLinkAlt className="link-icon" />
              </a>
              <a
                href={project.github || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className={`view-project github-link ${!project.github ? 'disabled-link' : ''}`}
                aria-disabled={!project.github}
              >
                View Code
                <FaGithub className="link-icon" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper functions
const getProjectDescription = (title) => {
  const descriptions = {
    "Template One": "A clean, responsive HTML/CSS template developed from scratch as part of my learning journey with Elzero Web School.",
    "Template Two": "A modern, fully responsive HTML & CSS template featuring a sleek design with smooth animations.",
    "Flex-Panel-Gallery": "An interactive image gallery built with CSS Flexbox and JavaScript.",
    "Array-Cardio": "A JavaScript practice project demonstrating powerful array manipulation methods.",
    "Scoped-CSS-Variables-and-JS": "Interactive demo showing JavaScript-controlled CSS variables.",
    "JS-and-CSS-Clock": "A beautiful analog clock built with CSS transforms and JavaScript.",
    "JavaScript-Drum-Kit": "Interactive drum machine that responds to keyboard presses.",
    "Type-Ahead": "Real-time city search that filters matches as you type.",
    "HTML5-Canvas-Drawing-App": "HTML5 Canvas drawing application with customizable tools.",
    "Beauty Salon": "A modern beauty salon website with responsive design, interactive components, and optimized performance using React Scroll for navigation."
  };
  return descriptions[title] || "A front-end development project.";
};

const getProjectTechnologies = (title) => {
  const technologies = {
    "Template One": "HTML5, CSS3",
    "Template Two": "HTML5, CSS3, JavaScript",
    "Flex-Panel-Gallery": "HTML5, CSS3 Flexbox, JavaScript (ES6)",
    "Array-Cardio": "JavaScript (ES6)",
    "Scoped-CSS-Variables-and-JS": "CSS3 Variables, JavaScript",
    "JS-and-CSS-Clock": "CSS3 Transforms, JavaScript",
    "JavaScript-Drum-Kit": "JavaScript, HTML5 Audio",
    "Type-Ahead": "Fetch API, JavaScript",
    "HTML5-Canvas-Drawing-App": "HTML5 Canvas, JavaScript",
    "Beauty Salon": "React 18, CSS Modules, React Scroll, Vite"
  };
  return technologies[title] || "Various web technologies";
};

const getButtonText = (title) => {
  const buttonTexts = {
    "Template One": "View Project",
    "Template Two": "View Project",
    "Flex-Panel-Gallery": "View Live Demo",
    "Array-Cardio": "Run Exercises",
    "Scoped-CSS-Variables-and-JS": "Play with Variables",
    "JS-and-CSS-Clock": "Watch Live",
    "JavaScript-Drum-Kit": "Play with Keyboard",
    "Type-Ahead": "Try Search",
    "HTML5-Canvas-Drawing-App": "Start Drawing",
    "Beauty Salon": "View Live Demo"
  };
  return buttonTexts[title] || "View Project";
};

export default ProjectLinks;