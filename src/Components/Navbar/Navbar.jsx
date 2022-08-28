import React from 'react';
import '../Navbar/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../../Context/dataContext';

const Navbar = () => {
  const navigate = useNavigate();
  const {
    state: { searchFor },
    dispatch,
  } = useDataContext();
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <Link to="/home">
            <img
              src="./Assets/PetmateLogo.png"
              alt="Petmate-logo"
              className="header__logo"
            />
          </Link>
          <div className="sub__wrapper">
            <div className="search__container">
              <input
                type="search"
                placeholder="Search for item..."
                id="search--bar"
                value={searchFor}
                onChange={e => {
                  navigate('/product-list');
                  dispatch({ type: 'SEARCH', payload: e.target.value });
                }}
              />
              <label htmlFor="search--bar">
                {searchFor === '' ? <i className="bi bi-search"></i> : null}
              </label>
            </div>
          </div>
          <div className="header__links">
            <Link to="/product-list" className="icon">
              <span className="icon-badge">
                <i className="bi bi-house-door"></i>
              </span>
            </Link>
            <Link to="/wish-list.html" className="icon">
              <span className="icon-badge">
                <i className="bi bi-bell"></i>
              </span>
              <span className="badge-primary">2</span>
            </Link>

            <Link to="/cart-page.html" className="icon">
              <span className="icon-badge">
                <i className="bi bi-cart"></i>
              </span>
              <span className="badge-primary">2</span>
            </Link>

            <Link to="/login-page" className="icon">
              <span className="icon-badge">
                <i className="bi bi-person-circle"></i>
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
