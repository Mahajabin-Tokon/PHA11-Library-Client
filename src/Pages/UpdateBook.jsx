import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";

const UpdateBook = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  const { userEmail, coverImage, title, authorName, category, rating } = book;

  useEffect(() => {
    getBookByID();
  }, []);

  const getBookByID = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/book/${id}`
    );
    setBook(data);
  };
  const handleUpdateBook = () => {
    console.log("hello");
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Update Book</title>
      </Helmet>
      <div className="text-center font-rancho text-4xl my-10">Update Book</div>
      <form
        className="w-2/3 mx-auto bg-[#F4F3F0] py-10 rounded-3xl"
        onSubmit={handleUpdateBook}
      >
        {/* Field 1 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Cover Image</p>
            <input
              defaultValue={coverImage}
              name="coverImage"
              type="text"
              placeholder="Cover Image"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 2 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Title</p>
            <input
              defaultValue={title}
              name="title"
              type="text"
              placeholder="Title"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Field 3 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Author Name</p>
            <input
              defaultValue={authorName}
              name="authorName"
              type="text"
              placeholder="Author Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 4 */}
        {book.category && (
          <div className="px-10 py-2">
            <div className="w-full">
              <p>Category</p>
              <select
                className="select select-bordered w-full"
                defaultValue={category}
                name="category"
              >
                <option value="History">History</option>
                <option value="Romance">Romance</option>
                <option value="Business">Business</option>
                <option value="Fantasy">Fantasy</option>
              </select>
            </div>
          </div>
        )}

        {/* Field 5 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Rating</p>
            <input
              defaultValue={rating}
              name="rating"
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="px-10 py-4">
          <input
            type="submit"
            value="Update Book"
            className="btn w-full btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateBook;
