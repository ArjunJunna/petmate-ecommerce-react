import { removeFromCartList } from '../../../Utilities/JS/cartListAxiosFunctions';
import { toast } from 'react-toastify';

const removeFromCartListHandler = async (
  id,
  token,
  userDataDispatch,
  setFetchingCartList
) => {
  setFetchingCartList(true);
  try {
    const response = await removeFromCartList(id, token);
    console.log(response);
    if (response.status === 200) {
      toast.success('Your product is removed from cart...');
      userDataDispatch({ type: 'SET_CARTLIST', payload: response?.data.cart });
    }
    setFetchingCartList(false);
  } catch (error) {
    toast.error('Something went wrong here...');
  }
};

export default removeFromCartListHandler;
