import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
     
        <div className="logo">
          <img src="bird.svg" alt="Logo" className='bird-svg' />
        </div>
        <div className="title">
        <Link to="/">
       
          <h1>TOM TOM</h1>
       
      </Link>
      </div>
    </header>
  );
}

export default Navbar;

