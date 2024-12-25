import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { format } from "date-fns";

const BorrowedBooks = () => {
  const { user } = useContext(authContext);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/borrowedBooks/${user?.email}`,
      { withCredentials: true }
    );
    setBooks(data);
  };

  const handleReturn = async (id, bookID) => {
    // try {
    const reqData = { id, bookID };
    await axios
      .post(`${import.meta.env.VITE_API_URL}/return`, reqData)
      .then((data) => {
        if (data.data.deletedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Book returned",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   navigate("/");
        }
        console.log(data.data);
        getAllBooks();
      });
    // } catch (err) {
    //   console.log(err)
    // }
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
                {eachBook.title && (
                  <h2 className="card-title">{`Title: ${eachBook.title}`}</h2>
                )}
                {eachBook.authorName && (
                  <p>{`Author: ${eachBook.authorName}`}</p>
                )}
                <p>{`Borrow Date: ${format(
                  new Date(eachBook.borrowDate),
                  "yyyy-MM-dd"
                )}`}</p>
                <p>{`Return Date: ${format(
                  new Date(eachBook.returnDateInput),
                  "yyyy-MM-dd"
                )}`}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => {
                      handleReturn(eachBook._id, eachBook.bookID);
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
