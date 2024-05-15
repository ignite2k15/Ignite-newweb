import React from "react";
import "../styles/Service.css";

const Services = () => {
  const servicesData = {
    1: {
      title: "Procurement",
      description:
        "Design Planning and Support: Bridging the communication gap between architects and contractors through project planning, design, and execution. Collaborative design team involvement to ensure timely construction delivery.",
    },
    2: {
      title: "Construction and Design Bureau",
      description:
        "Sustainability Initiatives: Implementation of sustainable practices in projects, emphasizing efficiency, health, community welfare, waste control, recycling of materials, and improved air quality. Familiarity with LEED, WELL, and Green Globes programs.",
    },
    3: {
      title: "Maintenance and Development",
      description:
        "Constructability and Interdisciplinary Review: Providing insights during the design phase to limit potential risks in construction.",
    },
    4: {
      title: "Events",
      description:
        "Expertise Leverage: Utilizing their vast experience to transform clients' visions into concrete project goals.",
    },
    5: {
      title: "Training and Consulting",
      description:
        "Collaborative Design Team Approach: Working closely with design teams to ensure the correct information is relayed during the construction process, guaranteeing timely project completion.",
    },
    6: {
      title: "Hosting",
      description:
        "Preliminary Assessment and Consultation: Offering initial evaluations of projects based on briefs submitted by clients and ensuring prompt communication to discuss further actions.",
    },
  };

  return (
    <div>
      <div className="services">
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

        <div className="services__list">
          <li className="services__item">
            <div className="services__step">
              <span>I</span>
              <div>Procurement</div>
              <div className="line"></div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">Procurement</div>
              <p className="services__text">
                Design Planning and Support: Bridging the communication gap
                between architects and contractors through project planning,
                design, and execution. Collaborative design team involvement to
                ensure timely construction delivery.
              </p>
            </div>
          </li>
          <li className="services__item">
            <div className="services__step">
              <span>II</span>
              <div>Construction and Design Bureau</div>
              <div className="line"></div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">
                Construction and Design Bureau
              </div>
              <p className="services__text">
                Sustainability Initiatives: Implementation of sustainable
                practices in projects, emphasizing efficiency, health, community
                welfare, waste control, recycling of materials, and improved air
                quality. Familiarity with LEED, WELL, and Green Globes programs.
              </p>
            </div>
          </li>
          <li className="services__item">
            <div className="services__step">
              <span>III</span>
              <div>Maintenance and Development</div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">
                Maintenance and Development
              </div>
              <p className="services__text">
                Constructability and Interdisciplinary Review: Providing
                insights during the design phase to limit potential risks in
                construction.
              </p>
            </div>
          </li>
          <li className="services__item">
            <div className="services__step">
              <span>IV</span>
              <div>Events</div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">Events</div>
              <p className="services__text">
                Expertise Leverage: Utilizing their vast experience to transform
                clients' visions into concrete project goals.
              </p>
            </div>
          </li>
          <li className="services__item">
            <div className="services__step">
              <span>V</span>
              <div>Training and Consulting</div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">Training and Consulting</div>
              <p className="services__text">
                Collaborative Design Team Approach: Working closely with design
                teams to ensure the correct information is relayed during the
                construction process, guaranteeing timely project completion.
              </p>
            </div>
          </li>
          <li className="services__item">
            <div className="services__step">
              <span>VI</span>
              <div>Hosting</div>
            </div>
            <div className="services__slide">
              <div className="services__subtitle">Hosting</div>
              <p className="services__text">
                Preliminary Assessment and Consultation: Offering initial
                evaluations of projects based on briefs submitted by clients and
                ensuring prompt communication to discuss further actions.
              </p>
            </div>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Services;
