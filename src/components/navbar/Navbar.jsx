import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <img src="bird.svg" alt="Logo" className="bird-svg" />
      </div>
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
