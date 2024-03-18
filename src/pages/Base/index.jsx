import React from 'react';
import { Link } from 'react-router-dom';
const Base = ({ addBase, meal }) => {
  const bases = ['Rice noodles', 'Udon noodles', 'White rice', 'Brown rice', 'Quinoa', 'Vermicelli'];

  return (
    <div className="base container">
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => (
          <li key={base} onClick={() => addBase(base)}>
            <span className={meal.base === base ? 'active' : ''}>{base}</span>
          </li>
        ))}
      </ul>
      {meal.base && (
        <div className="next">
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Base;

