import React from 'react'
import SingleProduct from '../../Components/SingleProduct/Single-Product';
import { useUserData } from '../../Context/userDataContext';
import BillBox from './Components/billBox';
import Footer from '../../Components/Footer/Footer';

const CartList=()=>{
   const {userData: { cartListData },isLoading} = useUserData();
  return (
    <>
      <div className="page-container">
        <main>
          <div class="hero-heading">
            You currently have a total of {cartListData.length} items.
          </div>
          <div className="cart-container">
            
              {isLoading ? (
                <img
                  className="loader--image"
                  src="https://cutewallpaper.org/21/loading-gif-transparent-background/HopeWell.gif"
                  alt="loader"
                />
              ) : (
                <>
                  {cartListData.length ? (
                    <div className='cards'>
                      {cartListData.map(product => (
                        <SingleProduct
                          cardDirection={'horizontal'}
                          product={product}
                          key={product._id}
                        />
                      ))}
                    </div>
                  ) : (
                    <h1>Your cartlist is currently empty...</h1>
                  )}
                </>
              )}
            
            <BillBox />
          </div>
        </main>
        <Footer/>
      </div>
    </>
  );
}

export default CartList