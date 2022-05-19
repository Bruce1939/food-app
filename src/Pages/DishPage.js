//library imports
import React, { useState, useEffect } from 'react'
import axios from 'axios';

//styles
import '../styles/DishStyles.css';

//urls
import { DISH_URL } from '../urls';

//components
import Navbar from '../components/Navbar';
import VegetableAndSpices from '../components/VegetableAndSpices';
import Appliances from '../components/Appliances';
import Loading from '../components/Loading';

//assets
import spices from '../assets/spices.png'
import herbs from '../assets/herbs.png';
import downArrow from '../assets/downArrow.svg';
import star from '../assets/star.svg';
import setTime from '../assets/setTime.svg';

const DishPage = () => {

  const [dish, setDish] = useState({});
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const getDishes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(DISH_URL);
      if (response.data) {
        setLoading(false);
        setDish(response.data);
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

  if (loading && !fetchError) return <Loading />

  return (
    <div className="dishPage">
        
        {fetchError && (<p>{fetchError}</p>)}
        
        <Navbar />
        
        <div className="recipe__container">
            
            <div className="recipe">
                
                <div className="recipe__header">
                    <h1>{dish.name}</h1>
                    <div className="dish__details__header__rating" style={{ width: '20px', height: '12px' }}>
                        <p>4.2</p>
                        <img src={star} alt=""/>
                    </div>
                </div>
                
                <div className="recipe__description">
                    <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
                </div>
                
                <div className="recipe__time__required">
                    <img src={setTime} alt=""/>
                    <p>{dish.timeToPrepare}</p>
                </div>
            
            </div>
            
            <hr className="hr" />
            
            <div className="herbs-and-spices">
                <img src={herbs} alt="" className="herbs"/>
                <img src={spices} alt="" className="spices__1"/>
            </div>
       
        </div>
       
        <div className="container">
            
            <div className="ingredients">
                <h1>Ingredients</h1>
                <p>For 2 People</p>
            </div>
            
            <hr />
            
            <div className="vegetables">
            
                <div className="vegetables__header">
                    <h1>Vegetables (05)</h1>
                    <img src={downArrow} alt=""/>
                </div>
                
                {dish.ingredients && (dish.ingredients.vegetables.map((vegetable, idx) => (
                    <VegetableAndSpices key={idx} vegetableAndSpices={vegetable} />
                )))}
            
            </div>
            
            <div className="spices">
                
                <div className="spices__header">
                    <h1>Spices (10)</h1>
                    <img src={downArrow} alt=""/>
                </div>
                
                {dish.ingredients && (dish.ingredients.spices.map((spice, idx) => (
                    <VegetableAndSpices key={idx} vegetableAndSpices={spice} />
                )))}
            
            </div>
            
            <div className="appliances">
                <h1>Appliances</h1>
                {dish.ingredients && (dish.ingredients.appliances.map((appliance, idx) => (
                    <Appliances key={idx} appliance={appliance} />
                )))}
            </div>
        
        </div>
    </div>
  )
}

export default DishPage;