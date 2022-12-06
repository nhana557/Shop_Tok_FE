import React, { useEffect} from 'react'
import "../StyleHome.css";
// import product from "../../../../assets/image/product.png";
import axios from "axios";
import Card from "../../../base/Card";
import { useDispatch, useSelector } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import { setProducts } from "../../../../configs/redux/actions/productsActions";

function Populer() {
   const {products} = useSelector((state) => state.allProducts);
   console.log(products)
   const dispatch = useDispatch();

   const fetchProducts = async () => {
     const response = await axios
       .get(`${process.env.REACT_APP_API_BACKEND}products`)
       .catch((err) => {
         console.log(err);
       });
    //  dispatch(setProducts(response.data.data));
   };
   useEffect(() => {
     fetchProducts();
   }, []);
  return (
    <div>
      <div className="container mb-5 pb-5">
        <div className="row">
          <div className="products">
            <h3 className="products mt-5 mb-2 title">Populer</h3>
            <p>Find clothes that are trending recently</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
                  src={item.photo[0]}
                  to={`/detail/${item.id}`}
                  titleName={item.name}
                  price={<FormatRupiah value={item.price} />}
                  merk={item.merk}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Populer