import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { feedbackApiResponseError, feedbackApiResponseSuccess } from './actions';
import { FeedbackActionTypes } from './constants';
import {
  GetFeedbackById as GetFeedbackByIdApi,
  AddFeedback as AddFeedbackApi,
  UpdateFeedback as UpdateFeedbackApi,
  DeleteFeedback as DeleteFeedbackApi,
  GetFeedbacks as GetAllFeedbacksApi
} from '../../helpers/api/feedback';
import { Feedback } from './type';

interface FileData {
  payload: Feedback;
  type: string;
}


function* AddFeedback({ payload }: any): SagaIterator {
  try {
    const response = yield call(AddFeedbackApi, payload);
    const data = response.data;

    if (data === true) {
      yield put(feedbackApiResponseSuccess(FeedbackActionTypes.CREATE_FEEDBACK, data));
      yield call(GetAllFeedbacks);
    }
  } catch (error: any) {
    yield put(feedbackApiResponseError(FeedbackActionTypes.CREATE_FEEDBACK, error));
  }
}

function* GetFeedbackById({ payload: { feedbackId } }: FileData): SagaIterator {
  try {
    const response = yield call(GetFeedbackByIdApi, feedbackId);
    const feedback = response.data;
    yield put(feedbackApiResponseSuccess(FeedbackActionTypes.Get_BY_ID_FEEDBACK, feedback));
  } catch (error: any) {
    yield put(feedbackApiResponseError(FeedbackActionTypes.Get_BY_ID_FEEDBACK, error));
  }
}

function* GetAllFeedbacks(): SagaIterator {
  try {
    const response = yield call(GetAllFeedbacksApi);
    const feedbacks = response.data;
    console.log(response)
    yield put(feedbackApiResponseSuccess(FeedbackActionTypes.Get_ALL_FEEDBACKS, feedbacks));
  } catch (error: any) {
    yield put(feedbackApiResponseError(FeedbackActionTypes.Get_ALL_FEEDBACKS, error));
  }
}



function* UpdateFeedback({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateFeedbackApi, payload);
    const feedback = response.data;
    yield put(feedbackApiResponseSuccess(FeedbackActionTypes.UPDATE_FEEDBACK, feedback));
    yield call(GetAllFeedbacks);
  } catch (error: any) {
    yield put(feedbackApiResponseError(FeedbackActionTypes.UPDATE_FEEDBACK, error));
  }
}

function* DeleteFeedback({ payload: { feedbackId } }: FileData): SagaIterator{
  try{
    const response=yield call(DeleteFeedbackApi,feedbackId)
    const feedback=response.data
    yield put(feedbackApiResponseSuccess(FeedbackActionTypes.DELETE_FEEDBACK, feedback));
    yield call(GetAllFeedbacks);

  }catch(error:any){
    yield put(feedbackApiResponseError(FeedbackActionTypes.DELETE_FEEDBACK, error));
  }
}



export function* watchAddFeedback() {
  yield takeEvery(FeedbackActionTypes.CREATE_FEEDBACK, AddFeedback);
}

export function* watchUpdateFeedback() {
  yield takeEvery(FeedbackActionTypes.UPDATE_FEEDBACK, UpdateFeedback);
}


export function* watchGetAllFeedbacks() {
  yield takeEvery(FeedbackActionTypes.Get_ALL_FEEDBACKS, GetAllFeedbacks);
}

export function* watchGetFeedbackById() {
  yield takeEvery(FeedbackActionTypes.Get_BY_ID_FEEDBACK, GetFeedbackById);
}

export function* watchDeleteFeedback(){
  yield takeEvery(FeedbackActionTypes.DELETE_FEEDBACK,DeleteFeedback)
}

function* FeedbackSaga() {
  yield all([
    fork(watchAddFeedback),
    fork(watchUpdateFeedback),
    fork(watchGetAllFeedbacks),
    fork(watchGetFeedbackById),
    fork(watchDeleteFeedback)
  ]);
}

export default FeedbackSaga;
