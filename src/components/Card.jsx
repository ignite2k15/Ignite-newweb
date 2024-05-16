import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="for-card-t">
      <motion.div
        className="we-do__box"
        initial={{ opacity: 0,x:-200, y: 0 }}
        animate={{ opacity: 1,x:0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="we-do__number">I</div>
        <h3 className="we-do__subtitle">Construction</h3>
        <p className="we-do__text">
          We provide a full range of services in the field of cryptocurrency
          mining: Hosting and supplies, maintenance and service, consulting,
          software development and engineering for mining systems and data
          center infrastructure.
        </p>
        <a className="we-do__link" href="/mining">
          learn more
          <svg
            className="for-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="50"
            viewBox="0 0 52 50"
            fill="none"
          >
            <path
              d="M3 45.5576L48 45.5576L48 0.557619"
              stroke="white"
              strokeWidth="7"
            ></path>
            <line
              x1="45.6823"
              y1="43.1803"
              x2="2.68231"
              y2="5.18027"
              stroke="white"
              strokeWidth="7"
            ></line>
          </svg>
        </a>
      </motion.div>
      <motion.div
        className="we-do__box"
        initial={{ opacity: 0,x:-400, y:0 }}
        animate={{ opacity: 1,x:0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="we-do__number">II</div>
        <h3 className="we-do__subtitle">Construction</h3>
        <p className="we-do__text">
          We provide a full range of services in the field of cryptocurrency
          mining: Hosting and supplies, maintenance and service, consulting,
          software development and engineering for mining systems and data
          center infrastructure.
        </p>
        <a className="we-do__link" href="/mining">
          learn more
          <svg
            className="for-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="52"
            height="50"
            viewBox="0 0 52 50"
            fill="none"
          >
            <path
              d="M3 45.5576L48 45.5576L48 0.557619"
              stroke="white"
              strokeWidth="7"
            ></path>
            <line
              x1="45.6823"
              y1="43.1803"
              x2="2.68231"
              y2="5.18027"
              stroke="white"
              strokeWidth="7"
            ></line>
          </svg>
        </a>
      </motion.div>
    </div>
  );
};

export default Card;
