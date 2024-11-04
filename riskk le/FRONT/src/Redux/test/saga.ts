import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddTest as AddTestApi, 
  UpdateTest as UpdateTestApi, 
  GetTestById as GetTestByIdApi, 
  GetAllTests as GetAllTestsApi, 
  DeleteTest as DeleteTestApi } from '../../helpers/';
import { TestApiResponseSuccess, TestApiResponseError } from './actions';
import { TestActionTypes } from './constants';
import { Test } from './type';

type TestData = {
  payload: Test;
  type: string;
};

const api = new APICore();

function* AddTest({ payload }: TestData): SagaIterator {
  // console.log('payload saga AddTest');
  // console.log(payload);
  // try {
  //   const response = yield call(AddTestApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(TestApiResponseSuccess(TestActionTypes.CREATE_TEST, data));
  //     yield call(GetAllTests);
  //   }
  // } catch (error: any) {
  //   yield put(TestApiResponseError(TestActionTypes.CREATE_TEST, error));
  // }
}

function* GetTestById({ payload: { testId } }: TestData): SagaIterator {
  try {
    const response = yield call(GetTestByIdApi, { testId });
    const Test = response.data;
    yield put(TestApiResponseSuccess(TestActionTypes.Get_BY_ID_TEST, Test));
  } catch (error: any) {
    yield put(TestApiResponseError(TestActionTypes.Get_BY_ID_TEST, error));
  }
}

function* GetAllTests(): SagaIterator {
  try {
    console.log('payload saga AddTest');
    const response = yield call(GetAllTestsApi);
    const Tests = response.data;
    yield put(TestApiResponseSuccess(TestActionTypes.Get_ALL_TEST, Tests));
  } catch (error: any) {
    yield put(TestApiResponseError(TestActionTypes.Get_ALL_TEST, error));
  }
}

function* DeleteTest({ payload: { testId } }: TestData): SagaIterator {
  // try {
  //     const response = yield call(DeleteTestApi, { testId });
  //     yield put(TestApiResponseSuccess(TestActionTypes.DELETE_TEST, response.data));
  // } catch (error: any) {
  //     yield put(TestApiResponseError(TestActionTypes.DELETE_TEST, error));
  // }
}
function* UpdateTest({ payload: { testId,  } }: TestData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateTestApi, { testId, FirstName, LastName, Cin, Number, Email, Pwd });
  //         const Test = response.data;
  //         yield put(TestApiResponseSuccess(TestActionTypes.UPDATE_TEST, Test));
  //     } catch (error: any) {
  //         yield put(TestApiResponseError(TestActionTypes.UPDATE_TEST, error));
  //     }
}

export function* watchAddTest() {
  yield takeEvery(TestActionTypes.CREATE_TEST, AddTest);
}

export function* watchGetTestById() {
  yield takeEvery(TestActionTypes.Get_BY_ID_TEST, GetTestById);
}

export function* watchGetAllTests() {
  yield takeEvery(TestActionTypes.Get_ALL_TEST, GetAllTests);
}

export function* watchDeleteTest() {
  yield takeEvery(TestActionTypes.DELETE_TEST, DeleteTest);
}

export function* watchUpdateTest() {
  yield takeEvery(TestActionTypes.UPDATE_TEST, UpdateTest);
}

function* TestSaga() {
  yield all([fork(watchAddTest), fork(watchUpdateTest), fork(watchGetTestById), fork(watchGetAllTests), fork(watchDeleteTest)]);
}

export default TestSaga;
