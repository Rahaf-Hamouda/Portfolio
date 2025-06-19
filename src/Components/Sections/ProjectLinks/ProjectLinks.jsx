import { FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectLinks.css";

const ProjectLinks = ({ links }) => {
  return (
    <div className="project-links-container">
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>{link.title}</span>
          <FaExternalLinkAlt className="link-icon" />
        </a>
      ))}
    </div>
  );
};

export default ProjectLinks;
