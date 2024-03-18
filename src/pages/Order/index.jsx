import React from 'react';

const Order = ({ meal }) => {
  // Ensure meal object is initialized with a default value
  const defaultMeal = { base: '', toppings: [], sauce: '' };
  const { base, toppings, sauce } = meal || defaultMeal;

  return (
    <div className="container order">
      <h2>Thank you for your order.</h2>
      <p>You ordered {base}  with:</p>
      <ul>
        {toppings && toppings.length > 0 ? (
          toppings.map((topping, index) => (
            <li key={index}>Toppings:{topping}</li>
          ))
        ) : (
          <li>No toppings selected</li>
        )}
      </ul>
      <p>Selected sauce: {sauce || 'No sauce selected'}</p>
    </div>
  );
};

export default Order;


