import { combineReducers } from "redux";
import homeReducer from "./home";
import loading from "./loading";

const rootReducer = combineReducers({
    homeReducer:homeReducer,
    loading:loading,
})


export default rootReducer;