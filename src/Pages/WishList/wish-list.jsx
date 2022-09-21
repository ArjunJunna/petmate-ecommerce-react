import React from 'react';
import SingleProduct from '../../Components/SingleProduct/Single-Product'
import { useUserData } from '../../Context/userDataContext';
import Footer from '../../Components/Footer/Footer';

const WishList = () => {

  const {userData: { wishListData },isLoading} = useUserData();

  return (
    <>
      <div className="page-container">
        <main>
          {isLoading ? (
            <img
              className="loader--image"
              src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif"
              alt="loader"
            />
          ) : (
            <>
              <div class="hero-heading">
                You currently have a total of {wishListData.length} items.
              </div>
              {wishListData.length ? (
                <div className="products-5">
                  {wishListData.map(product => (
                    <SingleProduct
                      cardDirection={'vertical'}
                      product={product}
                      key={product._id}
                    />
                  ))}
                </div>
              ) : (
                <h1>Your wishlist is currently empty...</h1>
              )}
            </>
          )}
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default WishList;
