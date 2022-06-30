import React, { useEffect, useState } from "react";
import picture from "../images/11222.jpg";
import pic from "../images/2222.avif";
import { FaHamburger } from "react-icons/fa";

export const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState();
  useEffect(() => {
    setLoggedInUser(JSON.parse(localStorage.getItem("loggedInUser")));
  }, []);
  console.log(loggedInUser, localStorage.getItem("loggedInUser"));
  return (
    <>
      <div className="overlay flex-wrap">
        <div>
          <nav className=" flex text-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            {}
            <div>
              {" "}
              <img
                className="max-w-[100%] h-[15vh] rounded-full"
                src={loggedInUser?.[0]?.img}
                alt=""
              />
            </div>

            <div className="max-w-[13%]">
              {" "}
              <h1 className="bg-[black] font-medium text-[20px]">
                {loggedInUser?.[0]?.fullname}
              </h1>{" "}
              <h2 className="bg-[black]  text-[20px]">
                {loggedInUser?.[0]?.email}
              </h2>
            </div>

            <a href="#" className="flex justify-center ">
              <span className=" flex justify-center  text-[80px] ml-32  font-semibold whitespace-nowrap  dark:text-white">
                𝔐𝔬𝔲𝔫𝔱𝔞𝔦𝔫 ℭ𝔲𝔭
              </span>
            </a>
          </nav>

          <div className="flex justify-center flex-wrap md:m-28 sm:mt-24  ">
            <div className="text-right mr-8 md:mt-10 sm:mt-24">
              <h2 className="text-yellow-600 text-4xl">WE TAKE</h2>
              <h3 className="text-white text-6xl">PRIDE IN</h3>
              <span className="text-white text-7xl">OUR FOOD</span>
              <p className="text-xl text-white mt-8">
                Lorem ipsum dolor sit amet{" "}
              </p>
              <button className="w-48 p-3 mt-8 font-medium md:ml-10 text-2xl capitalize rounded-full bg-yellow-400">
                book table
              </button>
            </div>
            <div className="my-10">
              <img src={pic} alt="" className="hidden md:block" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:h-[100vh] md:flex justify-center justify-evenly bg-[#111111] sm:inline ">
        <div>
          <img src={picture} className="md:h-[90vh] md:w-[100%] " />
        </div>
        <div className="md:w-[40%] sm:w-[100%] md:m-12 sm:m-0 md:border-2 md:border-red-300 md:p-4 sm:p-16 sm:bg-[black]">
          <h5 className="text-[yellow] text-[20px] font-bold">
            Stifen Albort Jonny{" "}
          </h5>

          <h1 className="text-[60px] text-[#eeeef0] font-bold">
            Located In A <br /> Small Town
          </h1>
          <p className="text-[white] font-medium">
            Lorem vel ipsa doloribus! Mollitia laudantium velit voluptatem eos
            nisi{" "}
          </p>

          <div className="flex mt-16   text-[white] ">
            <p className="font-medium mr-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum officia maxime obcaecati a iure eius. Lorem ipsum dolor
              sit, amet consectetur Lorem ipsum dolor sit, amet consectetur
            </p>
            <p className="font-medium ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum officia maxime obcaecati a iure eius. Lorem ipsum dolor
              sit, amet consectetur Lorem ipsum dolor sit, amet consectetur
            </p>
          </div>

          <div className="flex justify-between mt-14">
            <div className="flex">
              <div className="">
                <img
                  src={picture}
                  className=" mt-6 rounded-full h-[9vh] sm:w-[80px]"
                />
              </div>
              <div>
                <h1 className="text-[white] text-[20px] font-bold mt-6 ml-4">
                  Black & White
                </h1>
                <h4 className="text-[yellow] text-[15px] ml-4 font-medium ">
                  Services
                </h4>
              </div>
            </div>
            <div className="text-[grey] text-[40px] m-auto">𝔐𝔬𝔲𝔫𝔱𝔞𝔦𝔫 ℭ𝔲𝔭</div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center h-[100vh] bg-[black]">
          <h1 className="text-[80px] font-bold text-[white]">Core Featurs</h1>
          <span className="text-[40px] font-medium text-[white]">feature</span>
        
         
         <div className="flex justify-around items-center">
          <div className="flex flex-col my-20 border-2 border-[red] h-[40vh] w-[20%]  ">
            <span className="text-[red] flex justify-center mt-6 text-[50px]">
              {" "}
              <FaHamburger />{" "}
            </span>
            <h1 className="text-[20px] text-[white] font-bold">Best Quality food </h1>
            <span className="font-semibold text-[yellow] mt-4">services</span>
            <p className="font-medium text-[white] mt-6">
              Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit.
              Perspiciatis, nisi unde <br/>adipisci deleniti maxime esse.
            </p>
            <h4 className="font-semibold mt-6 text-[yellow]">new features</h4>
          </div>
        </div>
         
       
      </div>
      </div>
    </>
  );
};

export default Dashboard;
