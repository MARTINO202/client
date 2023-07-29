import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <h1 className="m-0 xl:content-center">{title}</h1>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
