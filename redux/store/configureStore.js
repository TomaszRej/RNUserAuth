import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./index";
import thunkMiddleware from "redux-thunk";

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));