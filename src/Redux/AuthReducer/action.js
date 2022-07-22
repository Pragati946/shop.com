import * as types from './actionType'
import axios from 'axios'
const register =(payload)=> (dispatch)=>{
    dispatch({type:types.REGISTER_REQ})
    return axios 
    .post('https://masai-api-mocker.herokuapp.com/auth/register',payload)
    .then((r)=>{dispatch({type:types.REGISTER_SUCCESS,payload:r.data})

    return types.REGISTER_SUCCESS
})
    .catch((e)=>{dispatch({type:types.REGISTER_FAIL,payload:e})

    return types.REGISTER_FAIL
})

}

const login =(params) =>(dispatch)=>{

    dispatch({type:types.LOGIN_REQ})
    return axios
    .post('https://masai-api-mocker.herokuapp.com/auth/login',params)
    .then((r)=>{
        dispatch({type:types.LOGIN_SUCCESS,payload:r.data.token});
        
        return types.LOGIN_SUCCESS;
    })
    .catch((e)=>{
        dispatch({type:types.LOGIN_FAIL,payload:e})
        return types.LOGIN_FAIL
    })

}

export {register,login}
