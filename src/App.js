import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Homepage from './pages/Homepage';
import RegisterPage from './pages/Registerpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './pages/Loginpage';
import BookCard from './components/Bookcard';
import CartPage from './pages/Cartpage';
import Footer from './components/Footer';
import Header from './components/Header';
import AdminPage from './pages/Adminpage';
import HomePage from './pages/Homepage';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
