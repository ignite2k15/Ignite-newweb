import React from 'react';
import { color, motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
  const charVariants = {
    hidden: { opacity: 1,color:"white" },
    reveal: { opacity: 1, color:"var(--text-primary)" },
  };

  // Split the text into individual characters
  const textChars = text.split('');

  return (
    <motion.p variants={charVariants} initial="hidden" animate="reveal">
      {textChars.map((char, index) => (
        <motion.span key={index} transition={{ duration: 1.35 }} variants={charVariants}>
          {char}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TextAnimation;
