import React from "react";
import bp1 from "../assets/bp1.jpg";
import bp2 from "../assets/bp2.jpg";
import bp3 from "../assets/bp3.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full rounded-3xl">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp1} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            Discover endless adventures. Borrow, read, and return with ease.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp2} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            From classics to new releases, borrow your favorite books today.
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <img src={bp3} className="md:w-1/2 h-96" />
          <p className="md:w-1/2 md:text-3xl p-5 md:pr-20">
            Borrow smarter, read better. Explore our library, pick your
            favorites!
          </p>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
