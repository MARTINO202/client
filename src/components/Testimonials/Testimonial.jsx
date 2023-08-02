import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import  {Scrollbar, A11y,Autoplay,EffectFade,
  Navigation,
  Pagination,
} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "swiper/css/bundle";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      date:'10/09/2006',
      review:
        "I would like to thank Casey Homes for the completion of our magnificent dream home.During the course of construction, we were continually amazed how well the project was coordinated, substantially reducing the time-frame of completion…",
    },
    {
      img: profilePic2,
      date:'04/02/2009',
      review:
        "Thank you for making the decision to change builders so easy. The service that you provided was second to none. We really appreciated your honesty and efficiency throughout our building process…",
    },
    {
      img: profilePic3,
      date:'08/23/2015',
      review:
        "We congratulate Casey Homes, you certainly deserve the success and recognition your organisation has achieved and wish you all the very best in the future.",
    },
    {
      img: profilePic4,
      date:'07/18/2022',
      review:
       "I found working with Casey Homes to be the pleasant happy and stress free exercise that you would hope it be when building a new home. I could not recommend a company more highly and should I find myself building again at some point in the future I would certainly look to have Casey Homes do the job. Thanks and congratulations to Casey homes for the experience and value for money home.",
    },
  ];

  return (
    <div className="t-wrapper  " id="testimonial">
      <div className="t-heading mx-4 text-center">
        <span>Some Of Our </span>
        <span>Client Reviews...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination,EffectFade,Autoplay ,Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={1}
        navigation={true}
        



        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
     
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <h1>{client.date}</h1>
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
