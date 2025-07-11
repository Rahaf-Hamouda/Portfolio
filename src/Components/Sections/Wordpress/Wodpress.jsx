import de1 from '../../../assets/de1.png';
import de2 from '../../../assets/de2.png';
import de3 from '../../../assets/de3.png';
import de4 from '../../../assets/de4.png';
import de5 from '../../../assets/de5.png';
import de6 from '../../../assets/de6.png';
import de7 from '../../../assets/de7.png';
import de8 from '../../../assets/de8.png';

const WordPress = () => {
  const images = [de1, de2, de3, de4, de5, de6, de7, de8];

  return (
    <div className="horizontal-gallery">
      <div className="scroll-wrapper">
        {images.map((img, index) => (
          <a key={index} href={img} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={`wp-${index}`} className="gallery-img" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default WordPress;

// import de1 from '../../../assets/de1.png';
// import de2 from '../../../assets/de2.png';
// import de3 from '../../../assets/de3.png';

// const WordPress = () => {
//   const projects = [
//     {
//       title: "E-commerce Store",
//       description: "Built with WooCommerce and Ultra Theme, featuring product variations and secure checkout",
//       image: de1,
//       url: "#"
//     },
//     {
//       title: "Business Website",
//       description: "Corporate site with custom forms and booking system",
//       image: de2,
//       url: "#"
//     },
//     {
//       title: "Portfolio Site",
//       description: "Artist portfolio with gallery and contact system",
//       image: de3,
//       url: "#"
//     }
//   ];

//   return (
//     <div className="projects-grid">
//       {projects.map((project, index) => (
//         <div key={index} className="project-card">
//           <img src={project.image} alt={project.title} className="project-image" />
//           <div className="project-info">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
//               View Project <FaExternalLinkAlt className="link-icon" />
//             </a>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };