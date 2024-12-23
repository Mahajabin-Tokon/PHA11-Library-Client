import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/allBooks`
    );
    setBooks(data);
  };

  const handleUpdate = (id) => {
    navigate(`/updateBook/${id}`);
  };

  const showAvailableBooks = () => {
    const filteredData = books.filter((book) => book.quantity > 0);
    setBooks(filteredData);
  };

  return (
    <div>
      <Helmet>
        <title>All Books</title>
      </Helmet>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 px-4">
          <button onClick={showAvailableBooks} className="btn">
            Available Books
          </button>
          <button onClick={getAllBooks} className="btn">
            All Books
          </button>
        </div>
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
                <ReactStars count={5} value={eachBook.rating} size={24} />
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      handleUpdate(eachBook._id);
                    }}
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
    </div>
  );
};

export default AllBooks;
