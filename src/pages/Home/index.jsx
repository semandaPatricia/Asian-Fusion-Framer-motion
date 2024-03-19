import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <motion.div className="home container"
    initial={{ opacity:0}}
    animate={{ opacity:1 }}
    transition={{ delay: 1.5, duration: 1.5 }}

    >
      <h2>
        Welcome to TOM TOM
      </h2>
      <Link to="/base">
        <motion.button
        animate={{ backgroundColor: "#000",}}
        whileHover={{
          scale: 1.1,
          textShadow: "0px 0px 8px rgb(255,255,255)",
          boxShadow: "0px 0px 8px rgb(255,255,255)",
        
        }}
        >
          Create Your Meal
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home