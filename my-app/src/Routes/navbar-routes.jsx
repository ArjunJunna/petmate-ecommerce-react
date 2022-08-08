import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import LoginPage from '../Pages/Authentication/loginpage';
import MockmanAPI from '../Components/MockMan/mock-man';

function NavBarRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/mockmanapi" element={<MockmanAPI />} />
    </Routes>
  );
}

export default NavBarRoutes;