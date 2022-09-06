import './App.css';
import NavBarRoutes from './Routes/navbar-routes';
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import MockmanAPI from './Components/MockMan/mock-man';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <NavBar />
          <NavBarRoutes />
          {/*<Footer />*/}
          <ToastContainer
            className="toastify"
            position="bottom-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </main>
      <Routes>
        <Route path="/mock-man" element={<MockmanAPI />} />
      </Routes>
    </div>
  );
}

export default App;
