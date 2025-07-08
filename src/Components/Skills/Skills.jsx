// import './Skills.css';
// import web1 from '../../assets/web2.png';
// import web2 from '../../assets/web5.svg';
// import web3 from '../../assets/web6.svg';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//       when: "beforeChildren"
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 50, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//       duration: 0.8
//     }
//   }
// };

// const hoverEffect = {
//   scale: 1.03,
//   boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
//   transition: {
//     type: "spring",
//     stiffness: 300,
//     damping: 10
//   }
// };

// const Skills = () => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView({
//       threshold: 0.2,
//       triggerOnce: false
//     });
  
//     useEffect(() => {
//       if (inView) {
//         controls.start("visible");
//       } else {
//         controls.start("hidden"); 
//       }
//     }, [controls, inView]);
  
//   return (
//     <motion.section 
//       id="skills"
//       ref={ref}
//       initial="hidden"
//       animate={controls}
//       variants={containerVariants}
//     >
//       <motion.span 
//         className="skillTitle" 
//         variants={itemVariants}
//       >
//         What I Do
//       </motion.span>
      
//       <motion.div 
//         className="skillBars"
//         variants={containerVariants}
//       >
//         <motion.div 
//           className="skillBar"
//           variants={itemVariants}
//           whileHover={hoverEffect}
//         >
//           <motion.img 
//             src={web1} 
//             alt="" 
//             className="skillBarImg" 
//             whileHover={{ rotate: 5 }}
//           />
//           <div className="skillBarText">
//             <h2>Front End developer</h2>
//             <p>Skilled front-end developer with proficiency in HTML, CSS, JavaScript, ReactJS, Bootstrap, TailwindCSS and c#</p>
//           </div>
//         </motion.div>
        
//         <motion.div 
//           className="skillBar"
//           variants={itemVariants}
//           whileHover={hoverEffect}
//         >
//           <motion.img 
//             src={web2} 
//             alt="" 
//             className="skillBarImg" 
//             whileHover={{ rotate: 5 }}
//           />
//           <div className="skillBarText">
//             <h2>WordPress</h2>
//             <p>WordPress designer specializing in E-commerce Businesses</p>
//           </div>
//         </motion.div>
        
//         <motion.div 
//           className="skillBar"
//           variants={itemVariants}
//           whileHover={hoverEffect}
//         >
//           <motion.img 
//             src={web3} 
//             alt="" 
//             className="skillBarImg" 
//             whileHover={{ rotate: 5 }}
//           />
//           <div className="skillBarText">
//             <h2>UI/UX Design</h2>
//             <p>Harvested the power of figma & Adobe XD to bring multiple projects to life through meticulously crafted designs, paving the way for seamless WordPress integration</p>
//           </div>
//         </motion.div>
//       </motion.div>
//     </motion.section>
//   )
// }

// export default Skills;







import './Skills.css';
import about1 from '../../../public/skill1.png';
import about2 from '../../../public/skill2.png';
import about3 from '../../../public/skill3.png';
import about4 from '../../../public/skill4.png';
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

const About = () => {
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
        className="aboutTitle" 
        variants={itemVariants}
      >
        What I Do
      </motion.span>
      
      <motion.div 
        className="aboutCardsContainer"
        variants={containerVariants}
      >
        <div className="aboutRow">
          <motion.div 
            className="aboutCard"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <motion.img 
              src={about1} 
              alt="Frontend Development" 
              className="aboutCardImg" 
              whileHover={{ rotate: 5 }}
            />
            <div className="aboutCardText">
              <h2>Frontend Development</h2>
              <p>
             Expert front-end developer specializing in React, JavaScript, HTML and modern CSS (Bootstrap/Tailwind CSS) with advanced C# knowledge.</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="aboutCard"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <motion.img 
              src={about2} 
              alt="WordPress Development" 
              className="aboutCardImg" 
              whileHover={{ rotate: 5 }}
            />
            <div className="aboutCardText">
              <h2>WordPress Development</h2>
              <p>
               WordPress designer transforming ideas into visually appealing, user-friendly websites with functional design and optimal performance </p>
            </div>
          </motion.div>
        </div>
        <div className="aboutRow">
          <motion.div 
            className="aboutCard"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <motion.img 
              src={about3} 
              alt="UI/UX Design" 
              className="aboutCardImg" 
              whileHover={{ rotate: 5 }}
            />
            <div className="aboutCardText">
              <h2>UI/UX Design</h2>
              <p>
               I design visually appealing and intuitive interfaces using Figma, combining usability principles with modern design trends to deliver exceptional user experiences.   </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="aboutCard"
            variants={itemVariants}
            whileHover={hoverEffect}
          >
            <motion.img 
              src={about4} 
              alt="Technical Solutions" 
              className="aboutCardImg" 
              whileHover={{ rotate: 5 }}
            />
            <div className="aboutCardText">
              <h2>Technical Solutions</h2>
              <p>
               Specialized in developing fast and secure web interfaces, with modern responsive designs, compliant with top SEO standards, and high-quality organized code.         </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default About;