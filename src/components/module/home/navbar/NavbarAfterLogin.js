import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "../StyleHome.css";
import logo from "../../../../assets/image/Logo.svg";
import filter from "../../../../assets/image/filter.png";
import Profil from "../../../../assets/image/profil.png";
import bell from "../../../../assets/image/bell (1) 1.png";
import mail from "../../../../assets/image/mail (3) 1.png";
import carts from "../../../../assets/image/search.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import ModalFilter from "../../../base/modal/ModalFilter";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../../configs/redux/actions/cartAction";

const NavbarAfterLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.bag)
  console.log(cart);
  const [user, setUser] = useState();
  console.log(user);
  const [search, setSearch] = useState([]);
  const handleSearch = () => {
    navigate({
      pathname: "/myProducts",
      search: "?search=" + search,
    });
  };
  useEffect(() => {
    dispatch(getCart());
    datas();
  }, []);
  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_API_BACKEND}auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response);
    setUser(response.data.data);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <div className="container">
          <Link to="/home">
            <img src={logo} alt="logo" className="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse ms-auto navbar-besic"
            id="navbarCollapse"
          >
            <ul className="nav mb-2 mb-md-0 me-auto ms-4 rounded ">
              <li >
                <div className="input-group rounded nav-search">
                  <input
                    type="text"
                    className="form-control search-input"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                    name="search"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <span
                    className="input-group-text search bg-light"
                    id="search-addon"
                  >
                    <i className="bi bi-search" onClick={handleSearch}></i>
                  </span>
                </div>
              </li>
              <li>
                <button className="btn filter1">
                  <ModalFilter />
                </button>
              </li>
            </ul>
            <form className="d-flex justify-content-center end ms-4 mt-3">
              <Link to="/checkout" className="pt-2">
                <img src={carts} alt="" className="icon-cart mb-2" />
                <span className="position-absolute translate-middle badge rounded-pill bg-success">
                  {cart.length}
                </span>
              </Link>
              <span className="pt-2">
              <img src={bell} alt="" className="icon-cart ms-2 mb-2 " />
              </span>
              <span className="pt-2">
              <img src={mail} alt="" className="icon-cart ms-2 me-4 mb-2" />

              </span>
              <Link to="/profil">
                <img
                  src={user?.image ? user.image : Profil}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-circle"
                />
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarAfterLogin;
