//library imports
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import DishesPage from './Pages/DishesPage';
import DishPage from './Pages/DishPage';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DishesPage />}/>
        <Route path="/dish" element={<DishPage />}/>
      </Routes>
    </div>
  );
} 

export default App;
