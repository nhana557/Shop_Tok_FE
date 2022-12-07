import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import './style.css'
import { useParams } from "react-router-dom";
import Card from "../../../base/Card";
import { FormatRupiah } from "@arismun/format-rupiah";
import { getCategory } from '../../../../configs/redux/actions/categoryAction'

const Category = () => {
  const { id } = useParams()
  const { category }  = useSelector((state) => state.getCategory);
  const dispatch = useDispatch();
  console.log(category)
   useEffect(() => {
    fetch()
      dispatch(getCategory(id));
   }, []);
  return (
      <div className="container mt-4">
        <div className="row">
          <div className="pt-4 fs-5">
            <p className="mt-5 mb-2 title"><a href="/home" className="fs-5 title">product</a> {"> Category > "} {id}</p>
          </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {category.map((item) => (
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
    // </div>
  );
}

export default Category