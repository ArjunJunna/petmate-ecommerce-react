import { addToCartList } from '../../../Utilities/JS/cartListAxiosFunctions';
import { toast } from 'react-toastify';

const addToCartListHandler = async (
  product,
  token,
  userDataDispatch,
  setFetchingCartList
) => {
  setFetchingCartList(true);
  try {
    const response = await addToCartList(product, token);
    if (response.status === 201) {
      toast.success('Your product is added to cart...');
      userDataDispatch({ type: 'SET_CARTLIST', payload: response?.data.cart });
    }
    setFetchingCartList(false);
    console.log('clicked add to cart')
  } catch (error) {
    toast.error('Something went wrong here...');
  }
};

export default addToCartListHandler;
