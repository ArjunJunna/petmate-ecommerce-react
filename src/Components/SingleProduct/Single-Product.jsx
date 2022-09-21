import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import { useUserData } from '../../Context/userDataContext';
import addToWishlistHandler from '../../Pages/WishList/WishListDataHandlers/addToWishListHandler';
import removeFromWishlistHandler from '../../Pages/WishList/WishListDataHandlers/removeFromWishListHandler';
import addToCartListHandler from '../../Pages/CartList/CartListDataHandlers/addToCartListHandler';
import cartListProductCounterHandler from '../../Pages/CartList/CartListDataHandlers/cartListProductCounterHandler';
import removeFromCartListHandler from '../../Pages/CartList/CartListDataHandlers/removeFromCartHandler';

const SingleProduct = ({ product, cardDirection }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    _id,
    title,
    image,
    price,
    discount,
    rating,
    inStock,
    description,
    discountedPrice,
  } = product;
  const [inWishList, setInWishList] = useState(false);
  const [fetchingWishList, setFetchingWishList] = useState(false);
  const [inCartList, setInCartList] = useState(false);
  const [fetchingCartList, setFetchingCartList] = useState(false);

  const {
    auth: { token, isAuthorized },
  } = useAuth();
  const {
    userData: { wishListData, cartListData },
    userDataDispatch,
  } = useUserData();
  const quantity = cartListData?.find(item => item._id === _id)?.qty;

  useEffect(() => {
    wishListData.find(item => item._id === _id) && setInWishList(true);
    cartListData.find(item => item._id === _id) && setInCartList(true);
  }, [_id, wishListData, cartListData]);

  return (
    
      <div className={`card__container ${cardDirection}`} key={_id}>
        <div className="card-header">
          <img src={image} alt="productimage" className="card-image" />
          <span className="card-badge">
            {rating} <i class="fas fa-star" aria-hidden="true"></i>
          </span>
          <button
            className={inWishList ? 'card-heart in-wishlist' : 'card-heart'}
            disabled={fetchingWishList}
            onClick={
              isAuthorized
                ? inWishList
                  ? () =>
                      removeFromWishlistHandler(
                        _id,
                        token,
                        userDataDispatch,
                        setInWishList
                      )
                  : () =>
                      addToWishlistHandler(
                        product,
                        token,
                        userDataDispatch,
                        setFetchingWishList
                      )
                : () => navigate('/login-page')
            }
          >
            <i className="bi bi-heart "></i>
          </button>
        </div>
        <div className="card-content">
          <div className="card-details">
            <h2 className="detail-heading">{title}</h2>
            <p className="detail-subheading">{description}</p>

            <div className="price-segment">
              <span className="item-price">&#x20b9;{`${discountedPrice}`}</span>
              <span className="item-price dashed">
                {discountedPrice === price ? '' : `₹${price}`}
              </span>
              <span className="item-price discount">
                {discount === 0 ? '' : ` ${discount}%`}
              </span>
            </div>
            {location.pathname === '/cart-list' && (
              <div className="quantity">
                <p className="detail-subheading display">Quantity :</p>
                <button
                  className="q-btn"
                  onClick={() =>
                    cartListProductCounterHandler(
                      _id,
                      token,
                      'decrement',
                      quantity,
                      userDataDispatch,
                      setFetchingCartList
                    )
                  }
                >
                  -
                </button>
                {quantity}
                <button
                  className="q-btn"
                  onClick={() =>
                    cartListProductCounterHandler(
                      _id,
                      token,
                      'increment',
                      quantity,
                      userDataDispatch,
                      setFetchingCartList
                    )
                  }
                >
                  +
                </button>
              </div>
            )}
          </div>
          <div className="card-footer">
            <div className="card-icons">
              {/*{inStock ? (
                <button className="primary-btn card-btn">
                  Add to Cart<i className="bi bi-cart"></i>
                </button>
              ) : (
                <button className="card-btn out-of-stock">Out of Stock</button>
              )}*/}
              {inStock ? inCartList ? (
                  location.pathname === '/cart-list' ? (
                    <button
                      class="card__button"
                      onClick={() =>
                        removeFromCartListHandler(
                          _id,
                          token,
                          userDataDispatch,
                          setFetchingCartList
                        )
                      }
                      disabled={fetchingCartList}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <Link to="/cart-list">
                      <button className="primary-btn card-btn">
                        Go to Cart<i className="bi bi-cart"></i>
                      </button>
                    </Link>
                  )
                ) : (
                  <button
                    className="primary-btn card-btn"
                    onClick={() =>
                      addToCartListHandler(
                        product,
                        token,
                        userDataDispatch,
                        setFetchingCartList
                      )
                    
                    }
                  >
                    Add to Cart<i className="bi bi-cart"></i>
                  </button>
                )
               : (
                <button className="card-btn out-of-stock">Out of Stock</button>
              )}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default SingleProduct;
