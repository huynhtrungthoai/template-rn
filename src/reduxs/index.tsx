import { combineReducers } from "redux";

// Combine index
// This is places where we using for define state's name.
const reducers = combineReducers({
  app: require("./AppRedux").reducer,
});

export default reducers;
