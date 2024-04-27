import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col justify-center items-center p-8">
        <div className="w-full flex flex-row justify-between items-center mb-2">
          <Link
            to="/admin"
            className="text-red-500 font-bold underline hover:text-red-700"
          >
            Go to admin Dashboard
          </Link>
          <Link
            to="/user"
            className="text-red-500 font-bold underline hover:text-red-700"
          >
            Go to user Dashboard
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center wrap">
        
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960"
            alt="undraw_navigator_a479.png"
            width={100000000000}
            height={1000000000}
          />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
