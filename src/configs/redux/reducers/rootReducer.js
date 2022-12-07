import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import { Profile } from './userReducer'
// import { UpdateUserReducer } from "./userReducer";
import { productsReducer, productReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
const rootReducer = combineReducers({
  auth: userReducer,
  allProducts: productsReducer,
  products: productReducer,
  bag: cartReducer,
  getCategory: categoryReducer,
  // bag: bagReducer,
});

export default rootReducer