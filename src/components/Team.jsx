import React from "react";
import "../styles/team.css";

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
            <h2 className="title">
                <span>T</span>
                <span>•</span>
                <span>E</span>
                <span>•</span>
                <span>A</span>
                <span>•</span>
                <span>M</span>
                
            </h2>
            <div className="team">
                {Object.keys(teamData).map(serialNumber => (
                    <div key={serialNumber} className="team_item">
                        <h1>{serialNumber}</h1>
                        <p>{teamData[serialNumber].title}</p>
                        <p>{teamData[serialNumber].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
