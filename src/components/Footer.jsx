import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  
  const navigate = useNavigate();
  return (
    <div className=" my-5 bg-[#fff] text-black">
      
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
        <div className="shrink-0 pr-2 flex">
          {/* Logo */}
          <div className=" -my-[0.7rem] cursor-pointer flex text-cyan-600">
          <svg  onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

             <h1  onClick={() => navigate("/")} className="text-2xl font-semibold italic text-black">
              Casey<span className="text-cyan-600">MiltonHomes</span></h1>
          </div>
        </div>
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
           
          <a href="https://instagram.com/blessedwriter01?igshid=MjEwN2IyYWYwYw==">  <AiFillInstagram

              size={25}
              style={{ marginLeft: "15px", cursor: "pointer",color:"red" }}
            /></a>
           
          </div>
        </ul>

        <ul className="text-center  text-black sm:text-start">
          <h1 className="mb-1 font-semibold text-black">Company</h1>
          
            <li> Casey<span className="text-cyan-600">MiltonHomes.com</span></li>
          
        </ul>

        <ul className="text-center text-black sm:text-start">
          <h1 className="mb-1 font-semibold text-black">About Us</h1>
          
            <li className="text-cyan-600 cursor-pointer"  onClick={() => navigate("/about")}>About</li>
            
            <li className="text-cyan-600 cursor-pointer"  onClick={() => navigate("/agent")}>Agents</li>
            <li>
      <p className="text-white-400 my-3 text-lg">Email:  <a  onClick={() => window.location = 'mailto:info@Caseymiltonhomes.com'}  className="cursor-pointer text-cyan-600"> Caseymiltonhomes.com</a></p>
     </li>
          
        </ul>

        

        <ul className="text-center sm:text-start">
          <h1 className="mb-1 font-semibold text-black">SPONSORS</h1>
          <li>VISA</li>
            <li>VERVE</li>
            <li>MASTER CARD</li>
            <li>STRIPE</li>
            <li>PAYPAL</li>
        </ul>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>©<li> Casey<span className="text-cyan-600">MiltonHomes.com</span></li>. All rights reserved.</span>
        <span>2006</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
