// Page components
import AboutSection from "./components/AboutSection/AboutSection.js";
import ServicesSection from "./components/ServicesSection/ServicesSection.js";
import FaqSection from "./components/FaqSection/FaqSection";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "styles/animation";
import ScrollTop from "components/common/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutUs;
