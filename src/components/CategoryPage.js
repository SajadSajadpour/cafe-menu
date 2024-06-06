// src/components/CategoryPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const categoryItems = {
  drinks: [
    { name: 'Drink 1', price: '$5', image: '/images/mango.jpeg' },
    { name: 'Drink 2', price: '$6', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
    { name: 'Drink 3', price: '$7', image: '/images/mango.jpeg' },
  ],
  shisha: [
    { name: 'Shisha 1', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 2', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 3', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 4', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 5', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 6', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 7', price: '$20', image: '/images/image123.jpeg' },
    { name: 'Shisha 8', price: '$20', image: '/images/image123.jpeg' },
  ],
  desserts: [
    { name: 'Dessert 1', price: '$8', image: 'public/images/cheesecake.jpeg' },
    { name: 'Dessert 2', price: '$9', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 3', price: '$7', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 4', price: '$8', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 5', price: '$9', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 6', price: '$7', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 7', price: '$9', image: '/images/cheesecake.jpeg' },
    { name: 'Dessert 8', price: '$7', image: '/images/cheesecake.jpeg' },

  ],
  snacks: [
    { name: 'Snack 1', price: '$4', image: '/snacks.jpeg' },
    { name: 'Snack 2', price: '$5', image: '/snacks.jpeg' },
    { name: 'Snack 3', price: '$3', image: '/snacks.jpeg' },
    { name: 'Snack 4', price: '$4', image: '/snacks.jpeg' },
    { name: 'Snack 5', price: '$5', image: '/snacks.jpeg' },
    { name: 'Snack 6', price: '$3', image: '/snacks.jpeg' },
    { name: 'Snack 7', price: '$5', image: '/snacks.jpeg' },
    { name: 'Snack 8', price: '$3', image: '/snacks.jpeg' },
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