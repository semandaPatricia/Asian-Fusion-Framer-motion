import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Base = ({ addBase, meal }) => {
  const bases = ['Rice noodles', 'Udon noodles', 'White rice', 'Brown rice', 'Quinoa', 'Vermicelli'];

  return (
    <motion.div className="base container"
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', delay: 0.5 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => (
          <li key={base} onClick={() => addBase(base)}>
            <span className={meal.base === base ? 'active' : ''}>{base}</span>
          </li>
        ))}
      </ul>
      {meal.base && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/toppings">
            <button>Next</button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;

