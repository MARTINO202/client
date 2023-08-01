import React from 'react'
import { useEffect,useRef,useState } from 'react';
import aboutImg from "../assets/aboutImg.jpeg"
import { Link } from 'react-router-dom';

function About() {
    const [isOpen,setIsOpen]= useState(false)

    const paragraphStyles={
        
    }



    const info = [
        { text: "Years experience", count: "17" },
        { text: "Sold Houses", count: "770" },
      ];
  return (
    <section id="about" className="bg-black py-10 text-white">


<Link to="/">
    <button
                
                className="bg-white px-3 py-1.5 text-gray-700 border border-gray-300 mb-0 mt-6 hover:border-slate-600 rounded transition duration-150 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

              </button></Link>




    <div className="text-center mt-8">
      <h3 className=" text-4xl font-semibold">
        About <span className="text-cyan-600">Casey</span>
      </h3>
      <p className="text-gray-400 my-3 text-lg">Email:  <a  onClick={() => window.location = 'mailto:casey.milton@hotmail.com'}  className="cursor-pointer text-cyan-600">Casey.milton@hotmail.com</a></p>
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className=" text-gray-300 my-3">
            <p className={` text-justify leading-7 w-11/12 mx-auto`}>
            Casey Milto is a top-producing real estate agent in both Houston and Galveston County. Previously the broker/owner of RE/MAX City View located in Houston's Montrose neighborhood, Casey specializes in Houston’s Inner-Loop neighborhoods and Galveston County waterfront properties.

Casey owes his success in the highly competitive real estate field to his extensive background in city management and economic development. Prior to real estate, he worked in municipal government in La Marque, Texas, and the City of Pearland where he gained valuable knowledge of city codes and zoning requirements and developed his keen negotiating and people skills. This experience sparked his passion for real estate and helped him launch his real estate career in 2006. A real estate investor himself, Casey is a highly knowledgeable, dedicated, and trusted broker who puts his clients' best interests first. He works fervently through every aspect of the deal and treats all transactions equally, no matter the price range.

Casey maintains a home on the water near Galveston Island and loves cruising on his boat and taking his RV out for a weekend. He enjoys giving back to the community and has served on boards and committees for the Texas City / La Marque Chamber of Commerce, the Mainland Rotary Club, and the Mainland United Way. A proud member and float captain for Galveston’s Krewe of Gambrinus, Casey reigned as King Gambrinus for their 2022 Mardi Gras Parade and is on the Board of Directors for this prominent non-profit group. A member of the Houston Area Realtors Association, Texas Realtors Association and the National Realtors Association, Casey holds a B.A. degree from Texas State University at San Marcos.
            </p>
            {/*<button className='text-cyan-600'  onClick={()=>setIsOpen(!isOpen)}>{isOpen? 'Read less...': 'Read more...'}</button>
          */}
            <br />
            <br />{/*
            <a href="./src/assets/Code_a_program.pdf" download>
              <button className="btn-primary">Download CV</button>
              </a>*/}
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
          <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
            <img
              src={aboutImg}
              alt=""
              className="w-full object-cover bg-cyan-600 rounded-xl"
            /> <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl text-2xl font-semibold text-white">
                    {content.count}
                    <span className="text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About