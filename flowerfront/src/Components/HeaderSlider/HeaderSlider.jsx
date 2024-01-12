import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./HeaderSlider.scss";

const HeaderSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div className="slider-img">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg"
            alt=""
          />
        </div>
        <div className="slider-text">
          <span>Floral</span>
          <h2>Excellent bouquets for you</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg"
            alt=""
          />
        </div>
        <div className="slider-text">
          <span>Fixed-Height Slider</span>
          <h2>Excellent bouquets for you</h2>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slider-img">
          <img
            src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg"
            alt=""
          />
        </div>
        <div className="slider-text">
          <span>Floral</span>
          <h2>Excellent bouquets for you</h2>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default HeaderSlider;
