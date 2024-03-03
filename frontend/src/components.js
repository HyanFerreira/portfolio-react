import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import image from './images';
import InputMask from 'react-input-mask';

const LinksNavigation = ({ closeMenu }) => {
  return (
    <div className="navbar-links">
      <ul className="navbar-ul-links">
        <li className="navbar-link">
          <a href="/" onClick={closeMenu}>
            About
          </a>
        </li>
        <li className="navbar-link">
          <a
            href="/"
            onClick={() => {
              closeMenu();
            }}
          >
            Skills
          </a>
        </li>
        <li className="navbar-link">
          <a
            href="/"
            onClick={() => {
              closeMenu();
            }}
          >
            Projects
          </a>
        </li>
        <li className="navbar-link">
          <a href="/" onClick={closeMenu}>
            Services
          </a>
        </li>
        <li className="navbar-link">
          <a
            href="/"
            onClick={() => {
              closeMenu();
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

const Navigation = () => {
  const closeMenu = () => {
    const hamburguer = document.querySelector('.hamburguer');
    const navbarLinks = document.querySelector('.aside-nav');
    const overflow = document.querySelector('.overflow');
    const body = document.querySelector('body');
    hamburguer.classList.remove('active');
    navbarLinks.classList.remove('show');
    overflow.classList.remove('show');
    body.classList.remove('block');
  };

  const hamburguer = () => {
    const hamburguer = document.querySelector('.hamburguer');
    const navbarLinks = document.querySelector('.aside-nav');
    const overflow = document.querySelector('.overflow');
    const body = document.querySelector('body');
    hamburguer.classList.toggle('active');
    navbarLinks.classList.toggle('show');
    overflow.classList.toggle('show');
    body.classList.toggle('block');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={image.Logotipo} alt="Logo" />
        </a>
      </div>
      <LinksNavigation closeMenu={closeMenu} />
      <div className="hamburguer" onClick={hamburguer}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <aside className="aside-nav">
        <LinksNavigation closeMenu={closeMenu} />
      </aside>
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
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  useEffect(() => {
    const validateName = () => {
      let name = document.getElementById('name').value;

      if (name.length < 2 || !/^[a-zA-Z\s]*$/.test(name)) {
        setErrors((prevState) => ({
          ...prevState,
          name: 'Por favor, insira um nome válido.',
        }));
      } else {
        setErrors((prevState) => ({ ...prevState, name: '' }));
      }
    };

    const validateEmail = () => {
      let email = document.getElementById('email').value;

      if (!/\S+@\S+\.\S+/.test(email)) {
        setErrors((prevState) => ({
          ...prevState,
          email: 'Por favor, insira um email válido.',
        }));
      } else {
        setErrors((prevState) => ({ ...prevState, email: '' }));
      }
    };

    const validatePhone = () => {
      let phone = document.getElementById('phone').value;

      if (!phone.match(/^\(\d{2}\)\s\d{5}-\d{4}$/)) {
        setErrors((prevState) => ({
          ...prevState,
          phone: 'Por favor, insira um telefone válido.',
        }));
      } else {
        setErrors((prevState) => ({ ...prevState, phone: '' }));
      }
    };

    const validateMessage = () => {
      let message = document.getElementById('message').value;

      if (!message) {
        setErrors((prevState) => ({
          ...prevState,
          message: 'Por favor, insira uma mensagem.',
        }));
      } else {
        setErrors((prevState) => ({ ...prevState, message: '' }));
      }
    };

    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('phone').addEventListener('blur', validatePhone);
    document
      .getElementById('message')
      .addEventListener('blur', validateMessage);

    return () => {
      document.getElementById('name').removeEventListener('blur', validateName);
      document
        .getElementById('email')
        .removeEventListener('blur', validateEmail);
      document
        .getElementById('phone')
        .removeEventListener('blur', validatePhone);
      document
        .getElementById('message')
        .removeEventListener('blur', validateMessage);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    let errorFormCamp = document.getElementById('errorFormCamp');

    if (!name || !email || !phone || !message) {
      errorFormCamp.innerText = 'Por favor, preencha todos os campos.';
      return;
    }

    // if (errors.name || errors.email || errors.phone || errors.message) {
    //   alert('Por favor, corrija os erros no formulário antes de enviar.');
    //   return;
    // }

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
        <input type="text" id="name" name="name" />
        <span className="errorFeedback">{errors.name}</span>
      </div>
      <div className="label-input">
        <label htmlFor="phone" className="input-label">
          Phone number:
        </label>
        <InputMask
          mask="(99) 99999-9999"
          maskChar=" "
          type="tel"
          id="phone"
          name="phone"
        />
        <span className="errorFeedback">{errors.phone}</span>
      </div>
      <div className="label-input">
        <label htmlFor="email" className="input-label">
          Email:
        </label>
        <input type="email" id="email" name="email" />
        <span className="errorFeedback">{errors.email}</span>
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
          style={{ resize: 'vertical' }}
        />
        <span className="errorFeedback">{errors.message}</span>
      </div>
      <button className="btn-submit" type="submit" value="Send">
        Submit
      </button>
      <div className='errorFormCamp-content'>
        <span id="errorFormCamp"></span>
      </div>
    </form>
  );
};

export { Navigation, Footer, ProjectCarousel, LinksNavigation };
