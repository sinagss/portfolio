import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Slider imports
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "test",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur et nam culpa quidem, unde, cum incidunt magni, tempora neque rem temporibus quis aliquid quam explicabo accusantium minus deleniti commodi quae error. Odio totam magnam nihil? Repellat repellendus, esse ipsum nesciunt labore, voluptas qui impedit sapiente eligendi ab amet necessitatibus!",
  },
  {
    avatar: AVTR2,
    name: "test",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur et nam culpa quidem, unde, cum incidunt magni, tempora neque rem temporibus quis aliquid quam explicabo accusantium minus deleniti commodi quae error. Odio totam magnam nihil? Repellat repellendus, esse ipsum nesciunt labore, voluptas qui impedit sapiente eligendi ab amet necessitatibus!",
  },
  {
    avatar: AVTR3,
    name: "test",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur et nam culpa quidem, unde, cum incidunt magni, tempora neque rem temporibus quis aliquid quam explicabo accusantium minus deleniti commodi quae error. Odio totam magnam nihil? Repellat repellendus, esse ipsum nesciunt labore, voluptas qui impedit sapiente eligendi ab amet necessitatibus!",
  },
  {
    avatar: AVTR4,
    name: "test",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum tenetur et nam culpa quidem, unde, cum incidunt magni, tempora neque rem temporibus quis aliquid quam explicabo accusantium minus deleniti commodi quae error. Odio totam magnam nihil? Repellat repellendus, esse ipsum nesciunt labore, voluptas qui impedit sapiente eligendi ab amet necessitatibus!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper container testimonials__container"
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </section>
  );
};

export default Testimonials;
