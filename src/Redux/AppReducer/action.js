import axios from 'axios'
import * as types from './actionTypes'

const getTodo =(payload)=> (dispatch)=>{
    dispatch({type:types.GET_TASKS_REQ})
    return axios 
    .get('http://localhost:8080/tasks',payload)
    .then((r)=>{dispatch({type:types.GET_TASKS_SUCESS,payload:r.data})

    // return types.REGISTER_SUCCESS
})
    .catch((e)=>{dispatch({type:types.GET_TASKS_FAIL,payload:e})

    // return types.REGISTER_FAIL
})

}

export {getTodo}