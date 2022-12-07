import React, { useEffect, useState} from "react";
import "../StyleHome.css";
import Card from "../../../base/Card";
import { FormatRupiah } from "@arismun/format-rupiah";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../../configs/redux/actions/productsActions";


const Product = ({ title, subtitle }) => {
  const { products } = useSelector(state => state.allProducts)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct())
  }, []);
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="products">
            <h3 className="title">{title}</h3>
            <p>{subtitle}</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3 m-auto">
            {products.map((item) => (
              <div className="col" key={item.id}>
                <Card
                  onClick={() => { return window.location.reload()}}
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

export default Product