import React from 'react'
import "../StyleHome.css"
import Tshirt from "../../../../assets/image/slide1.svg";
import jacket from "../../../../assets/image/jacket.svg";
import sepatu from "../../../../assets/image/sepatu.svg";
import short from "../../../../assets/image/short.svg";
import pants from "../../../../assets/image/pants.svg";
// import sepatu from "../../../../assets/image/sepatu.svg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const CategoryCarausel = () => {
  return (
    <div>
      <div className="container slide slide-response mt-4">
        <div className="row">
        <div className=" mt-5" id="custom-cards">
          <h2 className="title ">Category</h2>
          <p className="sub-category">What are you currently looking for</p>
        </div>
          <OwlCarousel className="owl-theme" loop margin={10} autoWidth={false} items={3} autoplayTimeout={2000} autoplay={true}>
          <div class="item mt-5">
            <img src={Tshirt} className="slide-size"/>
          </div>
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
          {/* <div class="item mt-5">
            <img src={hiclipart7} className="slide-size"/>
          </div>
          <div class="item mt-5">
            <img src={hiclipart7} className="slide-size"/>
          </div> */}
          
        </OwlCarousel>
        </div>
      </div>
    </div>
  );
}

export default CategoryCarausel