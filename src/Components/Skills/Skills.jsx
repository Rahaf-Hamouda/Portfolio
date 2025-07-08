import './Skills.css';
import web1 from '../../assets/web2.png';
import web2 from '../../assets/web5.svg';
import web3 from '../../assets/web6.svg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren"
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      duration: 0.8
    }
  }
};

const hoverEffect = {
  scale: 1.03,
  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10
  }
};

const Skills = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.2,
      triggerOnce: false
    });
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden"); 
      }
    }, [controls, inView]);
  
  return (
    <motion.section 
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <motion.span 
        className="skillTitle" 
        variants={itemVariants}
      >
        What I Do
      </motion.span>
      
      <motion.div 
        className="skillBars"
        variants={containerVariants}
      >
        <motion.div 
          className="skillBar"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <motion.img 
            src={web1} 
            alt="" 
            className="skillBarImg" 
            whileHover={{ rotate: 5 }}
          />
          <div className="skillBarText">
            <h2>Front End developer</h2>
            <p>Skilled front-end developer with proficiency in HTML, CSS, JavaScript, ReactJS, Bootstrap, TailwindCSS and c#</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="skillBar"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <motion.img 
            src={web2} 
            alt="" 
            className="skillBarImg" 
            whileHover={{ rotate: 5 }}
          />
          <div className="skillBarText">
            <h2>WordPress</h2>
            <p>WordPress designer specializing in E-commerce Businesses</p>
          </div>
        </motion.div>
        
        <motion.div 
          className="skillBar"
          variants={itemVariants}
          whileHover={hoverEffect}
        >
          <motion.img 
            src={web3} 
            alt="" 
            className="skillBarImg" 
            whileHover={{ rotate: 5 }}
          />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>Harvested the power of figma & Adobe XD to bring multiple projects to life through meticulously crafted designs, paving the way for seamless WordPress integration</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Skills;