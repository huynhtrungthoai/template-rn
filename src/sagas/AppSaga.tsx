import AsyncStorage from "@react-native-community/async-storage";
import { call, put, takeLatest } from "redux-saga/effects";
import AppActions, { AppTypes } from "../reduxs/AppRedux";
import AppAPI from "../services/AppService";

//Api
const appApi = AppAPI.create();

function* checkAppVersion(api: any, action: any): any {
  const accessToken = yield AsyncStorage.getItem("accessToken");
  try {
    const response = yield call(api.checkAppVersion, action.contractID);
    yield put(AppActions.checkAppVersionSuccess(response.data?.data));
  } catch (err: any) {
    yield put(AppActions.checkAppVersionFailed(err.response));
  }
}

export default function* AppSaga() {
  yield takeLatest(AppTypes.CHECK_APP_VERSION, checkAppVersion, appApi);
}
