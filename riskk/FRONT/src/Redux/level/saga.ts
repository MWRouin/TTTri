import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddLevel as AddLevelApi, UpdateLevel as UpdateLevelApi, GetLevel as GetLevelByIdApi, GetLevels as GetAllLevelsApi, DeleteLevel as DeleteLevelApi } from '../../helpers/';
import { LevelApiResponseSuccess, LevelApiResponseError } from './actions';
import { LevelActionTypes } from './constants';
import { Level } from './type';

type LevelData = {
  payload: Level;
  type: string;
};

const api = new APICore();

function* AddLevel({ payload }: LevelData): SagaIterator {
  console.log('payload saga AddLevel');
  console.log(payload);
  try {
    const response = yield call(AddLevelApi, payload);
    const data = response.data;
    console.log(response);

    if (data === true) {
      yield put(LevelApiResponseSuccess(LevelActionTypes.CREATE_LEVEL, data));
      yield call(GetAllLevels);
    }
  } catch (error: any) {
    yield put(LevelApiResponseError(LevelActionTypes.CREATE_LEVEL, error));
  }
}

function* GetLevelById({ payload: { levelId } }: LevelData): SagaIterator {
  try {
    const response = yield call(GetLevelByIdApi, { levelId });
    const level = response.data;
    yield put(LevelApiResponseSuccess(LevelActionTypes.Get_BY_ID_LEVEL, level));
  } catch (error: any) {
    yield put(LevelApiResponseError(LevelActionTypes.Get_BY_ID_LEVEL, error));
  }
}

function* GetAllLevels(): SagaIterator {
  try {
    console.log('payload saga AddLevel');
    const response = yield call(GetAllLevelsApi);
    const levels = response.data;
    console.log( "response.data")
    console.log( response.data)
    yield put(LevelApiResponseSuccess(LevelActionTypes.Get_ALL_LEVEL, levels));
  } catch (error: any) {
    yield put(LevelApiResponseError(LevelActionTypes.Get_BY_ID_LEVEL, error));
  }
}

function* DeleteLevel({ payload }: any): SagaIterator {
  try {
    const response = yield call(DeleteLevelApi, payload.id);
    yield put(LevelApiResponseSuccess(LevelActionTypes.DELETE_LEVEL, response.data));
    yield call(GetAllLevels);
  } catch (error: any) {
    yield put(LevelApiResponseError(LevelActionTypes.DELETE_LEVEL, error));
  }
}
function* UpdateLevel({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateLevelApi, payload.level);
    const level = response.data;
    yield put(LevelApiResponseSuccess(LevelActionTypes.UPDATE_LEVEL, level));
    yield call(GetAllLevels);
  } catch (error: any) {
    yield put(LevelApiResponseError(LevelActionTypes.UPDATE_LEVEL, error));
  }
}

export function* watchAddLevel() {
  yield takeEvery(LevelActionTypes.CREATE_LEVEL, AddLevel);
}

export function* watchGetLevelById() {
  yield takeEvery(LevelActionTypes.Get_BY_ID_LEVEL, GetLevelById);
}

export function* watchGetAllLevels() {
  yield takeEvery(LevelActionTypes.Get_ALL_LEVEL, GetAllLevels);
}

export function* watchDeleteLevel() {
  yield takeEvery(LevelActionTypes.DELETE_LEVEL, DeleteLevel);
}

export function* watchUpdateLevel() {
  yield takeEvery(LevelActionTypes.UPDATE_LEVEL, UpdateLevel);
}

function* LevelSaga() {
  yield all([fork(watchAddLevel), fork(watchUpdateLevel), fork(watchGetLevelById), fork(watchGetAllLevels), fork(watchDeleteLevel)]);
}

export default LevelSaga;
