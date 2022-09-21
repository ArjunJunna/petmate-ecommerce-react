import React from 'react';
import '../Navbar/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../../Context/dataContext';
import { useAuth } from '../../Context/authContext';
import { toast } from 'react-toastify';
import { useUserData } from '../../Context/userDataContext';

const Navbar = () => {
  const navigate = useNavigate();
  const {auth: { isAuthorized },setAuth} = useAuth();
  const {
    userData: { wishListData, cartListData },
  } = useUserData();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setAuth({
      token: '',
      isAuthenticated: false,
    });
    toast.success('You have been logged out successfully...');
  };

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
            <Link to="/home" className="icon">
              <span className="icon-badge">
                <i className="bi bi-house-door"></i>
                <span className="icon-text">home</span>
              </span>
            </Link>
            <Link to="/product-list" className="icon">
              <span className="icon-badge">
                <i class="bi bi-shop-window"></i>
                <span className="icon-text">shop</span>
              </span>
            </Link>
            <Link to="/wish-list" className="icon">
              <span className="icon-badge">
                <i className="bi bi-bell"></i>
                <span className="icon-text">wishlist</span>
              </span>
              {isAuthorized && (
                <span className="badge-primary">{wishListData.length}</span>
              )}
            </Link>

            <Link to="/cart-list" className="icon">
              <span className="icon-badge">
                <i className="bi bi-cart"></i>
                <span className="icon-text">cart</span>
              </span>
              {isAuthorized && (
                <span className="badge-primary">{cartListData.length}</span>
              )}
            </Link>

            {isAuthorized ? (
              <div onClick={handleLogout}>
                <Link to="/login-page" className="icon">
                  <span className="icon-badge navbtn">Logout</span>
                </Link>
              </div>
            ) : (
              <Link to="/login-page" className="icon">
                <span className="icon-badge navbtn">Login</span>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
