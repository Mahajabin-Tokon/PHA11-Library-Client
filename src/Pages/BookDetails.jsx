import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import { format } from "date-fns";
import Swal from "sweetalert2";

const BookDetails = () => {
  const { user } = useContext(authContext);
  const { email } = user;
  const [book, setBook] = useState([]);
  const [borrowDate, setBorrowDate] = useState(new Date());
  // const [returnDate, setReturnDate] = useState("2");
  const { id } = useParams();

  const {
    _id,
    userEmail,
    coverImage,
    title,
    quantity,
    authorName,
    category,
    description,
    rating,
    bookContent,
  } = book;

  useEffect(() => {
    getBookByID();
  }, []);

  const getBookByID = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/book/${id}`
    );
    setBook(data);
  };

  const handleBorrow = () => {
    document.getElementById("my_modal_1").showModal();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const returnDateInput = form.returnDate.value;
    const borrowedBook = { bookID: _id, email, borrowDate, returnDateInput };

    try {
      const data = await axios
        .post(`${import.meta.env.VITE_API_URL}/borrowBook`, borrowedBook)
        .then((data) => {
          document.getElementById("my_modal_1").close();
          if (data.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "New Book Borrowed!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            getBookByID();
            //   navigate("/");
          }


        });
    } catch (err) {
      document.getElementById("my_modal_1").close();
      Swal.fire({
        text: err?.response?.data,
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div className="flex justify-center items-center py-10 px-5">
      <Helmet>
        <title>Book Details</title>
      </Helmet>
      <div className="card bg-base-100 w-1/2 shadow-xl">
        <figure>
          <img src={coverImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{quantity}</p>
          <p>{authorName}</p>
          <p>{category}</p>
          <p>{description}</p>
          <p>{rating}</p>
          <p>{bookContent}</p>
          <div className="card-actions justify-end">
            <button onClick={handleBorrow} className="btn">
              Borrow
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit}
            className="w-11/12 mx-auto bg-[#F4F3F0] py-5 rounded-3xl"
          >
            <div className="px-10 py-2">
              <div className="w-full">
                <p>User Name</p>
                <input
                  defaultValue={user?.displayName}
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="px-10 py-2">
              <div className="w-full">
                <p>User Email</p>
                <input
                  defaultValue={user?.email}
                  name="email"
                  type="text"
                  placeholder="User Email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="px-10 py-2">
              <div className="w-full">
                <p>Return Date</p>
                <input
                  name="returnDate"
                  type="date"
                  placeholder="Return Date"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="px-10 py-2">
              <div className="w-full">
                <input
                  type="submit"
                  value="Submit"
                  className="btn w-full btn-success"
                />
              </div>
            </div>
            <div className="px-10 py-2">
              <div className="w-full">
                <div
                  onClick={() => {
                    document.getElementById("my_modal_1").close();
                  }}
                  className="btn btn-error w-full"
                >
                  Cancel
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookDetails;
