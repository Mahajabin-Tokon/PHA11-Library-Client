import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const History = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/booksByCategory?category=Romance`
    );
    setBooks(data);
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
              <h2 className="card-title">{eachBook.title}</h2>
              <p>{eachBook.authorName}</p>
              <p>{eachBook.category}</p>
              <div className="card-actions justify-end">
                <button
                  //   onClick={() => {
                  //     handleUpdate(eachBook._id);
                  //   }}
                  className="btn"
                >
                  Update
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
