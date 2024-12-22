import React from "react";

const Success = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
        <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/8B1wJD5/con1.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Alex Johnson</p>
        <p>Lauched the website for digital borrowing</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
      <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/6rzcm8L/con2.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Sherlock Holmes</p>
        <p>Founder, started our Bookish library in 1995</p>
      </div>
      <div className="flex flex-col justify-center items-center border-2 py-4 rounded-3xl">
      <img
          width="200"
          height="200"
          className="rounded-3xl"
          src="https://i.ibb.co/phkbWFW/consultant1.jpg"
          alt="Consultant image"
        />
        <p className="font-bold">Sarah White</p>
        <p>Curated over 20 categories of books</p>
      </div>
    </div>
  );
};

export default Success;
