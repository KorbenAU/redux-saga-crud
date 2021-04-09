import {
  takeEvery,
  takeLatest,
  call,
  fork,
  put,
  take,
} from 'redux-saga/effects';
import * as userActions from '../actions/users';
import * as userAPI from '../../api/users';

function* watchFetchUsersRequest() {
  yield takeEvery(userActions.Types.GET_USERS_REQUEST, getUsers);
}

function* getUsers() {
  try {
    const result = yield call(userAPI.getUsers);
    yield put(userActions.getUsersSuccess(result.data.data));
  } catch (error) {}
}

function* watchCreateUserRequest() {
  yield takeLatest(userActions.Types.CREATE_USER_REQUEST, createUser);
}

function* createUser(action) {
  try {
    yield call(userAPI.createUser, action.payload);
    yield call(getUsers);
  } catch (error) {}
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(userActions.Types.DELETE_USER_REQUEST);
    yield call(deleteUser, action.payload);
  }
}

function* deleteUser(id) {
  try {
    yield call(userAPI.deleteUser, id);
    yield call(getUsers);
  } catch (error) {
    yield put(userActions.userError(error.message));
  }
}

const userSagas = [
  fork(watchFetchUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default userSagas;
