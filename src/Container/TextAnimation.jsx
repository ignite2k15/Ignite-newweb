import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextAnimation = ({ text }) => {
  const { ref, inView } = useInView();
  const textRef = useRef(null);

  const textVariants = {
    hidden: { opacity: 0, x:-200, y: 0 },
    visible: { opacity: 1, x:0, y: 0, transition: { duration: 0.2, delay: 0.2 } },
  };

  return (
    <div ref={ref} style={{ height: '20vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <motion.div
        ref={textRef}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
      >
        <p>{text}</p>
      </motion.div>
    </div>
  );
};

export default TextAnimation;
