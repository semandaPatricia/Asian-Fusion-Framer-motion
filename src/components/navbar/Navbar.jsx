import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header>
       <motion.div
        className="logo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <img src="bird.svg" alt="Logo" className="bird-svg" />
      </motion.div>
      <motion.div
        className="title"
        initial={{ position: "relative", top: -250 }}
        animate={{ top: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <Link to="/">
          <h1>TOM TOM</h1>
        </Link>
        
      </motion.div>
      
    </header>
  );
};

export default Navbar;
