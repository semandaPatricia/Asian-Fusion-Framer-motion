
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Toppings = ({ addTopping,meal }) => {


  const toppings = ['Chicken', 'Beef', 'Pork', 'Prawns', 'Tofu', 'Turkey'];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => (
          <motion.li key={topping} onClick={() => addTopping(topping)}
          whileHover={{ scale: 1.3, originX: 0,color: '#f8e112' }}
          transition={{ type: 'spring', stiffness: 300 }}
          >
            
            <span className={meal.topping === topping ? 'active' : ''}>{topping}</span>
          </motion.li>
        ))}
      </ul>
      <motion.div className="next"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      >
      <Link to="/sauces">
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
    </div>
  );
};

export default Toppings;
