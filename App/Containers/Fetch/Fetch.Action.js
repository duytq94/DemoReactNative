import { call, put } from "redux-saga/effects"
import { createActions } from "reduxsauce"

const { Types, Creators } = createActions({
  userRequest: ["username"],
  localRequest: ["word"],
  success: ["data"],
  failure: ["error"]
});

export const FetchType = Types;
export const FetchAction = Creators;
export const FetchFunction = {
  getDataLocal,
  getUser
};

function* getDataLocal(api, action) {
  const { word } = action;
  const response = yield call(api.getDataLocal, word);
  yield put(FetchAction.success(response));
}

function* getUser(api, action) {
  const { username } = action;
  const response = yield call(api.getUser, username);

  if (response.ok && response.status === 200) {
    yield put(FetchAction.success(JSON.stringify(response.data)));
  } else {
    yield put(FetchAction.failure(JSON.stringify(response.data)));
  }
}