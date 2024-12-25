import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [isCardView, setIsCardView] = useState(true);

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
        <div className="flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
            <button onClick={showAvailableBooks} className="btn w-40">
              Available Books
            </button>
            <button onClick={getAllBooks} className="btn w-40">
              All Books
            </button>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn w-40 m-1">
              Toggle View
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li
                onClick={() => {
                  setIsCardView(true);
                }}
              >
                <a>Card View</a>
              </li>
              <li
                onClick={() => {
                  setIsCardView(false);
                }}
              >
                <a>Table View</a>
              </li>
            </ul>
          </div>
        </div>
        {isCardView ? (
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
                  {eachBook.category && (
                    <p>{`Category: ${eachBook.category}`}</p>
                  )}

                  <ReactStars count={5} value={eachBook?.rating} size={24} />
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
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Book</th>
                  <th>Category</th>
                  <th>Rating</th>
                  <th>Update</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {books.map((eachBook) => (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={eachBook.coverImage} alt="Book Cover" />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{eachBook.title}</div>
                        </div>
                      </div>
                    </td>
                    <td>{eachBook.category}</td>
                    <td>
                      <ReactStars count={5} value={eachBook.rating} size={24} />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          handleUpdate(eachBook._id);
                        }}
                        className="btn"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
