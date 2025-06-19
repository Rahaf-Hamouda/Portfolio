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
