import {createStore, combineReducers} from "redux";
import list from "./reducer/list";
import detail from "./reducer/detail";
export default createStore(combineReducers({
    list,
    detail
}));