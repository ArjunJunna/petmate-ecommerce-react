import React from 'react';
import '../Footer/Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="social-media">
            <div className="logo">
              <Link to="/home">
                <img
                  src="./Assets/PetmateLogo.png"
                  alt="Petmate-logo"
                  className="header__logo"
                />
              </Link>
            </div>
            <div className="footer-info">
              <h3 className="footer-h3">One place shop to all pet lovers</h3>
              <h3 className="footer-h3">@2022, All rights reserved</h3>
              <h3 className="footer-h3">Made with love by Arjun</h3>
            </div>
            <div className="media-links">
              <a href="https://twitter.com/Arjun_R_A" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/arjun-r-a-3362aa147/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/ArjunJunna" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          <div className="categories list">
            <h2 className="list-h2">Categories</h2>
            <ul>
              <li>Cat Food</li>
              <li>Dog Food</li>
              <li>Toys</li>
            </ul>
          </div>
          <div className="accounts list">
            <h2 className="list-h2">Accounts</h2>
            <ul>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Basket</li>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="contacts list">
            <h2 className="list-h2">For Contact</h2>
            <ul>
              <a href="tel:9999911111">9999911111</a>
              <a href="mailto:arjun9852@gmail.com">arjun9852@gmail.com</a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
