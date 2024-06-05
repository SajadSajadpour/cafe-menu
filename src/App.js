import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import CategoryCard from './components/CategoryCard';
import CategoryPage from './components/CategoryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-content">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
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