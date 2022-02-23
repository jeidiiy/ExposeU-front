// 액션 타입
import { call, put, takeLatest } from 'redux-saga/effects';
import { createAction, handleActions } from "redux-actions";
import { finishLoading, startLoading } from "./loading";
import { logout, login } from "../api/user";

const LOGIN_USER = 'user/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'user/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'user/LOGIN_USER_FAILURE';

const LOGOUT_USER = 'user/LOGOUT_USER';
const LOGOUT_USER_SUCCESS = 'user/LOGOUT_USER_SUCCESS';
const LOGOUT_USER_FAILURE = 'user/LOGOUT_USER_FAILURE';

export const loginUser = createAction(LOGIN_USER, requestInfo => requestInfo);
export const logoutUser = createAction(LOGOUT_USER, requestInfo => requestInfo);

function* logoutUserSaga() {
  yield put(startLoading(LOGOUT_USER));

  try {
    const user = yield call(logout);
    yield put({
      type: LOGOUT_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: LOGOUT_USER_FAILURE,
      payload: err,
      error: true,
    });
  }
  yield put(finishLoading(LOGOUT_USER));
}

function* loginUserSaga(action) {
  yield put(startLoading(LOGIN_USER));

  const { email, password } = action.payload;

  try {
    const user = yield call(login, email, password);
    yield put({
      type: LOGIN_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: LOGIN_USER_FAILURE,
      payload: err,
      error: true,
    });
  }
  yield put(finishLoading(LOGIN_USER));
}

export function* userSaga() {
  yield takeLatest(LOGIN_USER, loginUserSaga);
  yield takeLatest(LOGOUT_USER, logoutUserSaga);
}

const initialState = {
  user: null,
};

const user = handleActions({
  [LOGIN_USER_SUCCESS]: (state, action) => ({
    ...state,
    user: action.payload,
  }),
  [LOGOUT_USER_SUCCESS]: (state, action) => ({
    ...state,
    user: null,
  }),
}, initialState);

export default user;