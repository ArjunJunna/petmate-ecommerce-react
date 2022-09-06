import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import ProductList from '../Pages/ProductList/ProductList';
import LoginPage from '../Pages/Authentication/LoginPage';
import MockmanAPI from '../Components/MockMan/mock-man';
import SignupPage from '../Pages/Authentication/signuppage';
import AuthorizedRoutes from '../Routes/authorized-routes';
import CartList from '../Pages/CartList/cart-list';
import WishList from '../Pages/WishList/wish-list';

function NavBarRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />

      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/signup-page" element={<SignupPage />} />
      <Route path="/mockmanapi" element={<MockmanAPI />} />
      <Route element={<AuthorizedRoutes />}>
        <Route path="/cart-list" element={<CartList />} />
        <Route path="/wish-list" element={<WishList />} />
      </Route>
      {/*<Route path="/cart-list" element={<CartList />} />
      <Route path="/wish-list" element={<WishList />} />*/}
    </Routes>
  );
}

export default NavBarRoutes;
