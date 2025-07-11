import "./Hero.css";
import cute from "../../assets/cute.png";
import hire from "../../assets/here.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: {
      x: -150,
      opacity: 0,
      transition: { duration: 0.6 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      x: 150,
      opacity: 0,
      transition: { duration: 0.6 },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15,
        duration: 0.8,
        delay: 0.2,
      },
    },
  };

  const downloadFile = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = blobURL;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <section id="intro" ref={ref}>
      <motion.div
        className="introConent"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              when: "beforeChildren",
            },
          },
        }}
      >
        <motion.span className="hello" variants={textVariants}>
          Hello!
        </motion.span>

        <motion.span className="introText" variants={textVariants}>
          I'm<span className="introName"> Rahaf</span> <br />
           Front-End Developer
        </motion.span>

        <motion.p className="introPara" variants={textVariants}>
            I am a skilled Front-End Developer with experience in creating
          <br />
           visually appealing and user-friendly websites.
        </motion.p>

        <motion.button
          className="btn"
          onClick={() => downloadFile("/RahafHamouda.pdf")}
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={hire} alt="" className="hire" />
          Download CV
        </motion.button>
      </motion.div>
      <motion.img
        src={cute}
        alt="Profile"
        className="bg"
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        whileHover={{ rotate: 2, scale: 1.03 }}
      />
    </section>
  );
};

export default Intro;
