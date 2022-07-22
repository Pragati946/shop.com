import React from 'react';
import {useSelector} from 'react-redux'
import {Navigate,useLocation} from 'react-router-dom'

const ReqAuth = ({children}) => {

    let location = useLocation();
    let isAuth = useSelector((state)=>state.AuthReducer.isAuth)
    if(!isAuth){
        return <Navigate to='/login' state={{form:location}} />
    }

    

    return children
}



export default ReqAuth;