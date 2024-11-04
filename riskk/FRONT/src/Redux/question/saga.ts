import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddQuestion as AddQuestionApi, 
  UpdateQuestion as UpdateQuestionApi, 
  GetQuestionById as GetQuestionByIdApi, 
  GetQuestions as GetAllQuestionsApi, 
  DeleteQuestion as DeleteQuestionApi } from '../../helpers/';
import { Question } from './type';
import { QuestionActionTypes } from './constants';
import { QuestionApiResponseError, QuestionApiResponseSuccess } from './actions';


type QuestionData = {
  payload: Question;
  type: string;
};

const api = new APICore();

function* AddQuestion({ payload }: QuestionData): SagaIterator {
  // console.log('payload saga AddQuestion');
  // console.log(payload);
  // try {
  //   const response = yield call(AddQuestionApi, payload);
  //   const data = response.data;
  //   console.log(response);

  //   if (data === true) {
  //     yield put(QuestionApiResponseSuccess(QuestionActionTypes.CREATE_QUESTION, data));
  //     yield call(GetAllQuestions);
  //   }
  // } catch (error: any) {
  //   yield put(QuestionApiResponseError(QuestionActionTypes.CREATE_QUESTION, error));
  // }
}

function* GetQuestionById({ payload: { questionId } }: QuestionData): SagaIterator {
  try {
    const response = yield call(GetQuestionByIdApi, { questionId });
    const Question = response.data;
    yield put(QuestionApiResponseSuccess(QuestionActionTypes.Get_BY_ID_QUESTION, Question));
  } catch (error: any) {
    yield put(QuestionApiResponseError(QuestionActionTypes.Get_BY_ID_QUESTION, error));
  }
}

function* GetAllQuestions(): SagaIterator {
  try {
    console.log('payload saga AddQuestion');
    const response = yield call(GetAllQuestionsApi);
    const Questions = response.data;
    yield put(QuestionApiResponseSuccess(QuestionActionTypes.Get_ALL_QUESTION, Questions));
  } catch (error: any) {
    yield put(QuestionApiResponseError(QuestionActionTypes.Get_ALL_QUESTION, error));
  }
}

function* DeleteQuestion({ payload: { questionId ,labelle , description , testId} }: QuestionData): SagaIterator {
  // try {
  //     const response = yield call(DeleteQuestionApi, { questionId ,labelle , description , testId });
  //     yield put(QuestionApiResponseSuccess(QuestionActionTypes.DELETE_QUESTION, response.data));
  // } catch (error: any) {
  //     yield put(QuestionApiResponseError(QuestionActionTypes.DELETE_QUESTION, error));
  // }
}
function* UpdateQuestion({ payload: { questionId, } }: QuestionData): SagaIterator {
  //     try {
  //         const response = yield call(UpdateQuestionApi, { questionId, FirstName, LastName, Cin, Number, Email, Pwd });
  //         const Question = response.data;
  //         yield put(QuestionApiResponseSuccess(QuestionActionTypes.UPDATE_QUESTION, Question));
  //     } catch (error: any) {
  //         yield put(QuestionApiResponseError(QuestionActionTypes.UPDATE_QUESTION, error));
  //     }
}

export function* watchAddQuestion() {
  yield takeEvery(QuestionActionTypes.CREATE_QUESTION, AddQuestion);
}

export function* watchGetQuestionById() {
  yield takeEvery(QuestionActionTypes.Get_BY_ID_QUESTION, GetQuestionById);
}

export function* watchGetAllQuestions() {
  yield takeEvery(QuestionActionTypes.Get_ALL_QUESTION, GetAllQuestions);
}

export function* watchDeleteQuestion() {
  yield takeEvery(QuestionActionTypes.DELETE_QUESTION, DeleteQuestion);
}

export function* watchUpdateQuestion() {
  yield takeEvery(QuestionActionTypes.UPDATE_QUESTION, UpdateQuestion);
}

function* QuestionSaga() {
  yield all([fork(watchAddQuestion), fork(watchUpdateQuestion), fork(watchGetQuestionById), fork(watchGetAllQuestions), fork(watchDeleteQuestion)]);
}

export default QuestionSaga;
