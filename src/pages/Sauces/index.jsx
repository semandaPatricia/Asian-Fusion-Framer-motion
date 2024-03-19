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
          <motion.li key={sauce} onClick={() => addSauce(sauce)}
          whileHover={{ scale: 1.3, originX: 0,color: '#f8e112' }}
          transition={{ type: 'spring', stiffness: 300 }}
          >
            <span className={meal.sauce === sauce ? 'active' : ''}>{sauce}</span>
          </motion.li>
        ))}
      </ul>
      {meal.sauce && (
        <motion.div className="next"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        >
          <Link to="/order">
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
    </div>
  );
};

export default Sauces;
