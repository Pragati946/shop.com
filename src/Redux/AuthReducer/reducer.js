import * as types from "./actionType";
import  {getLoaclData,sevlocalData} from '../../utils/localstorage'
const init = {
    isAuth: getLoaclData("token") ? true :false,
    token: getLoaclData("token") || "",
  isLoading: false,
  isError: false,

};

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQ:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false };
    case types.REGISTER_FAIL:
      return { ...state, isLoading: false, isError: true };

    //   login 

    case types.LOGIN_REQ:
    return { ...state, isLoading: true };
  case types.LOGIN_SUCCESS: 
  sevlocalData('token',payload)
    return { ...state, isLoading: false , isAuth:true,token:payload};
  case types.LOGIN_FAIL:
    return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }


//   login

};
export { reducer };
