// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
