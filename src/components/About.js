import React from 'react'
import { useEffect,useRef,useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import VideoCarousel from '../components/VideoCarousel'
import houses from "../assets/city.jpg";

function About() {
    const [isOpen,setIsOpen]= useState(false)

    const paragraphStyles={
        
    }


   


    const info = [
        { text: "Years experience", count: "17" },
        { text: "Sold Houses", count: "770" },
      ];
  return (
    <section id="about" className="bg-black m-0 p-0 text-white">


<Link to="/">
    <button
                className="bg-white m-0 px-3 py-1 text-gray-700 border border-gray-300 mb-0 mt-6 hover:border-slate-600 rounded transition duration-150 ease-in-out"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
</svg>

              </button>
              </Link>




    <div className="text-center mt-8">
      <h3 className=" text-3xl font-semibold">
        About <span className="text-cyan-600">CaseyHomes.com</span>
      </h3>



      <div className="h-[25rem] sm:h-[27rem] flex bg-red-400 overflow-hidden">
      <div className="absolute  w-full z-20     ">
        <div className="bg-gray-900/10 absolute z-10 w-full h-[25rem]  "></div>
        <img
          src={houses}
          className="object-cover w-full  h-[25rem] sm:h-[27rem] "
        />
      </div>
      
    </div>



      {/*<VideoCarousel/>*/}
     {/*} <p className="text-gray-400 my-3 text-lg">Email:  <a  onClick={() => window.location = 'mailto:Casey.milton@caseyhomes.com'}  className="cursor-pointer text-cyan-600">Casey.milton@caseyhomes.com</a></p>*/}
      <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
        <div className="p-2">
          <div className=" text-white my-3">
            <p className={` text-justify leading-7 w-11/12 mx-auto text-white`}>
            For years, millions of home shoppers have turned to caseyhomes.com® to find their dream home. Operated by Move, Inc., realtor.com® offers a comprehensive list of for-sale properties, as well as the information and tools to make informed real estate decisions. Today, more than ever, caseyhomes.com® is The Home of Home Search℠.

caseyhomes.com® also offers homeowners a bevy of useful tools and resources through the My Home℠ dashboard. My Home℠ dashboard allows property owners to manage their home like the important investment it is by tracking their home’s value over time, researching and managing home improvements, and scouting other similar properties in the neighborhood. </p>
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
            <div className="flex mt-10 items-center gap-7">
              {info.map((content) => (
                <div key={content.text}>
                  <h3 className="md:text-4xl gap-4 text-2xl font-semibold text-white">
                    {content.count}
                    <span className=" text-cyan-600">+</span>{" "}
                  </h3>
                  <span className="md:text-base text-xs">{content.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="h-[25rem] sm:h-[27rem] flex bg-red-400 overflow-hidden">
      <div className="absolute  w-full z-20     ">
      <div className="bg-gray-900/10 absolute w-full h-[25rem]  ">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443088.05183600064!2d-95.73095795160718!3d29.817364678024347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b4488d8501%3A0xca0d02def365053b!2sHouston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sng!4v1691488124703!5m2!1sen!2sng"
         width="100%" 
         height="450"
        style={{ border: "" }}
        allowfullscreen="yes"
        loading="lazy"
      ></iframe></div>
      </div>
      
    </div>
  </section>
  )
}

export default About