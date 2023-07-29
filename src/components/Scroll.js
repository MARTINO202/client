import React from 'react'
import { data } from '../mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Scroll() {
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
      };
  return (
    <>
    
    <h2 className="px-3 text-2xl mt-6 font-semibold text-center">RENT And Own A House Today</h2>
    <h4 className="px-3 text-2xl mt-6 font-small mt-[0.2rem] text-center">In The United State </h4>
    <div className='relative flex items-center'>
    <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
    <div
      id='slider'
      className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide scrollbar-hide my-10'
    >
      {data.map((item) => (
        <img
          className='w-[300px] h-[250px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
          src={item.img}
          alt='/'
        />
      ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
  </div>
  </>
  )
}

export default Scroll