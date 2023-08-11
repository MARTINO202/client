import React, { useState } from "react"
import Footer from "../Footer"
import { Link } from "react-router-dom"

const Card = (props) => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add("active-modal")
  } else {
    document.body.classList.remove("active-modal")
  }
  return (
    <>
      <div className='box btn_shadow '>
        <div className='img'>
          <img src={props.image} alt='' onClick={toggleModal} />
        </div>
        <div className='category d_flex'>
          <span onClick={toggleModal}>{props.category}</span>
          <label>
            <i className='far fa-heart'></i> {props.totalLike}
          </label>
        </div>
        <div className='title'>
          <h2 onClick={toggleModal}>{props.title}</h2>
          <a href='#popup' className='arrow' onClick={toggleModal}>
            <i class='fas fa-arrow-right'></i>
          </a>
        </div>
      </div>

      {/* Popup box */}
      {modal && (
        <div className='modal'>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='modal-content d_flex'>
            <div className='modal-img left'>
              <img src={props.image} alt='' />
            </div>
            <div className='modal-text right'>
              
            <span>Agent</span>
              <h2 className="font-semibold mt-2" >{props.category}</h2>
              <h1>{props.title}</h1>
              <span className="w-[100%] h-[100%]">{props.about}</span>
               <div className='button center mt-5 item-center content-center'>
                <button onClick={() => window.location = 'mailto:caseyhomes.com'} className='btn_shadow '>
                  Contact Agent
                </button>
              </div>
              <button className='close-modal btn_shadow' onClick={toggleModal}>
                <i class='fas fa-times'>X</i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
