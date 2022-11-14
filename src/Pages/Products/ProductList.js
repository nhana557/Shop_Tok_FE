import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../components/module/profil/profil.css";
import axios from "axios";
import Profil from "../../components/module/profil/Profil";
import Footer from "../../components/module/home/footer/Footer";
import Navbar from "../../components/module/home/navbar/Navbar";
import Swal from "sweetalert2";
import ModalCreate from "../CreateProducts/CreateProducts";
import ModalEdit from "../EditProducts/EditProducts";
import "./style.css"


const ProductList = () => {
  const [products, getProducts] = useState([]);
  const navigate = useNavigate();
  console.log(navigate);
  const [show, setShow] = useState(false);
  async function fetchData() {
    try {
     const token = localStorage.getItem("token");
     const createdAt = await axios.get(
       `${process.env.REACT_APP_API_BACKEND}products`,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         },
       }
     );
     console.log(createdAt.data.data);
      getProducts(createdAt.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
    setShow(false)
    setShow(true)
  }, []);

  const deleteProducts = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Deleted Products??!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#32C33B",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`${process.env.REACT_APP_API_BACKEND}products/${id}`)
            .then(() => {
              Swal.fire({
                title : "Deleted!", 
                text : "Your products has been deleted.", 
                icon : "success",
                confirmButtonText: "Yes"
                }).then((res) =>{
                  if(res.isConfirmed){
                    window.location.reload()
                  }
                })
              setShow(false)
              })
            .catch(() => {
              Swal.fire("Deleted Failed!!", "failed deleted products", "error");
              setShow(false)
            });
      }
    });
  };

  return (
    <div className="my-bag">
      <Navbar />
      <div className="row">
        <Profil>
          <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 ms-5 small ">
            <li>
              <Link
                to="/productlist"
                className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-2"
              >
                myProduct
              </Link>
            </li>
            <li>
              <Link
                to="/selling"
                className="link-dark d-inline-flex text-decoration-none rounded ms-3 mt-3 text-secondary"
              >
                selling
              </Link>
            </li>
          </ul>
        </Profil>
        <div className="col-lg-7 my-products">
          <div className="card mt-3 card-custom mt-5">
            <div className="card-body">
              <h4 className="mb-3">My Products</h4>
             
              <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight text-success">all Products</div>
                <hr/>
              </div>
              <div className="input-group rounded nav-search w-100 mt-3">
                <input
                  type="search"
                  className="form-control search-input "
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  name="search"
                />
                <span
                  className="input-group-text search bg-light"
                  id="search-addon"
                >
                  <i className="bi bi-search"></i>
                </span>
              </div>
              <div className="d-flex justify-content-between">
              <ModalCreate/>
                <button
                onClick={() => navigate("/")}
                className="btn btn-secondary btn-home "
              >
                Back to home
              </button>
              </div>
              
              <div className="table-responsive mt-4">
                <table className="table">
                  <thead className="table-light">
                    <tr>
                      <th>No</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>stock</th>
                      <th>Deskripsion</th>
                      <th>Merk</th>
                      <th>Image</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.stock}</td>
                        <td>{item.description}</td>
                        <td>{item.merk}</td>
                        <td>
                          <img
                            src={item.photo[0]}
                            alt=""
                            width={50}
                            height={55}
                          />
                        </td>
                        <td>
                          <ModalEdit id={item.id} name={item.name} stock={item.stock} price={item.price} description={item.description}/>
                          <button
                            onClick={() => deleteProducts(item.id)}
                            className="btn btn-danger mt-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductList;
