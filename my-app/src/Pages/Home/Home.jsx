import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <main>
        <div className="hero__container">
          <Link to="/mock" className="hero-btn primary-btn">
            Shop Now
          </Link>
          <a className="hero-btn primary-btn">Shop now</a>
        </div>
        <div className="hero-heading">Featured Categories</div>
        <div className="hero__categories">
          <div className="item item-1">
            <p className="item-name">DOG FOOD</p>
          </div>
          <div className="item item-2">
            <p className="item-name">TOYS</p>
          </div>
          <div className="item item-3">
            <p className="item-name">CAT FOOD</p>
          </div>
        </div>
        <div className="hero-heading">Popular Products</div>
        <div className="products-5">
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/drools-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  3.8 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Drools for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/pedigree-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  4.0 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Pedigree for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/purepet-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  4.2 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Purepet for Cats</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/drools-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  3.8 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Drools for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/pedigree-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  4.0 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Pedigree for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="./Assets/images/wooddumbbell.jpg"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                
                  4.6 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">DumbBells</h2>
                <p className="detail-subheading">Wooden Dumbbell</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/pedigree-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  4.0 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Pedigree for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="./Assets/images/rugbyball.jpg"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  3.0 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Foaber</h2>
                <p className="detail-subheading">Rugby Ball </p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="https://github.com/ArjunJunna/petmate-ecommerce/blob/development/images/drools-image.png?raw=true"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  3.8 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Drools for Dogs</h2>
                <p className="detail-subheading">Adult 1.2 Kg</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
          <article className="component">
            <div className="card__container">
              <div className="card-header">
                <img
                  src="./Assets/images/duck.jpg"
                  alt="productimage"
                  className="card-image"
                />
                <span className="card-badge">
                  2.5 <i class="fas fa-star" aria-hidden="true"></i>
                </span>
              </div>
              <div className="card-details">
                <h2 className="detail-heading">Plastic Duck</h2>
                <p className="detail-subheading">For all pets</p>
              </div>
              <div className="card-footer">
                <div className="price-segment">
                  <span className="item-price">&#x20b9; 250</span>
                  <span className="item-price dashed">&#x20b9; 350</span>
                  <span className="item-price discount"> 20 %</span>
                </div>
                <div className="card-icons">
                  <i className="bi bi-heart"></i>
                  <i className="bi bi-cart"></i>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
};

export default Home;
