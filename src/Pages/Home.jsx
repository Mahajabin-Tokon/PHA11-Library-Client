import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import Success from "../Components/Success";
import { Helmet } from "react-helmet";
import BookCategories from "../Components/BookCategories";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="max-w-6xl mx-auto px-2">
        <div className="text-center text-4xl py-10">Welcome to Bookish</div>
        <Banner></Banner>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="text-center text-4xl py-10">Book Categories</div>
        <BookCategories></BookCategories>
      </div>
      <div className="max-w-6xl mx-auto my-2 px-2">
        <div className="text-center text-4xl pb-10 ">Meet our Team</div>
        <Success></Success>
      </div>
      <div className="max-w-6xl mx-auto pb-10 px-2">
        <div className="text-center text-4xl py-10 ">User Reviews</div>
        <Feedback></Feedback>
      </div>
    </div>
  );
};

export default Home;
