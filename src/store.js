import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { promisedMiddleware, localStorageMiddleware } from "./middleware";
import createRootReducer from './reducer'

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory} from 'history';

export const history = createBrowserHistory()

const myRouterMiddleware = routerMiddleware(history)

const getMiddleware = () => {
    if (process.env.NODE_ENV === 'production') {
        return applyMiddleware(myRouterMiddleware, promisedMiddleware, localStorageMiddleware)
    } else {
        return applyMiddleware(myRouterMiddleware, promisedMiddleware, localStorageMiddleware, createLogger())
    }
}

export const store = createStore(createRootReducer(history), composeWithDevTools(getMiddleware()))