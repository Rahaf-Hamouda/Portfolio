import './Work.css';
import login from '../../assets/login.png';
import card from '../../assets/card.png';
import de6 from '../../assets/de6.png';
import { useState } from 'react';

import WordPress from '../Sections/Wordpress/Wodpress';
import HTML from '../Sections/HTMLCSS/HTML';
import ReactGallery from '../Sections/React/React';
import ProjectLinks from '../Sections/ProjectLinks/ProjectLinks';

const Works = () => {
  const [activeGallery, setActiveGallery] = useState(null);

  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details
      </span>

      <div className="cards-wrapper">
        <div className="card_container">
          <div className="card_title">
            <h2>WordPress Project</h2>
            <div className="image_container">
              <img src={de6} alt="" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() =>
                setActiveGallery(activeGallery === 'wordpress' ? null : 'wordpress')
              }
            >
              See More
            </button>
          </div>
        </div>

        <div className="card_container">
          <div className="card_title">
            <h2>HTML & CSS Project</h2>
            <div className="image_container">
              <img src={card} alt="" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() =>
                setActiveGallery(activeGallery === 'html' ? null : 'html')
              }
            >
              See More
            </button>
          </div>
        </div>

        <div className="card_container">
          <div className="card_title">
            <h2>ReactJS Project</h2>
            <div className="image_container">
              <img src={login} alt="" className="worksImg" />
            </div>
            <button
              className="worksBtn"
              onClick={() =>
                setActiveGallery(activeGallery === 'react' ? null : 'react')
              }
            >
              See More
            </button>
          </div>
        </div>
      </div>

      {(activeGallery === 'wordpress' ||
        activeGallery === 'html' ||
        activeGallery === 'react') && (
        <div className="active-gallery-wrapper">
          {activeGallery === 'wordpress' && <WordPress />}
          {activeGallery === 'html' && <HTML />}
          {activeGallery === 'react' && <ReactGallery />}

          {activeGallery === 'html' && (
            <ProjectLinks
              links={[
                {
                  title: 'Template One',
                  url: 'https://rahaf-hamouda.github.io/HTML_CSS_Template_One/',
                },
              ]}
            />
          )}

          {activeGallery === 'react' && (
            <ProjectLinks
              links={[
                {
                  title: 'Beauty',
                  url: 'https://beauty-project-pi4w.vercel.app/',
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
