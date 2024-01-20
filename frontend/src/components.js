import React, { useEffect, useState } from 'react';
import './App.css';
import image from './images';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={image.Logotipo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-links">
        <ul className="navbar-ul-links">
          <li className="navbar-link">
            <a href="/">Abolt</a>
          </li>
          <li className="navbar-link">
            <a href="/">Skills</a>
          </li>
          <li className="navbar-link">
            <a href="/">Projects</a>
          </li>
          <li className="navbar-link">
            <a href="/">Services</a>
          </li>
          <li className="navbar-link">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const ProjectCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardWidth = 200;
  const gap = 30;
  const numCards = 4; // Alterar de acordo com Nº de cards

  const updateSliderWidth = () => {
    return (cardWidth + gap) * numCards;
  };

  useEffect(() => {
    const slider = document.querySelector('.content-carousel');
    slider.style.width = `${updateSliderWidth()}px`;
  }, [updateSliderWidth]);

  useEffect(() => {
    const slider = document.querySelector('.content-carousel');
    slider.style.transition = 'transform 900ms';
    slider.style.transform = `translate(-${
      (cardWidth + gap) * currentIndex
    }px)`;
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === numCards - 3) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return numCards - 3;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <div className="project-carousel">
      <div className="content-carousel-limite">
        <div className="content-carousel">
          <div className="model-project">
            <a href="https://hyanferreira.netlify.app/" target='_blank'>
              <img src={image.Project1} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://htechinfo.netlify.app/" target='_blank'>
              <img src={image.Project2} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://movieuniverse2023.netlify.app/" target='_blank'>
              <img src={image.Project3} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://saveplant.netlify.app/" target='_blank'>
              <img src={image.Project4} />
            </a>
          </div>
        </div>
      </div>
      <div className="content-btns">
        <button className="btn prevBtnCarousel" onClick={prevSlide}>
          <img src={image.Prev} alt="" />
        </button>
        <button className="btn nextBtnCarousel" onClick={nextSlide}>
          <img src={image.Next} alt="" />
        </button>
        <div className="line-hor"></div>
      </div>
    </div>
  );
};

export { Navigation, ProjectCarousel };
