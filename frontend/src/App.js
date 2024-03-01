import React, { useEffect, useState } from 'react';
import './App.css';
import image from './images';
import { Navigation, Footer, ProjectCarousel, ContactUs } from './components';
import ScrollReveal from 'scrollreveal';

function App() {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal('.scroll-hidden', {
      distance: '150%',
      origin: 'bottom',
      opacity: 0,
      delay: 400,
      reset: false,
    });
    sr.reveal('.scroll-hidden-top', {
      distance: '100%',
      origin: 'top',
      opacity: 0,
      delay: 400,
      reset: false,
    });
    sr.reveal('.scroll-hidden-rigth', {
      distance: '150%',
      origin: 'rigth',
      opacity: 0,
      delay: 400,
      reset: false,
    });
  }, []);

  return (
    <div className="App">
      <header className="header">
        <Navigation></Navigation>
        <div className="header-container">
          <div className="header-content-welcome">
            <div className="content-welcome">
              <span className="span-green span-medium">Welcome</span>
              <h1>
                I have <span className="span-green">web</span>
                <br></br>
                <span className="span-green">development</span> experience
              </h1>
              <span className="span-opacity">
                I’m Hyan, a Web Developer passionate about transforming{' '}
                <br></br>
                code into memorable digital experiences.
              </span>
              <div className="btn-area">
                <button className="btn btn-contact">Contact me</button>
                <a href="hyanferreira-cv.pdf" target="_blank">
                  <button className="btn btn-downloadCV">Download CV</button>
                </a>
              </div>
            </div>
          </div>
          <div className="header-content-profile">
            <div className="square-profile">
              <div className="square-black"></div>
              <div className="square-green"></div>
              <img className="profile" src={image.Profile} alt="Profile" />
            </div>
            <div className="follow-me">
              <span className="span-green">Follow me on:</span>
              <div className="line"></div>
              <div className="social-media">
                <a
                  href="https://www.instagram.com/hferreira_dev?igsh=ZTZ2emhxZGlsbDB2"
                  target="_blank"
                >
                  <div className="media-item">
                    <img src={image.Instagram} alt="Instagram" />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/hyanferreira"
                  target="_blank"
                >
                  <div className="media-item">
                    <img src={image.Linkedin} alt="Linkedin" />
                  </div>
                </a>
                <a href="https://twitter.com/hferreira_dev" target="_blank">
                  <div className="media-item">
                    <img src={image.Twitter} alt="Twitter" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mouse-animation">
          <div className="scroll-box">
            <div className="scroll"></div>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="skills scroll-hidden">
          <div className="skills-container">
            <div className="animationRotate scroll-hidden-rigth"></div>
            <div className="skills-content">
              <div className="skills-block-one">
                <div className="icon-line-skills">
                  <div className="icon-skill">
                    <div className="is-45"></div>
                    <span className="span-filter"></span>
                  </div>
                  <div className="line-skill scroll-hidden-top"></div>
                </div>
                <div className="details-skills">
                  <h1>
                    My <span className="span-green">Skills</span>
                  </h1>
                </div>
              </div>
              <div className="skills-block-one">
                <div className="icon-line-skills scroll-hidden-top">
                  <div className="icon-skill">
                    <img src={image.Communication} alt="Communication" />
                    <span className="span-filter"></span>
                  </div>
                  <div className="line-skill scroll-hidden-top"></div>
                </div>
                <div className="details-skills scroll-hidden-top">
                  <h2>
                    <span className="span-green">Communication</span>
                  </h2>
                  <span>
                    Mastering the art of interpersonal dialogue, I excel not
                    only in coding languages but also in connecting people
                    through seamless and impactful communication.
                  </span>
                </div>
              </div>
              <div className="skills-block-one">
                <div className="icon-line-skills scroll-hidden-top">
                  <div className="icon-skill">
                    <img src={image.Creativity} alt="Creativity" />
                    <span className="span-filter"></span>
                  </div>
                  <div className="line-skill scroll-hidden-top"></div>
                </div>
                <div className="details-skills scroll-hidden-top">
                  <h2>
                    <span className="span-green">Creativity</span>
                  </h2>
                  <span>
                    Unleashing boundless creativity in every line of code and
                    pixel on the screen, I turn ordinary projects into
                    extraordinary experiences.
                  </span>
                </div>
              </div>
              <div className="skills-block-one">
                <div className="icon-line-skills scroll-hidden-top">
                  <div className="icon-skill">
                    <img src={image.Design} alt="Design" />
                    <span className="span-filter"></span>
                  </div>
                  <div className="line-skill scroll-hidden-top"></div>
                </div>
                <div className="details-skills scroll-hidden-top">
                  <h2>
                    <span className="span-green">Visual Design</span>
                  </h2>
                  <span>
                    Crafting digital masterpieces with a keen eye for
                    aesthetics, I transform visions into visually stunning
                    realities.
                  </span>
                </div>
              </div>
              <div className="skills-block-one">
                <div className="icon-line-skills scroll-hidden-top">
                  <div className="icon-skill">
                    <img src={image.ProblemSolving} alt="ProblemSolving" />
                    <span className="span-filter"></span>
                  </div>
                  <div className="line-skill scroll-hidden-top"></div>
                </div>
                <div className="details-skills scroll-hidden-top">
                  <h2>
                    <span className="span-green">Problem Solving</span>
                  </h2>
                  <span>
                    As a coding architect, I navigate the labyrinth of
                    challenges, transforming roadblocks into stepping stones to
                    innovation.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects scroll-hidden">
          <div className="project-container">
            <div className="project-content">
              <span className="span-green">My Projects</span>
              <h1>
                My Most <br></br> Latest{' '}
                <span className="span-green">Projects</span>
              </h1>
              <span className="span-opacity">
                I have selected some of my latest <br></br> projects to share
                with you.
              </span>
              <a href="https://www.github.com/hyanferreira" target="_blank">
                <button className="btn btn-github">My GitHub</button>
              </a>
            </div>
            <ProjectCarousel></ProjectCarousel>
          </div>
        </section>
        <section className="contact scroll-hidden">
          <h1 className="span-green">Contact Me</h1>
          <div className="contact-content">
            <div className="form-content">
              <ContactUs></ContactUs>
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
