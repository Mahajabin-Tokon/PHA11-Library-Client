import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { authContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddBook = () => {
  const { user } = useContext(authContext);

  const handleAddBook = async (event) => {
    event.preventDefault();
    const form = event.target;
    const userEmail = user?.email;
    const coverImage = form.coverImage.value;
    const title = form.title.value;
    const quantity = parseFloat(form.quantity.value);
    const authorName = form.authorName.value;
    const category = form.category.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const bookContent = form.bookContent.value;

    const book = {
      userEmail,
      coverImage,
      title,
      quantity,
      authorName,
      category,
      description,
      rating,
      bookContent,
    };

    try {
      const data = await axios
        .post(`${import.meta.env.VITE_API_URL}/addBook`, book)
        .then((data) => {
          if (data.data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "New Book Added Successfully!",
              icon: "success",
              confirmButtonText: "Cool",
            });
            //   navigate("/");
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-10">
      <Helmet>
        <title>Add Book</title>
      </Helmet>
      <div className="text-center font-rancho text-4xl my-10">Add New Book</div>
      <form
        className="w-2/3 mx-auto bg-[#F4F3F0] py-10 rounded-3xl"
        onSubmit={handleAddBook}
      >
        {/* Field 1 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Cover Image</p>
            <input
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
            <p>Quantity</p>
            <input
              name="quantity"
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 4 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Author Name</p>
            <input
              name="authorName"
              type="text"
              placeholder="Author Name"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 5 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Category</p>
            <select className="select select-bordered w-full" name="category">
              <option value="History">History</option>
              <option value="Romance">Romance</option>
              <option value="Business">Business</option>
              <option value="Fantasy">Fantasy</option>
            </select>
          </div>
        </div>
        {/* Field 6 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Short Description</p>
            <input
              name="description"
              type="text"
              placeholder="Short Description"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 7 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Rating</p>
            <input
              name="rating"
              type="number"
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Field 8 */}
        <div className="px-10 py-2">
          <div className="w-full">
            <p>Book Content</p>
            <input
              name="bookContent"
              type="text"
              placeholder="Book Content"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="px-10 py-4">
          <input
            type="submit"
            value="Add Book"
            className="btn w-full btn-success"
          />
        </div>
      </form>
    </div>
  );
};

export default AddBook;
