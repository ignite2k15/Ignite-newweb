import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation
import { useState } from "react";

const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState("Page1");

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <div className="navbar">
      <div className="for-middlepart">
        <button
          className={`nav-link ${activeComponent === "Page1" ? "active" : ""}`}
          onClick={() => handleComponentChange("Page1")}
        >
          Page 1
        </button>
        <button
          className={`nav-link ${activeComponent === "Page2" ? "active" : ""}`}
          onClick={() => handleComponentChange("Page2")}
        >
          Page 2
        </button>
        <button
          className={`nav-link ${activeComponent === "Page3" ? "active" : ""}`}
          onClick={() => handleComponentChange("Page3")}
        >
          Page 3
        </button>
      </div>{" "}
      {/* Render components based on activeComponent */}
      {/* {activeComponent === 'Page1' && <Page1 />}
      {activeComponent === 'Page2' && <Page2 />}
      {activeComponent === 'Page3' && <Page3 />} */}
    </div>
  );
};

const Page1 = () => <div>Content of Page 1</div>;
const Page2 = () => <div>Content of Page 2</div>;
const Page3 = () => <div>Content of Page 3</div>;

export default Navbar;
