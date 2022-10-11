// import { logoutAction } from "containers/Authorize/actions";
// import _ from "lodash"; // import { push } from 'connected-react-router';

// export const expireTokenMiddleware = (store) => (next) => (action) => {
//   if (_.endsWith(action.type, "FAILED") && !_.startsWith(action.type, "app/Authorize")) {
//     if (
//       +_.get(action, "error.status_code") === 401 ||
//       +_.get(action, "error.response.status") === 401 ||
//       +_.get(action, "error.status") === 401 ||
//       +_.get(action, "payload.status_code") === 401 ||
//       +_.get(action, "payload.status") === 401 ||
//       _.get(action, "error.code") === "uranus.error.auth.missing_phone" ||
//       _.get(action, "payload.code") === "uranus.error.auth.missing_phone"
//     ) {
//       // const state = store.getState();
//       // const redirectTo = _.get(state, 'router.location.pathname');
//       store.dispatch(logoutAction());
//     }
//   }

//   const result = next(action);
//   return result;
// };
