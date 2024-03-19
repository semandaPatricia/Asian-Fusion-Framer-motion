import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
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
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        >
          <Link to="/order">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Sauces;
