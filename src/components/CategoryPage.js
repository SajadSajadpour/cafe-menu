// src/components/CategoryPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import mango from './cafe-menu/Images/mango.jpeg';
import cheesecake from '../Images/cheesecake.jpeg';
import shisha from '../Images/image123.jpeg';
import snacks from '../Images/snacks.jpeg';
const categoryItems = {
  drinks: [
    { name: 'Drink 1', price: '$5', image: mango },
    { name: 'Drink 2', price: '$6', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
    { name: 'Drink 3', price: '$7', image: mango },
  ],
  shisha: [
    { name: 'Shisha 1', price: '$20', image: shisha },
    { name: 'Shisha 2', price: '$20', image: shisha },
    { name: 'Shisha 3', price: '$20', image: shisha },
    { name: 'Shisha 4', price: '$20', image: shisha },
    { name: 'Shisha 5', price: '$20', image: shisha },
    { name: 'Shisha 6', price: '$20', image: shisha },
    { name: 'Shisha 7', price: '$20', image: shisha },
    { name: 'Shisha 8', price: '$20', image: shisha },
  ],
  desserts: [
    { name: 'Dessert 1', price: '$8', image: cheesecake },
    { name: 'Dessert 2', price: '$9', image: cheesecake },
    { name: 'Dessert 3', price: '$7', image: cheesecake },
    { name: 'Dessert 4', price: '$8', image: cheesecake },
    { name: 'Dessert 5', price: '$9', image: cheesecake },
    { name: 'Dessert 6', price: '$7', image: cheesecake },
    { name: 'Dessert 7', price: '$9', image: cheesecake },
    { name: 'Dessert 8', price: '$7', image: cheesecake },

  ],
  snacks: [
    { name: 'Snack 1', price: '$4', image: snacks },
    { name: 'Snack 2', price: '$5', image: snacks },
    { name: 'Snack 3', price: '$3', image: snacks },
    { name: 'Snack 4', price: '$4', image: snacks },
    { name: 'Snack 5', price: '$5', image: snacks },
    { name: 'Snack 6', price: '$3', image: snacks },
    { name: 'Snack 7', price: '$5', image: snacks },
    { name: 'Snack 8', price: '$3', image: snacks },
  ],
};

const CategoryPage = () => {
    const { category } = useParams();
    const items = categoryItems[category] || [];
  
    return (
      <div className="container">
        <Link to="/" className="back-arrow">
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Link>
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h1>
        <div className="item-container">
          {items.map((item, index) => (
            <div key={index} className="item-card">
                {/* <img src={require('../Images/mango.jpeg')} /> */}
              <img src={item.image} alt={item.name} className="item-image" />
              <h2>{item.name}</h2>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default CategoryPage;