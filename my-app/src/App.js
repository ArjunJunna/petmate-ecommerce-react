import './App.css';
import NavBarRoutes from './Routes/navbar-routes'
import NavBar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import MockmanAPI from './Components/MockMan/mock-man';


function App() {
  return (
    <div className="App">
      <main className="main page-container">
        <NavBar />
        <NavBarRoutes />
        <Footer />
      </main>
      <Routes>
        <Route path="/mock-man" element={<MockmanAPI />} />
      </Routes>
    </div>
  );
}

export default App;
