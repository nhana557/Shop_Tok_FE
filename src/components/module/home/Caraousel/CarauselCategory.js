import React from "react";
import "../StyleHome.css";
import Tshirt from "../../../../assets/image/slide1.svg";
import elektronik from "../../../../assets/elektronik.png";
import jacket from "../../../../assets/image/jacket.svg";
import sepatu from "../../../../assets/image/sepatu.svg";
import short from "../../../../assets/image/short.svg";
import pants from "../../../../assets/image/pants.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function CustomNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className={`text-dark bg-secondary slick-next`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFFFFF",
        borderRadius: "100%",
        width: "55px",
        height: "55px",
        zIndex: "999",
        marginRight: "20px",
      }}
      onClick={onClick}
    />
  );
}

function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-dark bg-secondary`}
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#FFFFFF",
        borderRadius: "100%",
        width: "55px",
        height: "55px",
        zIndex: "999",
        marginLeft: "10px",
        // marginTop: "-50px",
      }}
      onClick={onClick}
    >
      <i class="bi bi-arrow-right-circle-fill"></i>
    </div>
  );
}

const CategoryCarausel = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    swipeToSlide: true,
    infinite: true,
    pauseOnHover: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container slide slide-response mt-4">
        <div className="row">
          <div className=" mt-5" id="custom-cards">
            <h2 className="title ">Category</h2>
            <p className="sub-category">What are you currently looking for</p>
          </div>
          <Slider {...settings}>
            <div className="w-100">
              <div className="mx-auto">
                <img src={Tshirt} className="slide-size" />
              </div>
            </div>
            <div className="w-100">
              <div className="mx-auto">
                <img src={short} className="slide-size" />
              </div>
            </div>
            <div className="w-100">
            <Link to={"/category/sepatu"}>
              <div className="mx-auto">
                <img src={sepatu} className="slide-size" />
              </div>
              </Link>
            </div>
            <div className="w-100">
              <div className="">
                <img src={pants} className="slide-size" />
              </div>
            </div>
            <div className="w-100 me-3">
              <Link to={"/category/elektronik"}>
                <div className="card-3 ">
                  <img
                    src={elektronik}
                    className="slide-size item3"
                    width={200}
                    height={220}
                  />
                  <p>elektronik</p>
                </div>
              </Link>
            </div>
            <div className="w-100">
              <div
                // key={index}
                className=""
                style={{}}
              >
                <div className="">
                  <img src={jacket} className="slide-size" />
                </div>
              </div>
            </div>
          </Slider>
          {/* <div className="">
              <SwiperSlide>
                <Link to={"/category/elektronik"}>
                  <div className="card-3 mt-5 me-4">
                    <img
                      src={elektronik}
                      className="slide-size item3"
                      width="90%"
                      height={220}
                    />
                    <p>elektronik</p>
                  </div>
                </Link>
              </SwiperSlide>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default CategoryCarausel;
