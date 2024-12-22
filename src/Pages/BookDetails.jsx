import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  const {
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
  return (
    <div className="flex justify-center items-center py-10 px-5">
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
            <button className="btn btn-primary">Borrow</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
