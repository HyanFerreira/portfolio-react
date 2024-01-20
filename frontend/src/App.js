import React, { useEffect, useState } from 'react';
import './App.css';
import image from './images';
import { Navigation, Profile, ProjectCarousel } from './components';

function App() {
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
                <a href="https://www.instagram.com/hferreira_dev" target='_blank'>
                  <div className="media-item">
                    <img src={image.Instagram} alt="Instagram" />
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/hyanferreira" target='_blank'>
                  <div className="media-item">
                    <img src={image.Linkedin} alt="Linkedin" />
                  </div>
                </a>
                <a href="https://twitter.com/hferreira_dev" target='_blank'>
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
        <section className="projects">
          <div className="project-content">
            <span className="span-green">My Projects</span>
            <h1>
              My Most <br></br> Latest{' '}
              <span className="span-green">Projects</span>
            </h1>
            <span className="span-opacity">
              I have selected some of my latest <br></br> projects to share with
              you.
            </span>
            <a href="https://www.github.com/hyanferreira" target="_blank">
              <button className="btn btn-github">My GitHub</button>
            </a>
          </div>
          <ProjectCarousel></ProjectCarousel>
        </section>
      </main>
    </div>
  );
}

export default App;
