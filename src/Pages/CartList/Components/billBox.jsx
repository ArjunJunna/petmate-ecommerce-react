import React from 'react'
import { useUserData } from '../../../Context/userDataContext';

const BillBox=()=>{

      const {userData: { cartListData }, } = useUserData();

      const totalPrice = cartListData.reduce((acc, curr) => {
        return (acc = acc + curr.price * curr.qty);
      }, 0);

      const totalDiscountedPrice = cartListData.reduce((acc, curr) => {
        acc = acc + curr.discountedPrice * curr.qty;
        return acc;
      }, 0);

      const totalDiscount = totalPrice - totalDiscountedPrice;

      const totalQuantity = cartListData.reduce((acc, curr) => {
        acc = acc + curr.qty;
        return acc;
      }, 0);


  return (
    <div className="order__container">
      <h2 className="heading">Price Details</h2>
      <div className="br"></div>
      <div className="sub-details">
        <h4 className="sub-heading">
          Price ({totalQuantity} items)
          <span className="price"> ₹ {totalPrice}</span>
        </h4>
        <br />
        <h4 className="sub-heading">
          Discount<span className="price">- ₹ {totalDiscount}</span>
        </h4>
        <br />
        <h4 className="sub-heading">
          Delivery Charges<span className="price"> ₹ 0</span>
        </h4>
        <br />
        <div className="br"></div>
        <h2 className="sub-heading">
          Total Amount
          <span className="price"> ₹ {totalDiscountedPrice}</span>
        </h2>
        <div className="br"></div>
      </div>
      <button className="btn">Place Order</button>
    </div>
  );
}

export default BillBox