const initialState = {
    user: {
        name: '',
        email: '',
        role: '',
        password : ''
    },
    // data: [],
    isLoading: false
}

// export const Profile = (state = initialState, {type, payload}) =>{
//    switch(type) {
//     case "GET_USER_SUCCESS": 
//     return {
//       ...state,
//       data: payload
//     }
//    }
// }

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      return {
        token: null,
        name: null,
        email: null,
        id: null,
      };
    default:
      return state;
  }
};
