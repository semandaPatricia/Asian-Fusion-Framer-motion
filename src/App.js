import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './pages/Home/index'
import Base from './pages/Base/index'
import Toppings from "./pages/Toppings";
import Sauces from './pages/Sauces';
import Order from './pages/Order/index'

function App() {
  const [meal, setMeal] = useState({ base: "", toppings: [], sauce: "" });

  const addBase = (base) => {
    setMeal({ ...meal, base });
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!meal.toppings.includes(topping)) {
      newToppings = [...meal.toppings, topping];
    } else {
      newToppings = meal.toppings.filter(item => item !== topping);
    }
    setMeal({ ...meal, toppings: newToppings });
  }

  const addSauce = (sauce) => {
    setMeal({ ...meal, sauce });
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base addBase={addBase} meal={meal} />} />
          <Route path="/toppings" element={<Toppings addTopping={addTopping} meal={meal} />} />
          <Route path="/sauces" element={<Sauces addSauce={addSauce} meal={meal} />} />
          <Route path="/order" element={<Order meal={meal} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


