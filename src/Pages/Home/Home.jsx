import React from 'react';
import '../Home/Home.css';
import { Link } from 'react-router-dom';
import {useDataContext} from '../../Context/dataContext'
import SingleProduct from '../../Components/SingleProduct/Single-Product'
import Footer from '../../Components/Footer/Footer';

const Home = () => {

  const {dispatch}=useDataContext();
  const {state:{data,selectedCategories}}=useDataContext();

  const categoryHandler = categoryName => {
    selectedCategories.length = 0;
    selectedCategories.push(categoryName);
    return selectedCategories;
  };

  const trendingProducts = data.slice(0, 5);

  return (
    <>
      <div className="page-container">
        <main>
          <div className="hero__container">
            <Link to="/product-list">
              <button className="hero-btn primary-btn">Shop Now</button>
            </Link>
          </div>
          <div className="hero-heading">Featured Categories</div>

          <div className="hero__categories">
            <Link to="/product-list">
              <div
                className="item item-1"
                onClick={() =>
                  dispatch({
                    type: 'SORT_BY_CATEGORIES',
                    payload: categoryHandler('Dog-Food'),
                  })
                }
              >
                <p className="item-name">DOG FOOD</p>
              </div>
            </Link>
            <Link to="/product-list">
              <div
                className="item item-2"
                onClick={() =>
                  dispatch({
                    type: 'SORT_BY_CATEGORIES',
                    payload: categoryHandler('Toys'),
                  })
                }
              >
                <p className="item-name">TOYS</p>
              </div>
            </Link>
            <Link to="/product-list">
              <div
                className="item item-3"
                onClick={() =>
                  dispatch({
                    type: 'SORT_BY_CATEGORIES',
                    payload: categoryHandler('Cat-Food'),
                  })
                }
              >
                <p className="item-name">CAT FOOD</p>
              </div>
            </Link>
          </div>
          <div className="hero-heading">Popular Products</div>
          <div className="products-5">
            {trendingProducts.map(product => (
              <SingleProduct
                cardDirection={'vertical'}
                product={product}
                key={product._id}
              />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
