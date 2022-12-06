const initialState = {
  cart: [],
  isLoading: false,
};

export const cartReducer = (state = initialState, action) => {
 
  switch (action.type) {
    case "GET_MYCART_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_MYCART_SUCCESS":
      return {
        ...state,
        cart: action.payload.cart,
        isLoading: false,
      };
    default:
      return state;
  }
};

