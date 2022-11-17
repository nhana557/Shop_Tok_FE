import React from 'react'
import "../StyleHome.css"
import Tshirt from "../../../../assets/image/slide1.svg";
import jacket from "../../../../assets/image/jacket.svg";
import sepatu from "../../../../assets/image/sepatu.svg";
import short from "../../../../assets/image/short.svg";
import pants from "../../../../assets/image/pants.svg";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const CategoryCarausel = () => {
  return (
    <div>
      <div className="container slide slide-response mt-4">
        <div className="row">
        <div className=" mt-5" id="custom-cards">
          <h2 className="title ">Category</h2>
          <p className="sub-category">What are you currently looking for</p>
        </div>
        <Swiper
          className="container ms-lg-5"
          modules={[Pagination, Navigation]}
          slidesPerView={5}
          spaceBetween={0}
          loop
          navigation={true}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            440: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          <div className=''>
            <SwiperSlide >
              <div className="item mt-5 ">
                <img src={Tshirt} className="slide-siz"/>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item mt-5">
                <img src={jacket} className="slide-size"/>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item mt-5">
                <img src={sepatu} className="slide-size"/>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item mt-5">
                <img src={short} className="slide-size"/>
              </div>
            </SwiperSlide>
            <SwiperSlide >
              <div className="item mt-5">
                <img src={pants} className="slide-size"/>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide >
              <div className="item mt-5">
                <img src={short} className="slide-size"/>
              </div>
            </SwiperSlide> */}
          </div>
        </Swiper>
          {/* <OwlCarousel className="owl-theme" loop margin={10} autoWidth={false} items={3} autoplayTimeout={2000} autoplay={true}>
          <div class="item mt-5">
            <img src={jacket} className="slide-size"/>
          </div>
          <div class="item mt-5">
            <img src={sepatu} className="slide-size"/>
          </div>
          <div class="item mt-5">
            <img src={short} className="slide-size"/>
          </div>
          <div class="item mt-5">
            <img src={pants} className="slide-size"/>
          </div>
        </OwlCarousel> */}
        </div>
      </div>
    </div>
  );
}

export default CategoryCarausel