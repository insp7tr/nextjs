import React from "react";

import { BiArrowToRight, BiCertification, BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <div className="container ">
        <div className="bg-custom-gradient rounded-3xl text-center py-16 px-12">
          <h5>What I Offer</h5>
          <h2 className="mb-5 text-5xl font-bold">Services</h2>

          <div className="container services__container">
            <article className="service">
              <div className="service__head">
                <h3>Backend Development</h3>
              </div>

              <ul className="service__list">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Node.js</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Nest.js</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Golang</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>ASP.NET</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Web Development</h3>
              </div>

              <ul className="service__list ">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>ASP.NET</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>HTML/CSS/JS</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>React.js</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Next.js</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Vue.js</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Angular</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Desktop Development</h3>
              </div>

              <ul className="service__list ">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>C#</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Java</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Mobile Development</h3>
              </div>

              <ul className="service__list ">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Java</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Kotlin</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Swift</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Cross-Platform Development</h3>
              </div>

              <ul className="service__list ">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Flutter</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>React-Native</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Ionic Angular</p>
                </li>
              </ul>
            </article>

            <article className="service">
              <div className="service__head">
                <h3>Blockchain Development</h3>
              </div>

              <ul className="service__list ">
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>XRP</p>
                </li>
                <li>
                  <BiCertification className="service__list-icon" />
                  <p>Solidity</p>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
