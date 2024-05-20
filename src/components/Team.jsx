import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Team = () => {
    const teamData = {
        I: { title: 'Viktorius Eisenhart', description: 'CEO' },
        II: { title: 'Amir Al-Mekhanik', description: 'COO' },
        III: { title: 'Natasha Thunderforge', description: 'CMO' },
        IV: { title: 'Gustav Stahlfist', description: 'Head of Analysis' },
        V: { title: 'Lei Qiang Mechblade', description: 'Chief Developer' },
        VI: { title: 'Grigor Varnilov', description: 'Chief Design Engineer' },
        VII: { title: 'Olivia Steelreaper', description: 'Head of Customer Service' },
        VIII: { title: 'Hans Müller', description: 'Head of logistic and procurement' }
    };

    return (
        <div>
            <h1 className="title we-do__title">
                <span>T</span>
                <span>•</span>
                <span>E</span>
                <span>•</span>
                <span>A</span>
                <span>•</span>
                <span>M</span>
            </h1>
            <div className="team">
                {Object.keys(teamData).map(serialNumber => (
                    <TeamMember key={serialNumber} serialNumber={serialNumber} data={teamData[serialNumber]} />
                ))}
            </div>
        </div>
    );
};

const TeamMember = ({ serialNumber, data }) => {
    const { ref, inView } = useInView();

    return (
        <motion.div
            ref={ref}
            className="team_item"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
        >
            <h1>{serialNumber}</h1>
            <p>{data.title}</p>
            <p>{data.description}</p>
        </motion.div>
    );
};

export default Team;
