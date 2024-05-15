import React from 'react';
import { color, motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
  const charVariants = {
    hidden: { opacity: 1,color:"white" },
    reveal: { opacity: 1, color:"red" },
  };

  // Split the text into individual characters
  const textChars = text.split('');

  return (
    <motion.h1 variants={charVariants} initial="hidden" animate="reveal">
      {textChars.map((char, index) => (
        <motion.span key={index} transition={{ duration: 1.35 }} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TextAnimation;
