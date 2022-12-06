import { ActionTypes } from "../constants/action-types";
import axios from "axios";
import Swal from 'sweetalert2';


export const getProduct = () => async(dispacth) =>{
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_BACKEND}/products`)
    const product = res.data.data

    dispacth({type: ActionTypes.GET_PRODUCT_SUCCESS, payload: product})
  } catch (error) {
    console.log(error)
  }
} 
export  const createProducts = (data, Image, setShow) => async(dispatch) => {
    try{
        const id = localStorage.getItem('id')
        const formData = new FormData();
        formData.append('name',data.name)
        formData.append('stock',data.stock)
        formData.append('price',data.price)
        formData.append('condition',data.condition)
        formData.append('description',data.description)
        formData.append('id_category', data.category)
        formData.append('id_toko', id)
        console.log(Image)
        for(let res of Image){
            formData.append('image', res)
        }
        formData.append('merk', data.merk)
        const products = await axios.post(`${process.env.REACT_APP_API_BACKEND}products`, formData ,{
            headers: {
            "Content-Type": "multipart/form-data",
            },
        });
        console.log(products)
        Swal.fire({
            title: "Success", 
            text: "Your your Products created.", 
            icon: "success",
            confirmButtonText: 'Oke'
        }).then((res) => {
            if (res.isConfirmed) {
                window.location.reload()
            }
        })
            setShow(false)
        const result = products.data.data
        dispatch({ type: "CREATE_PRODUCT", payload: result })
    }catch(err) {
        console.log(err.message)
        Swal.fire({
            title: "Failed",
            text: "Failed Updated",  
            icon: "error"
        })
        // alert("create product failed")
        setShow(false)
    }
}

export const updateProducts = (data, id, Image, setShow) => async (dispacth) =>{
  try{
      const formData = new FormData();
      formData.append("name", data.name)
      formData.append("stock", data.stock)
      formData.append("price", data.price)
      formData.append("description", data.description)
      formData.append("image", Image)
      formData.append('merk', data.merk)
      const products = await axios.put(`${process.env.REACT_APP_API_BACKEND}products/${id}`, formData, {
          header:{
              "Content-Type": "multipart/form-data",
          }
      })
      console.log(products)
      Swal.fire({
          title:"Success",
          text: "Your Products Updated",
          icon: "success",
          isConfirmed: (window.location.reload()),
      })
      // window.location.reload()
      setShow(false)
      const result = products.data.data
      console.log(result)
      dispacth({ type: "UPDATE_PRODUCT", payload: result })

  }catch(err){
      console.log(err.message)
      alert("Update Failed")
      setShow(false)
  }
}
export const getDetail = (id) => async (dispatch) => {
  dispatch({ type: "GET_PRODUCT_PENDING" });
  const data = await axios
    .get(`${process.env.REACT_APP_API_BACKEND}products/${id}`)
    .catch((err) => {
      console.log(err);
    });
  console.log(data);

  dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
};

