import React from "react";
import "../styles/Service.css";

const Services = () => {

    const servicesData = {
        1: { title: 'Procurement', description: 'Design Planning and Support: Bridging the communication gap between architects and contractors through project planning, design, and execution. Collaborative design team involvement to ensure timely construction delivery.' },
        2: { title: 'Construction and Design Bureau', description: 'Sustainability Initiatives: Implementation of sustainable practices in projects, emphasizing efficiency, health, community welfare, waste control, recycling of materials, and improved air quality. Familiarity with LEED, WELL, and Green Globes programs.' },
        3: { title: 'Maintenance and Development', description: 'Constructability and Interdisciplinary Review: Providing insights during the design phase to limit potential risks in construction.' },
        4: { title: 'Events', description: 'Expertise Leverage: Utilizing their vast experience to transform clients\' visions into concrete project goals.' },
        5: { title: 'Training and Consulting', description: 'Collaborative Design Team Approach: Working closely with design teams to ensure the correct information is relayed during the construction process, guaranteeing timely project completion.' },
        6: { title: 'Hosting', description: 'Preliminary Assessment and Consultation: Offering initial evaluations of projects based on briefs submitted by clients and ensuring prompt communication to discuss further actions.' }
    };

    return (
        <div>
            <h2 className="title">
                <span>S</span>
                <span>•</span>
                <span>e</span>
                <span>•</span>
                <span>r</span>
                <span>•</span>
                <span>v</span>
                <span>•</span>
                <span>i</span>
                <span>•</span>
                <span>c</span>
                <span>•</span>
                <span>e</span>
                <span>•</span>
                <span>s</span>
            </h2>
            <ul className="services__list">
                {Object.keys(servicesData).map(serialNumber => (
                    <li key={serialNumber} className="services__item">
                        <div className="services__step">
                            <span>{serialNumber}</span>
                            <div>{servicesData[serialNumber].title}</div>
                            <div className="line"></div>
                        </div>
                        <div className="services__slide">
                            <div className="services__subtitle">{servicesData[serialNumber].title}</div>
                            <p className="services__text">{servicesData[serialNumber].description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
