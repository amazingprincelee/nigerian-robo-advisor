import React from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import RiskScore from "./components/RiskScore";
import Footer from "./components/Footer";

function App() {
  // Define variants for the animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      <Header />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Header2 />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <RiskScore />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
