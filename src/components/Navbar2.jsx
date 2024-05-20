import React from 'react';
import { motion } from 'framer-motion';
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail } from "react-icons/ti";

const Navbar2 = () => {
  const handleNavigation = (url) => {
    window.location.href = url;
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="navbar">
      {['https://www.linkedin.com/', 'https://twitter.com/', 'mailto:youremail@example.com'].map((url, index) => (
        <motion.div
          key={url}
          className="icon"
          onClick={() => handleNavigation(url)}
          title={url.includes('linkedin') ? "LinkedIn" : url.includes('twitter') ? "Twitter" : "Email"}
          variants={iconVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: index * 0.3 }}
        >
          {index === 0 ? <TiSocialLinkedinCircular /> : index === 1 ? <TiSocialTwitterCircular /> : <TiMail />}
        </motion.div>
      ))}
    </div>
  );
};

export default Navbar2;
