import {combineReducers} from 'redux'
import {userReducer} from './userReducer'
import { Profile } from './userReducer'
// import { UpdateUserReducer } from "./userReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from "./categoryReducer";
const rootReducer = combineReducers({
  auth: userReducer,
  allProducts: productsReducer,
  bag: cartReducer,
  getCategory: categoryReducer,
  // bag: bagReducer,
});

export default rootReducer