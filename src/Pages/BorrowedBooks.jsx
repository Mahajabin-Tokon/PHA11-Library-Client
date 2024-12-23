import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";

const BorrowedBooks = () => {
  const { user } = useContext(authContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/borrowedBooks/${user?.email}`
    );
    setBooks(data);
  };

  const handleReturn = (id) => {
    alert(id)
  };

  return (
    <div>
      <Helmet>
        <title>Borrowed Books</title>
      </Helmet>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5 ">
          {books.map((eachBook) => (
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={eachBook.coverImage} alt="Cover Image" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{eachBook.title}</h2>
                <p>{eachBook.category}</p>
                <p>{eachBook.borrowDate}</p>
                <p>{eachBook.returnDateInput}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      handleReturn(eachBook._id);
                    }}
                    className="btn"
                  >
                    Return
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

export default BorrowedBooks;
