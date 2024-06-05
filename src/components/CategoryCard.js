// src/components/CategoryCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers, faSmoking, faIceCream, faCookieBite } from '@fortawesome/free-solid-svg-icons';

const icons = {
  Drinks: faGlassCheers,
  Shisha: faSmoking,
  Desserts: faIceCream,
  Snacks: faCookieBite,
};

const CategoryCard = ({ title, path }) => {
    const navigate = useNavigate();
    const icon = icons[title];
  
    return (
      <div className="card" onClick={() => navigate(path)}>
        <FontAwesomeIcon icon={icon} size="2x" color="#ffffff" /> {/* White icon color */}
        <h2>{title}</h2>
      </div>
    );
  };

export default CategoryCard;