import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const BookCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-5 pb-20">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card bg-base-100 shadow-xl"
      >
        <Link to="/history" className="btn card-body">
          <h2 className="card-title">History</h2>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card bg-base-100 shadow-xl"
      >
        <Link to="/romance" className="btn card-body">
          <h2 className="card-title">Romance</h2>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card bg-base-100 shadow-xl"
      >
        <Link to="/business" className="btn card-body">
          <h2 className="card-title">Business</h2>
        </Link>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="card bg-base-100 shadow-xl"
      >
        <Link to="/fantasy" className="btn card-body">
          <h2 className="card-title">Fantasy</h2>
        </Link>
      </motion.div>
    </div>
  );
};

export default BookCategories;
