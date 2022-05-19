//library imports
import React from 'react';

const PopularDish = ({ dish }) => {

    const { name, image } = dish;

  return (
    <div className="populardish">
        <img src={image} alt="Dish" />
        <div className="centered">{name}</div>
    </div>
  );
};

export default PopularDish;