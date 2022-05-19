//library imports
import React from 'react';

//assets
import dateSelector from '../assets/dateSelector.svg';
import setTime from '../assets/setTime.svg';

const DishCalender = () => {

  return (
    <div className="dishcalender">
        
        <div className="dishcalender__bg-black"></div>
        <div className="dishcalender__bg-white"></div>
        
        <div className="dishcalender__details display">
        
            <div className="dishcalender__details__date display">
                <img src={dateSelector} alt="Calender" />
                <p>21 May 2021</p>
            </div>
        
            <div className="dishcalender__details__time display">
                <img src={setTime} alt="Clock" />
                <p>10:30 Pm - 12:30 Pm</p>
            </div>
        
        </div>
    
    </div>
  );
};

export default DishCalender;