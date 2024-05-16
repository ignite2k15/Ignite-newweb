import React from 'react';
import { TiSocialLinkedinCircular, TiSocialTwitterCircular, TiMail } from "react-icons/ti";

const Navbar2 = () => {
  const handleNavigation = (url) => {
    window.location.href = url; // Navigate to the specified URL
  };

  return (
    <div className="navbar">
      <div className="icon" onClick={() => handleNavigation('https://www.linkedin.com/')} title="LinkedIn">
        <TiSocialLinkedinCircular />
      </div>
      <div className="icon" onClick={() => handleNavigation('https://twitter.com/')} title="Twitter">
        <TiSocialTwitterCircular />
      </div>
      <div className="icon" onClick={() => handleNavigation('mailto:youremail@example.com')} title="Email">
        <TiMail />
      </div>
    </div>
  );
};

export default Navbar2;
