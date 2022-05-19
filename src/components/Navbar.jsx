//library imports
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

//assets
import navArrow from '../assets/navArrow.svg';

const Navbar = ({ title }) => {

  const { pathname } = useLocation();

  return (
    <div className="navbar">
        <Link to={pathname === "/" ? '/dish' : '/'}><img src={navArrow} alt=""/></Link>
        {title && <h1>{title}</h1>}
    </div>
  );
};

export default Navbar;