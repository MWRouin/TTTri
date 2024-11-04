import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { FileApiResponseError, FileApiResponseSuccess } from './actions';
import { FileActionTypes } from './constants';

import { File } from './type';
import {
    UploadFile as UploadFileApi,
    GetFileByName as  GetFileByNameApi
} from "../../helpers/api/file"
interface FileData {
  payload: File;
  type: string;
}


function* UploadFile({ payload } :FileData ): SagaIterator {
  try {
      const response = yield call(UploadFileApi, payload);
      yield put(FileApiResponseSuccess(FileActionTypes.CREATE_FILE, response.data));

  } catch (error: any) {
      yield put(FileApiResponseError(FileActionTypes.CREATE_FILE, error.message));
      
  }
}




export function* watchAddFile() {
  yield takeEvery(FileActionTypes.CREATE_FILE,UploadFile);
}



function* FileSaga() {
  yield all([
    fork(watchAddFile),
    
  ]);
}

export default FileSaga;
