import React from 'react';
import { Link } from 'react-router-dom';
const Sauces = ({ addSauce, meal }) => {
  const sauces = ['Japan Teriyaki', 'Beijing Sauce', 'Thailand Padthai', 'Indonesia Satay', 'Burma Green Curry', 'Malay Coconut Curry'];

  return (
    <div className="sauces container">
      <h3>Step 3: Choose Your Sauce</h3>
      <ul>
        {sauces.map(sauce => (
          <li key={sauce} onClick={() => addSauce(sauce)}>
            <span className={meal.sauce === sauce ? 'active' : ''}>{sauce}</span>
          </li>
        ))}
      </ul>
      {meal.sauce && (
        <div className="next">
          <Link to="/order">
            <button>Next</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sauces;
