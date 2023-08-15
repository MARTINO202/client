import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import houses from "../assets/housess.jpg";
import HomepageBtn from "./HomepageBtn";
import { RiSearchLine } from "react-icons/ri";
import Scroll from "../components/Scroll"
import { buttons } from "../buttons";
import Blogs from "./Blogs/Blog";

const Hero = () => {
  const buttons = [
    { title: "BUY",path:'/offers', underline: "bg-[#e20112]" },
    { title: "RENT" },
    { title: "SELL" },
    { title: "PRE-APPROVAL" },
    { title: "JUST SOLD", css: "hidden sm:flex" },
    { title: "HOME VALUE", css: "hidden sm:flex" },
  ];

  const [search,setSearch]=useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch("");
  }
  return (
    <>
    <div className="h-[25rem] sm:h-[27rem] flex bg-red-400 overflow-hidden">
      <div className="absolute  w-full z-20     ">
        <div className="bg-gray-900/10 absolute z-10 w-full h-[25rem]  "></div>
        <img
          src={houses}
          className="object-cover w-full  h-[25rem] sm:h-[27rem] "
        />
      </div>
      <div className="relative z-30 flex flex-col items-center w-full pt-12">
        <p className="text-white text-[32px] sm:text-[57px] font-bold">
          To each their home.
        </p>
        <p className="text-white  pt-2 sm:pt-0  sm:text-[23px]  ">
          Let's find a home that's perfect for you
        </p>{/*
        <ul className="">
          <div className="pt-8 flex space-x-4 sm:space-x-2">
            {buttons.map((button) => (
              <HomepageBtn
                title={button.title}
                underline={button.underline}
                css={button.css}
              />
            ))}
          </div>
            </ul>*/}


<div className="flex  ">
              <ul className={`flex     group text-[20px] whitespace-nowrap  space-x-2 items-center   w-full space-y-0  lg:w-auto lg:space-y-0 lg:space-x-2   py-4`}>
                 <li onClick={() => navigate("/category/sale")} className=" cursor-pointer text-white border p-1 hover:bg-sky-700 rounded-[0.3rem] bg-black border-gray-400">Buy </li>
                {/* <li onClick={() => navigate("/category/sale")} className="cursor-pointer"> Sale</li>*/}
                {/* <li onClick={() => navigate("/category/rent")} className="cursor-pointer border p-1 rounded-[0.3rem] border-gray-400">Rent </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer">Mortgage </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer">Find Realtors </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer ">My Home </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer">News & Insights </li>
                 <li onClick={() => navigate("/")}  className="cursor-pointer border p-1 rounded-[0.3rem] border-gray-400">Manage Rentals </li>
                 <li onClick={() => navigate("/")} className="cursor-pointer border p-1 rounded-[0.3rem] border-gray-400">Advertise </li>
          */}
                </ul>
                </div>





        {/* Input */}
      {/*  <div className="relative mt-9  ">
          <form onSubmit={handleSubmit}>
          <input 
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
            type="search"
            className="bg-white py-4  w-[23rem] sm:w-[37rem] rounded-full pl-5 placeholder:text-gray-500 placeholder:text-[17px] outline-0 "
            placeholder="Adress, Name, City, Zip or Neighborhood"
          />
          <div className="absolute w-[2.7rem] h-[2.7rem] rounded-full  bg-[#e20112] top-[0.4rem] right-1 flex items-center justify-center">
            <RiSearchLine className="text-white text-[22px]" />
          </div>
          </form>
        </div>*/}
      </div>
    </div>
    <Scroll />
    <div className="flex mx-10 ">
     <div className="flex content-center item-center  space-x-5 ">
     <button onClick={() => navigate("/category/sale")} class="content-center mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Buy
</button>
<button onClick={() => navigate("/category/rent")} class="content-center mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Rent
</button>
     
      <button onClick={() => navigate("offers")} class="content-center mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Trending Houses
</button>

     </div>
    </div>
   <Blogs />
    </>
  );
};

export default Hero;
