import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import image from './images';

const Navigation = () => {
  const hamburguer = () => {
    const hamburguer = document.querySelector('.hamburguer');
    const navbarLinks = document.querySelector('.navbar-links');
    hamburguer.classList.toggle('active');
    navbarLinks.classList.toggle('show');
  };

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
            <a href="/">Aboult</a>
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
      <div className="hamburguer" onClick={hamburguer}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      {/* <div className="footer-top"></div> */}
      <div className="footer-bottom">
        <span>&copy; 2024 - Developed by: Hyan Ferreira</span>
      </div>
    </footer>
  );
};

const ProjectCarousel = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const cardWidth = 200;
  const gap = 30;

  const updateSliderWidth = () => {
    const numCards = document.querySelectorAll('.model-project').length;
    return (cardWidth + gap) * numCards;
  };

  useEffect(() => {
    const slider = document.querySelector('.content-carousel');
    slider.style.width = `${updateSliderWidth()}px`;
  }, [updateSliderWidth]);

  const nextSlide = () => {
    const slider = document.querySelector('.content-carousel');
    if (!isTransitioning) {
      setIsTransitioning(true);
      slider.style.transition = 'transform 900ms';
      slider.style.transform = `translate(-${cardWidth + gap}px)`;
      setTimeout(() => {
        slider.style.transition = 'none';
        slider.style.transform = 'translate(0)';
        slider.appendChild(slider.firstElementChild);
        setIsTransitioning(false);
      }, 900);
    }
  };

  const prevSlide = () => {
    const slider = document.querySelector('.content-carousel');
    if (!isTransitioning) {
      setIsTransitioning(true);
      slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
      slider.style.transition = 'none';
      slider.style.transform = `translate(-${cardWidth + gap}px)`;
      setTimeout(() => {
        slider.style.transition = 'transform 900ms';
        slider.style.transform = 'translate(0)';
        setIsTransitioning(false);
      }, 0);
    }
  };

  return (
    <div className="project-carousel">
      <div className="content-carousel-limite">
        <div className="content-carousel">
          <div className="model-project">
            <a href="https://hyanferreira.netlify.app/" target="_blank">
              <img src={image.Project1} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://htechinfo.netlify.app/" target="_blank">
              <img src={image.Project2} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://movieuniverse2023.netlify.app/" target="_blank">
              <img src={image.Project3} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://saveplant.netlify.app/" target="_blank">
              <img src={image.Project4} />
            </a>
          </div>
          <div className="model-project">
            <a href="https://saveplant.netlify.app/" target="_blank">
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

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9sxqagc',
        'template_pa43bqo',
        form.current,
        'HtWl-jUahm_PRmphf',
      )
      .then(
        (result) => {
          alert('Sucesso!');
          e.target.reset();
        },
        (error) => {
          alert(error.message);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="label-input">
        <label htmlFor="name" className="input-label">
          Name:
        </label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="label-input">
        <label htmlFor="phone" className="input-label">
          Phone number:
        </label>
        <input type="phone" id="phone" name="phone" required />
      </div>
      <div className="label-input">
        <label htmlFor="email" className="input-label">
          Email:
        </label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="label-input">
        <label htmlFor="message" className="input-label">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          cols={50}
          required
          style={{ resize: 'vertical' }}
        />
      </div>
      <button className="btn-submit" type="submit" value="Send">
        Submit
      </button>
    </form>
  );
};

export { Navigation, Footer, ProjectCarousel };
