import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    position: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here
    console.log(formData);
  };

  return (
    <div>
      <h2 className="title we-do__title">
          <span>C</span>
          <span>•</span>
          <span>O</span>
          <span>•</span>
          <span>N</span>
          <span>•</span>
          <span>T</span>
          <span>•</span>
          <span>A</span>
          <span>•</span>
          <span>C</span>
          <span>T</span>
        </h2>
      <form onSubmit={handleSubmit} className="for-total-contact">
        <div className="for-total-contact">
          <input
            className="for-input-field"
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        
        
          <input
            className="for-input-field"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            placeholder="phone number"
            onChange={handleChange}
          />
        
        
          <input
            className="for-input-field"
            type="text"
            id="company"
            placeholder="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        
        
          <input
            className="for-input-field"
            placeholder="Position"
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
        
        
          <input
            className="for-input-field"
            placeholder="email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        
        
          <textarea
           className="for-input-field"
           placeholder="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        
        <button type="submit" className="for-input-field submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
