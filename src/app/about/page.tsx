import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am a <span>Web3, Frontend developer</span>
                  </h2>
                  <p>
                    Hi! My name is Ramond Casy. I am a Web3 and Frontend developer, and I am
                    very passionate and dedicated to my work. With 5 years
                    experience as a Web3 developer, I have acquired the skills and
                    knowledge necessary to make your project a success. I enjoy
                    every step of the development process, from discussion and
                    collaboration.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.coindegen.tech</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>raymondcasy@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Education : <span>Dartmouth College</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+1 9796654952</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Hanover</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="skills padd-15">
                  {/* <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> March 2022 to Jan 2024
                          </h6>
                          <h4 className="timeline-title">
                            Utopia Tech PTY LTD, Queensland, Australia <br></br>BTC developer
                          </h4>
                          <p className="timeline-text">
                            -Actively contributed to the development and maintenance of the Bitcoin Core software, ensuring its security, performance, and stability.
                            <br></br>-Designed and implemented secure Bitcoin wallets and payment systems.
                            <br></br>- Developed and deployed smart contracts on the Ethereum blockchain, focusing on decentralized finance (DeFi) applications.
                            <br></br>-Performed smart contract security audit.
                            <br></br>-Led the development of cross-chain solutions, enabling seamless transactions between Bitcoin and other blockchain networks.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Sep 2020 to Feb 2022
                          </h6>
                          <h4 className="timeline-title">
                            The 97 Universe, Chicago, US <br></br> Blockchain Developer
                          </h4>
                          <p className="timeline-text">
                            - Created permissioned blockchain with the newly implemented
                            consensus algorithm and developed smart contract for new features
                            <br></br>- Participated in development of AMM on DEX site
                            <br></br>- Developed ERC721 NFT based P2E game project where I was responsible
                            for smart contract of minting NFT on Avalanche network
                            <br></br>- Optimized incoming channel distribution with a specific algorithm and
                            maintained data integrity across the application
                            <br></br> - Manage subgraphs and work with backend/frontend teams to integrate
                            smart contract into the entire infrastructure
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}

                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2019 to Jun 2020
                          </h6>
                          <h4 className="timeline-title">
                            Grupa Etendard, Warsaw, Poland <br></br> Fullstack Developer
                          </h4>
                          <p className="timeline-text">
                            - Led the whole development team on several web platform projects
                            including B2C, Booking, Fintech and Ecommerce etc
                            <br></br> - Built the website from the very scratch and worked as a member from
                            the initial state of the project
                            <br></br>- Mostly focused on the frontend development part using React or Next.js
                            and other CSS framework like Tailwind CSS and MUI
                            <br></br> - Mentored 5 new junior frontend developers on team expanding
                            JavaScript, React and Next.js
                            <br></br>- Integrated build pipelines of 5+ complex applications to reliably use
                            common rich-text editing components
                            <br></br>- Supported cross-functional teams to review specs and provide insights
                          </p>
                        </div>
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" />Jan 2018 to Apr 2019
                          </h6>
                          <h4 className="timeline-title">PrimeKeeper, Kuala Lumpur, Malaysia <br></br> Frontend Developer</h4>
                          <p className="timeline-text">
                            - Transformed from being a fresher to leading a group of developers in FE
                            technology and clean coding principles
                            <br></br> - Worked on the development of UI for Stealth(identity) from scratch
                            <br></br> - Created Server-Side rendering template engine framework for Unisys
                            products
                            <br></br> - Implemented complex UI components with React/TypeScript and SCSS
                            <br></br>  - Improved the UX creating several D&D-based components
                            <br></br> - Worked with Quality Assurance to get new pages/products tested
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
