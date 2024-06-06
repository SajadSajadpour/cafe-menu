import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Lottie from 'react-lottie';
import * as animationData from '../src/animations/hookah.json';
import './App.css';
import CategoryCard from './components/CategoryCard';
import CategoryPage from './components/CategoryPage';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Router>
    <div className="App">
      <div className="App-content">
        <header className="App-header">
        <Lottie options={defaultOptions} height={300} width={300} />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="Restaurant-name">ROYAL LOUNGE</h1>
        </header>
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="item-container">
                <CategoryCard title="Drinks" path="/category/drinks" />
                <CategoryCard title="Shisha" path="/category/shisha" />
                <CategoryCard title="Desserts" path="/category/desserts" />
                <CategoryCard title="Snacks" path="/category/snacks" />
              </div>
            </div>
          } />
          <Route path="/category/:category" element={<CategoryPage />} />
        </Routes>
      </div>
    </div>
  </Router>
);
}


export default App;