import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center">
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt=""
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p>The home and elements needeed to create beatiful products.</p>
          <div className="flex items-center mt-[15px]">
           
          <a href="https://instagram.com/blessedwriter01?igshid=MjEwN2IyYWYwYw==">  <AiFillInstagram

              size={25}
              style={{ marginLeft: "15px", cursor: "pointer",color:"red" }}
            /></a>
           
          </div>
        </ul>

        <ul className="text-center text-grey sm:text-start">
          <h1 className="mb-1 font-semibold">Company</h1>
          
            <li>REALTOR</li>
          
        </ul>

        

        <ul className="text-center text-grey sm:text-start">
          <h1 className="mb-1 font-semibold">SPONSORS</h1>
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
        <span>©Realtor. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
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
