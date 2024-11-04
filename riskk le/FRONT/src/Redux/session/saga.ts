import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { sessionApiResponseError, sessionApiResponseSuccess } from './actions';
import { SessionActionTypes } from './constants';
import {
  GetSessionById as GetSessionByIdApi,
  AddSession as AddSessionApi,
  UpdateSession as UpdateSessionApi,
  DeleteSession as DeleteSessionApi,
  GetAllSessions as GetAllSessionsApi,
  UploadSessionFile as UploadSessionFileApi,
  
} from '../../helpers/api/session'
import { Session } from './type';

interface SessionData {
  payload: Session;
  type: string;
}

function* AddSession({ payload }: any): SagaIterator {
  try {
    const response = yield call(AddSessionApi, payload);
    const data = response.data;

    if (data === true) {
      yield put(sessionApiResponseSuccess(SessionActionTypes.CREATE_SESSION, data));
      yield call(GetAllSessions);
    }
  } catch (error: any) {
    yield put(sessionApiResponseError(SessionActionTypes.CREATE_SESSION, error));
  }
}

function* UploadSessionFile({ payload }: any): SagaIterator {
  const { url, formData } = payload;

  try {
    // Call the API function with the correct arguments
    const response = yield call(UploadSessionFileApi, url, formData);
    const data = response.data;

    // Dispatch success action
    yield put(sessionApiResponseSuccess(SessionActionTypes.UPLOAD_SESSION_FILE, data));
  } catch (error: any) {
    // Dispatch error action
    yield put(sessionApiResponseError(SessionActionTypes.UPLOAD_SESSION_FILE, error));
  }
}


function* GetSessionById({ payload: { SessionId } }: SessionData): SagaIterator {
  try {
    const response = yield call(GetSessionByIdApi, SessionId);
    const session = response.data;
    yield put(sessionApiResponseSuccess(SessionActionTypes.GET_BY_ID_SESSION, session));
  } catch (error: any) {
    yield put(sessionApiResponseError(SessionActionTypes.GET_BY_ID_SESSION, error));
  }
}

function* GetAllSessions(): SagaIterator {
  try {
    const response = yield call(GetAllSessionsApi);
    const sessions = response.data;
    console.log(response)
    yield put(sessionApiResponseSuccess(SessionActionTypes.GET_ALL_SESSIONS, sessions));
  } catch (error: any) {
    yield put(sessionApiResponseError(SessionActionTypes.GET_ALL_SESSIONS, error));
  }
}

function* UpdateSession({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateSessionApi, payload);
    const session = response.data;
    yield put(sessionApiResponseSuccess(SessionActionTypes.UPDATE_SESSION, session));
    yield call(GetAllSessions);
  } catch (error: any) {
    yield put(sessionApiResponseError(SessionActionTypes.UPDATE_SESSION, error));
  }
}

export function* watchAddSession() {
  yield takeEvery(SessionActionTypes.CREATE_SESSION, AddSession);
}

export function* watchUpdateSession() {
  yield takeEvery(SessionActionTypes.UPDATE_SESSION, UpdateSession);
}

export function* watchGetAllSessions() {
  yield takeEvery(SessionActionTypes.GET_ALL_SESSIONS, GetAllSessions);
}

export function* watchGetSessionById() {
  yield takeEvery(SessionActionTypes.GET_BY_ID_SESSION, GetSessionById);
}
export function* watchUploadSessionFile() {
  yield takeEvery(SessionActionTypes.UPLOAD_SESSION_FILE, UploadSessionFile);
}

function* SessionSaga() {
  yield all([
    fork(watchAddSession),
    fork(watchUpdateSession),
    fork(watchGetAllSessions),
    fork(watchGetSessionById),
    fork(watchUploadSessionFile),
  ]);
}

export default SessionSaga;
