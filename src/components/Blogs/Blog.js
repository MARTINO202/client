import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"
import { Link, useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();
  return (
    <>
    
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>LATEST NEWS</h4>
            <button onClick={() => navigate("/blog")} class="content-center mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  More News
</button>
          </div>

          <div className='content grid'>

          <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute animate-bounce w-6 h-6 inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

            {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })}
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Blog
