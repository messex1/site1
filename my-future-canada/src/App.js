// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
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
