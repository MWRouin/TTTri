import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';


import {
    AddAnswer as AddAnswerApi,
    UpdateAnswer as UpdateAnswerApi,
    GetAnswer as GetAnswerByIdApi,
    GetAnswers as GetAllAnswersApi,
    DeleteAnswer as DeleteAnswerApi,
} from '../../helpers/';

// actions
import { answerApiResponseSuccess, answerApiResponseError } from './actions';

// constants
import { AnswerActionTypes } from './constants';
import { Answer } from './type';


type AnswerData = {
    payload: Answer;
    type: string;
  };
  

const api = new APICore();







function* AddAnswer({ payload }: AnswerData): SagaIterator {
    // try {
    //     const response = yield call(AddAnswerApi, payload);
    //     const data = response.data;
    //     console.log(response);
    
    //     if (data === true) {
    //       yield put(answerApiResponseError(AnswerActionTypes.CREATE_ANSWER, data));
    //       yield call(GetAllAnswers);
    //     }
    //   } catch (error: any) {
    //     yield put(answerApiResponseError(AnswerActionTypes.CREATE_ANSWER, error));
    //   }
    // }
}

function* GetAnswerById({ payload: { AnswerId } }: AnswerData): SagaIterator {
    try {
        const response = yield call(GetAnswerByIdApi, { AnswerId });
        const answer = response.data;
        yield put(answerApiResponseSuccess(AnswerActionTypes.Get_ALL_ANSWERS, answer));
    } catch (error: any) {
        yield put(answerApiResponseError(AnswerActionTypes.Get_BY_ID_ANSWER, error));
    }
}

function* GetAllAnswers(): SagaIterator {
    try {
        const response = yield call(GetAllAnswersApi);
        const answers = response.data;
        yield put(answerApiResponseSuccess(AnswerActionTypes.Get_ALL_ANSWERS, answers));
    } catch (error: any) {
        yield put(answerApiResponseError(AnswerActionTypes.Get_ALL_ANSWERS, error));
    }
}

function* DeleteAnswer({ payload: {AnswerId } }: AnswerData): SagaIterator {
    // try {
    //     const response = yield call(DeleteAnswerApi, { AnswerId });
    //     yield put(answerApiResponseSuccess(AnswerActionTypes.DELETE_ANSWER, response.data));
    // } catch (error: any) {
    //     yield put(answerApiResponseError(AnswerActionTypes.DELETE_ANSWER, error));
    // }
}

function* UpdateAnswer({ payload: {AnswerId, AnswerText, IsCorrect, QuestionId } }: AnswerData): SagaIterator {
//     try {
//         const response = yield call(UpdateAnswerApi, {  AnswerId, AnswerText, IsCorrect, QuestionId });
//         const answer = response.data;
//         yield put(answerApiResponseSuccess(AnswerActionTypes.UPDATE_ANSWER, answer));
//     } catch (error: any) {
//         yield put(answerApiResponseError(AnswerActionTypes.UPDATE_ANSWER, error));
//     }
}



export function* watchAddAnswer() {
    yield takeEvery(AnswerActionTypes.CREATE_ANSWER, AddAnswer);
}

export function* watchGetAnswerById() {
    yield takeEvery(AnswerActionTypes.Get_BY_ID_ANSWER, GetAnswerById);
}


export function* watchGetAllAnswers() {
    yield takeEvery(AnswerActionTypes.Get_ALL_ANSWERS, GetAllAnswers);
}

export function* watchDeleteAnswer() {
    yield takeEvery(AnswerActionTypes.DELETE_ANSWER, DeleteAnswer);
}

export function* watchUpdateAnswer() {
    yield takeEvery(AnswerActionTypes.UPDATE_ANSWER, UpdateAnswer);
}


function*AnswerSaga() {
    yield all([
        fork(watchAddAnswer),
        fork(watchUpdateAnswer),
        fork(watchGetAnswerById),
        fork(watchGetAllAnswers),
        fork(watchDeleteAnswer),
    ]);
}

export default AnswerSaga;
