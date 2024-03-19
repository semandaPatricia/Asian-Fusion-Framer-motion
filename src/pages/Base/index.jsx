import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Base = ({ addBase, meal }) => {
  const bases = ['Rice noodles', 'Udon noodles', 'White rice', 'Brown rice', 'Quinoa', 'Vermicelli','Whole Grain noodles','Vegetable base'];

  return (
    <motion.div className="base container"
    initial={{ opacity: 0, x: '100vw' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ type: 'spring', delay: 0.5 }}
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => (
          <motion.li key={base} onClick={() => addBase(base)}
          whileHover={{ scale: 1.3, originX: 0, color: '#f8e112' }}
          transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className={meal.base === base ? 'active' : ''}>{base}</span>
          </motion.li>
        ))}
      </ul>
      {meal.base && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/toppings">
          <motion.button
               whileHover={{ 
                scale: 1.1, 
                textShadow: "0px 0px 8px rgb(255,255,255)",
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;

