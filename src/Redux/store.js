import React from "react";
import thunk from 'redux-thunk'
import {reducer as AppReducer} from './AppReducer/reducer'
import {reducer as AuthReducer} from './AuthReducer/reducer'

import {applyMiddleware, combineReducers, compose, legacy_createStore} from 'redux'
const composeEnhancers = 
typeof window ==="object" && window.
__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({

})
:compose;

const rootReducer = combineReducers({AppReducer,AuthReducer});

const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunk))
    )

    export default store

