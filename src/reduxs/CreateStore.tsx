import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import logger from "redux-logger";
import mySaga from "../sagas";
import reducer from "./index";

const composeEnhancers = compose;
// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleWares = __DEV__ ? [sagaMiddleware, logger] : [sagaMiddleware];

// Mount it on the Store
const store = createStore(reducer, composeEnhancers(applyMiddleware(...middleWares)));

// Then run the saga
sagaMiddleware.run(mySaga);
export default store;
