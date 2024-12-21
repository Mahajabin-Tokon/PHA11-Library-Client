import React, { useContext } from "react";
import Banner from "../Components/Banner";
import Feedback from "../Components/Feedback";
import Success from "../Components/Success";
import LatestVisa from "../Components/LatestVisa";
import { authContext } from "../AuthProvider/AuthProvider";


const Home = () => {
  const { isDark } = useContext(authContext);
  
  return (
      <div className={`${isDark ? "bg-gray-800 text-gray-50" : ""}`}>
        <div className="max-w-6xl mx-auto px-2">
          <div className="text-center text-4xl py-10">Welcome to A11</div>
          <Banner></Banner>
        </div>
        <div className="max-w-6xl mx-auto my-2 px-2">
          <div className="text-center text-4xl py-10">Latest Visas</div>
          <LatestVisa></LatestVisa>
        </div>
        <div className="max-w-6xl mx-auto my-2 px-2">
          <div className="text-center text-4xl pb-10 ">Meet our Team</div>
          <Success></Success>
        </div>
        <div className="max-w-6xl mx-auto pb-10 px-2">
          <div className="text-center text-4xl py-10 ">Our Previous Clients</div>
          <Feedback></Feedback>
        </div>
      </div>
  );
};

export default Home;
