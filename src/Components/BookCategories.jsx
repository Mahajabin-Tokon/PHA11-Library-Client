import React from "react";
import { Link } from "react-router-dom";

const BookCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 pb-20">
      <div className="card bg-base-100 shadow-xl">
        <Link to="/history" className="btn card-body">
          <h2 className="card-title">History</h2>
        </Link>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <Link to="/romance" className="btn card-body">
          <h2 className="card-title">Romance</h2>
        </Link>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <Link to="/business" className="btn card-body">
          <h2 className="card-title">Business</h2>
        </Link>
      </div>
      <div className="card bg-base-100 shadow-xl">
        <Link to="/fantasy" className="btn card-body">
          <h2 className="card-title">Fantasy</h2>
        </Link>
      </div>
    </div>
  );
};

export default BookCategories;
