import React from 'react';

const Team = () => {
  return (
    <div>
      <section className="team">
        <div className="container">
          <h2 className="title team__title">
            <span>t</span>
            <span>•</span>
            <span>e</span>
            <span>•</span>
            <span>a</span>
            <span>•</span>
            <span>m</span>
          </h2>

          <ul className="team__list">
            <li className="team__item">
              <img src="/img/team/1.png" alt="person" />
              <span className="team__name">Viktorius <br /> Eisenhart</span>
              <span className="team__descr">CEO</span>
            </li>

            <li className="team__item">
              <img src="/img/team/2.png" alt="person" />
              <span className="team__name">Amir <br /> Al-Mekhanik</span>
              <span className="team__descr">COO</span>
            </li>

            <li className="team__item">
              <img src="/img/team/3.png" alt="person" />
              <span className="team__name">Natasha <br /> Thunderforge</span>
              <span className="team__descr">CMO</span>
            </li>

            <li className="team__item">
              <img src="/img/team/4.png" alt="person" />
              <span className="team__name">Gustav <br /> Stahlfist</span>
              <span className="team__descr">Head of Analysis</span>
            </li>

            <li className="team__item">
              <img src="/img/team/5.png" alt="person" />
              <span className="team__name">Lei Qiang <br /> Mechblade</span>
              <span className="team__descr">Chief Developer</span>
            </li>

            <li className="team__item">
              <img src="/img/team/6.png" alt="person" />
              <span className="team__name">Grigor <br /> Varnilov</span>
              <span className="team__descr">Chief Design Engineer</span>
            </li>

            <li className="team__item">
              <img src="/img/team/7.png" alt="person" />
              <span className="team__name">Olivia <br /> Steelreaper</span>
              <span className="team__descr">Head of Customer Service</span>
            </li>

            <li className="team__item">
              <img src="/img/team/8.png" alt="person" />
              <span className="team__name">Hans <br /> Müller</span>
              <span className="team__descr">Head of logistic and procurement</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Team;
