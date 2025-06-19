import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import candy from "../../assets/candy1.svg";
import iconlinked from "../../assets/iconlinked.png";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n00qq77",
        "template_cupk4hh",
        form.current,
        "CugvBMwNBYSNO0tk7"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,   
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };
  

  return (
    <>
      <motion.section
        id="contactpage"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div id="contact">
          <motion.h1
            className="contactTitle"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            Contact Me
          </motion.h1>

          <motion.span className="contactDesc" variants={itemVariants}>
            Please fill out the form below to discuss any work
          </motion.span>
          <motion.form
            className="contactForm"
            ref={form}
            onSubmit={sendEmail}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
          >
            <motion.input
              type="text"
              className="Name"
              placeholder="Your Name"
              name="your_name"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 10px rgba(121, 48, 90, 0.3)",
              }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            />
            <motion.input
              type="email"
              className="Email"
              placeholder="Your Email"
              name="your_email"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 10px rgba(121, 48, 90, 0.3)",
              }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            />
            <motion.textarea
              className="msg"
              name="message"
              rows="5"
              placeholder="Your Message"
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 10px rgba(121, 48, 90, 0.3)",
              }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            ></motion.textarea>
            <motion.button
              type="Submit"
              value="Send"
              className="submitBtn"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#79305a",
                color: "#b690a4",
              }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
            >
              Submit
            </motion.button>
            <motion.div className="links" variants={itemVariants}>
              <motion.a
                className="folllow"
                target="_blank"
                href="https://www.linkedin.com/in/rahaf-hamoda-925352258?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                whileHover={{ scale: 1.05 }}
                initial="hidden"
                whileInView="visible"
              >
                <img src={candy} className="candy" alt="Candy" />
                <p>Follow me</p>
                <img src={iconlinked} alt="linked" className="link" />
              </motion.a>
            </motion.div>
          </motion.form>
        </div>
      </motion.section>
    </>
  );
};
export default Contact;
