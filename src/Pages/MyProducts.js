import React,{Fragment, useEffect,useState} from 'react'
import Navbar from '../components/module/home/navbar/Navbar'
import Card from "../components/base/Card";
import { useSearchParams } from 'react-router-dom';
import axios from "axios"
import "./style.css"
import "../Pages/Page404/page.css"
import { Dropdown } from "react-bootstrap";

const MyProducts = () => {
  const [counter, setCounter] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("");
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState([])
  console.log(pagination)
  const handleSort = (e) => {
    setSort(e.currentTarget.value);
  };
 
  function getData() {
    const searching = searchParams.get("search") === null ? "" : searchParams.get("search");
    axios
    .get(
      `${process.env.REACT_APP_API_BACKEND}products?search=${searching}&sort=${sort}&page=${counter}`
    )
    .then((response) => {
        setProducts(response.data.data);
        setPagination(response.data.pagination);
        console.log(response.data.pagination);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const next = () => {
    setCounter(
      counter === pagination.totalPage ? pagination.totalPage : counter + 1
      );
      getData()
      console.log(counter);
    };
    
  const previous = () => {
      setCounter(counter <= 1 ? 1 : counter - 1);
      getData()
  };
    
 
  useEffect(() => {
    getData()
    searchParams.get("search")
  }, [searchParams ])
 

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <div className="row">
          <div>
            <p className="mt-4">My Products</p>
          </div>
          
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 ">
            <Dropdown >
              <Dropdown.Toggle variant="primary" id="dropdown-basic" >
                Sorting Name
              </Dropdown.Toggle>
              <Dropdown.Menu >
                <Dropdown.Item>
                <button className="btn btn-info me-3" value="ASC" onClick={handleSort}>
                  Name A-Z
                </button>
                </Dropdown.Item>
                <Dropdown.Item>
                  <button className="btn btn-success" value="DESC" onClick={handleSort}>
                    Name Z-A
                  </button>  
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
           </div>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3">
            {products.length > 0 ? (
              products.map((item) => (
                <div className="col" key={item.id}>   
                  <Card
                    src={item.photo[0]}
                    to={`/detail/${item.id}`}
                    titleName={item.name}
                    price={item.price}
                    merk={item.merk}
                  />
                </div>
              ))
            ) : (
              <div className="text-center m-auto  beban ">
                <h2>Sorry... Data yang anda cari tidak ada</h2>
              </div>
            )}
          </div>
          <div className=" mt-5 d-flex justify-content-evenly">
            <button className="btn btn-primary me-5 w-25" onClick={previous}>
            previous
            </button>
            <p className="mx-auto ">
              {pagination.currentPage}/{pagination.totalPage}
            </p>
            <button className="btn btn-primary w-25" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </div>
      <div>
      <div className='container-custom'></div>
      <footer className="py-3 bg-dark mt-5 footer-dekstop footer">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Taryana 2022
          </p>
        </div>
      </footer>
    </div>
    </Fragment>
  );
}

export default MyProducts