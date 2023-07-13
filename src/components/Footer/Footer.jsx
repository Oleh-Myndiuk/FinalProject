import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { Helmet } from 'react-helmet';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">CineSeeker</div>
      <div className="footer__contacts">
        <div className="footer__contact-item">
          <a href="tel:+380978816367" className="footer__contact-link">
            <FontAwesomeIcon icon={faPhone} className="footer__icon" />
            <span>+38 (097) 88 16 367 </span>
          </a>
        </div>
        <div className="footer__contact-item">
          <a href="mailto:tyshukaolega@gmail.com" className="footer__contact-link">
            <FontAwesomeIcon icon={faEnvelope} className="footer__icon" />
            <span>tyshukaolega@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="footer__social">
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="footer__icon" />
        </a>
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} className="footer__icon" />
        </a>
        <a href="https://www.twitter.com">
          <FontAwesomeIcon icon={faTwitter} className="footer__icon" />
        </a>
        <a href="https://www.linkedin.com">
          <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
        </a>
      </div>
      <Helmet>
      <link rel="stylesheet" href="/movie.png" />
    </Helmet>

    </footer>
  );
}

export default Footer;

