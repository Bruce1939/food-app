//library imports
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

//components
import Equipment from './Equipment';

//assets
import veg from '../assets/veg.svg';
import star from '../assets/star.svg';

const Dish = ({ dish }) => {

    const  {
        name, 
        rating,
        description,
        equipments,
        image
    } = dish;

  return (
    <div className="dish display">
        
        <div className="dish__details">
            
            <div className="dish__details__header">
                <p>{name}</p>
                <img src={veg} alt="Veg Symbol" />
                <div className="dish__details__header__rating">
                    {rating}
                    <img src={star} alt=""/>
                </div>
            </div>
            
            <div className="dish__details__requirements">
                
                {equipments.map((equipment, idx) => (
                    <Equipment key={idx} equipment={equipment}/>
                ))}
                
                <span>|</span>
                
                <div className="dish__details__requirements__ingredients">
                    <p>Ingredients</p>
                    <Link to="/dish" className="display">
                        View List<FaAngleRight color="#FF8800" />
                    </Link>
                </div>
            
            </div>
            
            <div className="dish__details__description">
                <p>{description}</p>
            </div>
        
        </div>
        
        <div className="dish__image">
            <img src={image} alt="Dish" />
            <br/>
            <button>Add<span>+</span></button>
        </div>
    
    </div>
  );
};

export default Dish;