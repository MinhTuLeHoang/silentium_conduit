import { combineReducers } from "redux";
import auth from "./reducers/auth";
import common from "./reducers/common";
import { connectRouter } from "connected-react-router";

export default (history) => combineReducers({
    auth,
    common,
    router: connectRouter(history)
})