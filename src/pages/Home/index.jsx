import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home container">
      <h2>
        Welcome to TOM TOM
      </h2>
      <Link to="/base">
        <button>
          Create Your Meal
        </button>
      </Link>
    </div>
  )
}

export default Home