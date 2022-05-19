//library imports
import React, { useState, useEffect } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import axios from 'axios';

//styles
import '../styles/DishesStyles.css';

//urls
import { DISHES_URL } from '../urls';

//components
import Navbar from '../components/Navbar';
import DishCalender from '../components/DishCalender';
import DishType from '../components/DishType';
import PopularDish from '../components/PopularDish';
import Dish from '../components/Dish';
import Loading from '../components/Loading';

//assets
import downArrow from '../assets/downArrow.svg';
import foodLogo from '../assets/foodLogo.svg'

const DishesPage = () => {

  const [dishes, setDishes] = useState([]);
  const [popularDishes, setPopularDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const dishTypeArray = [
    "Italian",
    "Indian",
    "Thai"  
  ];

  const getDishes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(DISHES_URL);
      if (response.data.dishes) {
        setLoading(false);
        setDishes(response.data.dishes);
        setPopularDishes(response.data.popularDishes);
        return;
      }
      return setFetchError('Something Went Wrong!!!');
    } catch (error) {
      console.log(error);
      return setFetchError('Something Went Wrong!!!');
    }
  };

  useEffect(() => {
    getDishes();
  }, []);

  if (loading && !fetchError) return <Loading />;

  return (
    <div className="dishesPage">

      {fetchError && (<p>{fetchError}</p>)}
      
      <div className="non-scrollable">
        
        <Navbar title="Selected Dishes"/>
        <DishCalender />
        
        <div className="dishtype__container">
          {dishTypeArray.map((dishType, idx) => {
            return <DishType key={idx} dishType={dishType} />
          })}
        </div>
        
        <div className="populardish__container">
          <h1>Popular Dishes</h1>
          {popularDishes.map((dish) => (
              <PopularDish key={dish.id} dish={dish} />
          ))}
        </div>
        
        <hr />
      
      </div>
      
      <div className="scrollable">         
        
        <div className="recommendation display">
            
          <div className="recommendation__heading">
            <h1>Recommended</h1>
            <img src={downArrow} alt=""/>
          </div>
          <button>menu</button>
        
        </div>
        
        {dishes && (
          dishes.map((dish) => (
            <Dish key={dish.id} dish={dish} />
        )))}

        <div className="div"></div>
      
      </div>

      <div className="checkout display">
        <img src={foodLogo} alt=""/>
        <p>3 food items Selected</p>
        <Link to="/dish"><AiOutlineArrowRight color="#fff" /></Link>
      </div>

    </div>
  );
};

export default DishesPage;