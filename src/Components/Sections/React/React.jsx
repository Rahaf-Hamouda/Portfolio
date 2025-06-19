import login from '../../../assets/login.png';
import BeautyHero from '../../../assets/beautyhero.png';
import Beauty from '../../../assets/beautyresponsive.png';

const React = () => {
  const images = [login,BeautyHero, Beauty];

  return (
    <div className="horizontal-gallery">
      <div className="scroll-wrapper">
        {images.map((img, index) => (
          <a key={index} href={img} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={`react-${index}`} className="gallery-img" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default React;
