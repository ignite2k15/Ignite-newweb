import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="title we-do__title">
          <span>w</span>
          <span>•</span>
          <span>h</span>
          <span>•</span>
          <span>a</span>
          <span>•</span>
          <span>t</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>w</span>
          <span>•</span>
          <span>e</span>
          <span>&nbsp;&nbsp;&nbsp;</span>
          <span>d</span>
          <span>•</span>
          <span>o</span>
        </h1>
        <Card />
      </div>
    </motion.div>
  );
};

export default About;
