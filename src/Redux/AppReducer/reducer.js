import * as types from "./actionTypes";
const init = {
    tasks: [],
  isAuth: false,
  isLoading: false,
  isError: false,
};

const reducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_TASKS_REQ:
      return { ...state, isLoading: true, isError: false };
    case types.GET_TASKS_SUCESS:
      return { ...state, isLoading: false, tasks: payload };
    case types.GET_TASKS_FAIL:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export { reducer };
