import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
import "../StyleHome.css";
import NavbarBase from "../../../base/NavbarBase/Index"
import logo from "../../../../assets/image/Logo.svg";
import filter from "../../../../assets/image/filter.png"
import carts from "../../../../assets/image/search.svg"
import home from "../../../../assets/image/home.svg"
import Profil from "../../../../assets/image/profil.png";
import bell from "../../../../assets/image/bell (1) 1.png";
import mail from "../../../../assets/image/mail (3) 1.png";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import axios from "axios"
import { signOut } from "../../../../configs/redux/actions/userAction";
import { getCart } from '../../../../configs/redux/actions/cartAction';


const Navbar = () => {
// const { user } = useSelector((state) => state.auth);
const dispatch = useDispatch();
const { cart } = useSelector((state) => state.bag)
const [user, setUser] = useState([])
console.log(user)
  const handleSignOut = () => {
   localStorage.removeItem("id");
  dispatch(signOut());
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
      <NavbarBase
        src={logo}
        srcFilter={filter}
        srcCart={cart}
      ></NavbarBase>
      <nav className="footer-nav bg-ligth card text-center fixed-bottom ">
        {/* {user?.id ? ( */}
          <div className="content mt-2 mb-2">
          <Link to="/home">
            <button
              className="btn btn-light  me-2"
            >
                <img src={home} className='icon-cart m-auto '/>
                
            </button>
          </Link>

            <Link to="/Checkout">
              <button className="btn btn-light me-2">
                <img src={carts} alt="" className="icon-cart m-auto" />
                <span className="position-absolute top-25 mt-4 start-25 translate-middle badge rounded-pill bg-success">
                  {cart.length}</span>
              </button>
            </Link>
            <button className="btn btn-light me-2">
              <img src={bell} alt="" className="icon-cart m-auto" />
            </button>
            <button className="btn btn-light me-1">
              <img src={mail} alt="" className="icon-cart m-auto" />
            </button>
            <Dropdown className="d-inline mx-2">
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <img
                  src={user.image ? user.image :  Profil}
                  alt="profile"
                  width={50}
                  height={50}
                  className="rounded-circle"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Link to="/login">
                    <button
                      className="btn btn-light "
                      onClick={() => handleSignOut()}
                      type="button"
                    >
                      logout
                    </button>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/profil">
                    <button className="btn btn-light">Profile</button>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </nav>
    </div>
  );
};

export default Navbar