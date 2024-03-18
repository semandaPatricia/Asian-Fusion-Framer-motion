import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Toppings = ({ addTopping }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const toggleTopping = (topping) => {
    const isSelected = selectedToppings.includes(topping);
    if (isSelected) {
      setSelectedToppings(selectedToppings.filter(item => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleToppingClick = (topping) => {
    toggleTopping(topping);
    addTopping(topping);
  };

  const toppings = ['Chicken', 'Beef', 'Pork', 'Prawns', 'Tofu', 'Turkey'];

  return (
    <div className="toppings container">
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping, index) => (
          <li key={index} onClick={() => handleToppingClick(topping)} className={selectedToppings.includes(topping) ? 'active' : ''}>
            {topping}
          </li>
        ))}
      </ul>
      <Link to="/sauces">
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Toppings;
