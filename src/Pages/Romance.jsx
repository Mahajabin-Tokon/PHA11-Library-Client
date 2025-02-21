import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const History = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/booksByCategory?category=Romance`
    );
    setBooks(data);
  };

  const handleDetails = (id) => {
    navigate(`/bookDetails/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto my-2 px-2">
      <Helmet>
        <title>Romance Books</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 ">
        {books.map((eachBook) => (
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src={eachBook.coverImage} alt="Cover Image" />
            </figure>
            <div className="card-body">
              {eachBook.title && (
                <h2 className="card-title">{`Title: ${eachBook.title}`}</h2>
              )}
              {eachBook.authorName && <p>{`Author: ${eachBook.authorName}`}</p>}
              <p>{`Category: ${eachBook.category}`}</p>
              <p>{`Quantity: ${eachBook.quantity}`}</p>
              <ReactStars count={5} value={eachBook.rating} size={24} />
              <div className="card-actions justify-end">
                <button
                  onClick={() => {
                    handleDetails(eachBook._id);
                  }}
                  className="btn"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
