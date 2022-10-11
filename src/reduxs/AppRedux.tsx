import { createActions, createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  checkAppVersion: [""],
  checkAppVersionSuccess: ["response"],
  checkAppVersionFailed: ["error"],
});

export const AppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

interface AppStateTypes {
  merge: (params: object) => any;
  appVersion: any;

  isLoading: boolean;
  error: string;
}

export const INITIAL_STATE: AppStateTypes = Immutable({
  appVersion: {},
  isLoading: false,
  error: "",
});

/* ------------- Reducers ------------- */
const checkAppVersion = (state: AppStateTypes) => {
  return state.merge({
    isLoading: true,
    error: null,
  });
};
const checkAppVersionSuccess = (state: AppStateTypes, { response }: any) => {
  return state.merge({
    appVersion: response,
    isLoading: false,
    error: null,
  });
};
const checkAppVersionFailed = (state: AppStateTypes, { error }: any) =>
  state.merge({
    isLoading: false,
    error,
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CHECK_APP_VERSION]: checkAppVersion,
  [Types.CHECK_APP_VERSION_SUCCESS]: checkAppVersionSuccess,
  [Types.CHECK_APP_VERSION_FAILED]: checkAppVersionFailed,
});
