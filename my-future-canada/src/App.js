// src/App.js
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Appbar from './Components/Appbar';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Appbar />
      <Header />
      <main className="main">
        <Banner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
