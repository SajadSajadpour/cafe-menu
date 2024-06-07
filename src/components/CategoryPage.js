// src/components/CategoryPage.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import mango from '../Images/mango.jpeg';
import cheesecake from '../Images/cheesecake.jpeg';
import chococake from '../Images/chococake.jpeg';
import strawberrycake from '../Images/strawberrycake.jpeg';
import shisha from '../Images/shisha.jpeg';
import snacks from '../Images/nuts.jpeg';

import anise from '../Images/anise.jpeg';
import Chamomile from '../Images/chamomile.jpeg';
import sage from '../Images/Sage.jpeg';
import spearmint from '../Images/Spearmint.jpeg';
import greentea from '../Images/greentea.jpeg';
import lipton from '../Images/lipton.jpeg';
import ginger from '../Images/ginger.jpeg';
import shamia from '../Images/ZhouratHamia.jpeg';
import zhlebanese from '../Images/ZhouratLebanese.jpeg';
import torabika from '../Images/Torabika.jpeg';
import Nescafe from '../Images/Nescafe.jpeg';
import Espresso from '../Images/Espresso.jpeg';
import Cappuccino from '../Images/Cappuccino.jpeg';
import Black from '../Images/BlackCoffee.jpeg';
import Turkish from '../Images/TurkishCoffee.jpeg';
import Teapot from '../Images/TeaPot.jpeg';
import StrawberrySmoothies from '../Images/StrawberrySmoothies.jpeg';
import MangoSmoothies from '../Images/MangoSmoothies.jpeg';
import MixedBerriesSmoothies from '../Images/MixedBerriesSmoothies.jpeg';
import LemonMintSmoothies from '../Images/LemonMintSmoothies.jpeg';
import StrawberryBananaSmoothies from '../Images/StrawberryBananaSmoothies.jpeg';
import Avocado from '../Images/AvocadoSmoothie.jpeg';
import icewater from '../Images/iceglass.jpeg';
import water from '../Images/water.jpeg';
import soda from '../Images/sodawater.jpeg';
import redbull from '../Images/redbull.jpeg';



const categoryItems = {
  drinks: [
    { name: 'Anise Herbal Tea', price: '$5', image: anise },
    { name: 'Chamomile And Mint Tea', price: '$5', image: Chamomile },
    { name: 'Sage Herbal Tea', price: '$5', image: sage },
    { name: 'Pure Spearmint Tea', price: '$5', image: spearmint },
    { name: 'Green Tea', price: '$5', image: greentea },
    { name: 'Lipton Tea', price: '$5', image: lipton },
    { name: 'Ginger and Honey Tea', price: '$5', image: ginger },
    { name: 'Zhourat Shamia', price: '$5', image: shamia },
    { name: 'Zhourat Lebanese', price: '$5', image: zhlebanese },
    { name: 'Torabika', price: '$5', image: torabika },
    { name: 'Nescafe', price: '$5', image: Nescafe },
    { name: 'Espresso', price: '$5', image: Espresso },
    { name: 'Cappuccino', price: '$5', image: Cappuccino },
    { name: 'Black Coffee', price: '$10', image: Black },
    { name: 'Turkish Coffee', price: '$10', image: Turkish },
    { name: 'Tea Pot', price: '$10', image: Teapot },

    { name: 'Strawberry Smoothie', price: '$10', image: StrawberrySmoothies },
    { name: 'Mango Smoothie', price: '$10', image: MangoSmoothies },
    { name: 'Mixed Berries Smoothie', price: '$10', image: MixedBerriesSmoothies },
    { name: 'Lemon Mint Smoothie', price: '$10', image: LemonMintSmoothies },
    { name: 'Strawberry Banana Smoothie', price: '$10', image: StrawberryBananaSmoothies },
    { name: 'Avocado Smoothie', price: '$10', image: Avocado },


    { name: 'Lemonade', price: '$5', image: icewater },
    { name: 'Orange', price: '$5', image: icewater },
    { name: 'Pineapple', price: '$5', image: icewater },
    { name: 'Mango', price: '$5', image: icewater },
    { name: 'Iced Coffee', price: '$5', image: icewater },
    { name: 'Soda', price: '$5', image: soda },
    { name: 'Water', price: '$2', image: water },
    { name: 'RedBull', price: '$5', image: redbull },
  ],
  shisha: [
    { name: 'Adalya - Love 66', price: '$25', image: shisha },
    { name: 'Adalya - Killer', price: '$25', image: shisha },
    { name: 'Adalya - Amor', price: '$25', image: shisha },
    { name: 'Adalya - Hawaii', price: '$25', image: shisha },
    { name: 'Adalya - Sky Fall', price: '$25', image: shisha },
    { name: 'Adalya - English Lord', price: '$25', image: shisha },
    { name: 'Adalya - JK 777', price: '$25', image: shisha },
    { name: 'Adalya - Havana', price: '$25', image: shisha },
    { name: 'Adalya - Angel Lips', price: '$25', image: shisha },
    { name: 'Adalya - Jamaican Vibes', price: '$25', image: shisha },

    { name: 'Mazaya - Double Apple', price: '$25', image: shisha },
    { name: 'Mazaya - Lemon Mint', price: '$25', image: shisha },

    { name: 'Fakher - Double Apple', price: '$20', image: shisha },
    { name: 'Fakher - Grape', price: '$20', image: shisha },
    { name: 'Fakher - Apple Mint', price: '$20', image: shisha },
    { name: 'Fakher - Lemon Mint', price: '$20', image: shisha },
    { name: 'Fakher - Grape Mint', price: '$20', image: shisha },
    { name: 'Fakher - Watermelon Mint', price: '$20', image: shisha },
    { name: 'Fakher - Blueberry Mint', price: '$20', image: shisha },
    { name: 'Fakher - Gum Mint', price: '$20', image: shisha },
    { name: 'Fakher - Peach', price: '$20', image: shisha },
    { name: 'Fakher - Orang Mint', price: '$20', image: shisha },
    { name: 'Fakher - Strawberry', price: '$20', image: shisha },
    { name: 'Fakher - Mint', price: '$20', image: shisha },
    { name: 'Fakher - Blue Mist', price: '$25', image: shisha },
  ],
  desserts: [
    { name: 'Cheese Cake', price: '$10', image: cheesecake },
    { name: 'Chocolate Cake', price: '$10', image: chococake },
    { name: 'Strawberry Cake', price: '$10', image: strawberrycake },

  ],
  snacks: [
    { name: 'Nuts', price: '$10', image: snacks },
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
        <h1>{category.charAt(0).toUpperCase() + category.slice(1)} </h1>
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