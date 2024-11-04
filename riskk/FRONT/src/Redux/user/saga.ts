import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddUser as AddUserApi, UpdateUser as UpdateUserApi, GetUserById as GetUserByIdApi, GetAllUsers as GetAllUsersApi, DeleteUser as DeleteUserApi } from '../../helpers/';
import { userApiResponseSuccess, userApiResponseError } from './actions';
import { UserActionTypes } from './constants';
import { User } from './type';

type UserData = {
  payload: User;
  type: string;
};

const api = new APICore();

function* AddUser({ payload }: UserData): SagaIterator {
  console.log('payload saga AddUser');
  console.log(payload);
  try {
    const response = yield call(AddUserApi, payload);
    const data = response.data;
    console.log(response);

    if (data === true) {
      yield put(userApiResponseSuccess(UserActionTypes.CREATE_USER, data));
      yield call(GetAllUsers);
    }
  } catch (error: any) {
    yield put(userApiResponseError(UserActionTypes.CREATE_USER, error));
  }
}

function* GetUserById({ payload: { userId } }: UserData): SagaIterator {
  try {
    const response = yield call(GetUserByIdApi, { userId });
    const user = response.data;
    yield put(userApiResponseSuccess(UserActionTypes.Get_BY_ID_USER, user));
  } catch (error: any) {
    yield put(userApiResponseError(UserActionTypes.Get_BY_ID_USER, error));
  }
}

function* GetAllUsers(): SagaIterator {
  try {
    console.log('payload saga AddUser');
    const response = yield call(GetAllUsersApi);
    const users = response.data;
    yield put(userApiResponseSuccess(UserActionTypes.Get_ALL_USER, users));
  } catch (error: any) {
    yield put(userApiResponseError(UserActionTypes.Get_ALL_USER, error));
  }
}

function* DeleteUser({ payload }: any): SagaIterator {
  try {
    const response = yield call(DeleteUserApi, payload.id);
    yield put(userApiResponseSuccess(UserActionTypes.DELETE_USER, response.data));
    yield call(GetAllUsers);
  } catch (error: any) {
    yield put(userApiResponseError(UserActionTypes.DELETE_USER, error));
  }
}
function* UpdateUser({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateUserApi, payload.user);
    const user = response.data;
    yield put(userApiResponseSuccess(UserActionTypes.UPDATE_USER, user));
    yield call(GetAllUsers);
  } catch (error: any) {
    yield put(userApiResponseError(UserActionTypes.UPDATE_USER, error));
  }
}

export function* watchAddUser() {
  yield takeEvery(UserActionTypes.CREATE_USER, AddUser);
}

export function* watchGetUserById() {
  yield takeEvery(UserActionTypes.Get_BY_ID_USER, GetUserById);
}

export function* watchGetAllUsers() {
  yield takeEvery(UserActionTypes.Get_ALL_USER, GetAllUsers);
}

export function* watchDeleteUser() {
  yield takeEvery(UserActionTypes.DELETE_USER, DeleteUser);
}

export function* watchUpdateUser() {
  yield takeEvery(UserActionTypes.UPDATE_USER, UpdateUser);
}

function* UserSaga() {
  yield all([fork(watchAddUser), fork(watchUpdateUser), fork(watchGetUserById), fork(watchGetAllUsers), fork(watchDeleteUser)]);
}

export default UserSaga;
