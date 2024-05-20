import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
                <span>r</span>
                <span>v</span>
                <span>i</span>
                <span>c</span>
                <span>e</span>
                <span>s</span>
            </h2>
            <div className="services__list">
                {Object.keys(servicesData).map((serialNumber, index) => (
                    <ServiceCard key={serialNumber} index={index} serialNumber={serialNumber} data={servicesData[serialNumber]} />
                ))}
            </div>
        </div>
    );
};

const ServiceCard = ({ index, serialNumber, data }) => {
    const { ref, inView } = useInView();

    return (
        <motion.div
            ref={ref}
            className="services__item"
            initial={{ opacity: 0, x: -200 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
        >
            <div className="services__step">
                <span>{serialNumber}</span>
                <div>{data.title}</div>
                <div className="line"></div>
            </div>
            <div className="services__slide">
                <div className="services__subtitle">
                    {data.title}
                </div>
                <p className="services__text">
                    {data.description}
                </p>
            </div>
        </motion.div>
    );
};

export default Services;
