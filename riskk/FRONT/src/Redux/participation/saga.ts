import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { ParticipationApiResponseSuccess, ParticipationApiResponseError } from './actions';
import {ParticipationActionTypes } from './constants';
import {
    AddParticipation as AddParticipationApi,
    UpdateParticipation as UpdateParticipationApi,
    GetParticipations as GetAllParticipationsApi,
    DeleteParticipation as DeleteParticipationApi,
    GetParticipationById as GetParticipationByIdApi
} from '../../helpers/api/participation';
import { Participation } from './type';

type ParticipationData = {
    payload: Participation;
    type: string;
  };
  
  const api = new APICore();

  
  function* AddParticipation( {payload}: any): SagaIterator {
  
    try {
     const response = yield call(AddParticipationApi, payload);
     const data = response.data;
    console.log(response);
 
      if (data === true) {
        yield put(ParticipationApiResponseSuccess(ParticipationActionTypes.CREATE_PARTICIPATION, data));
       yield call(GetAllParticipations);
    }
    } catch (error: any) {
    yield put(ParticipationApiResponseError(ParticipationActionTypes.CREATE_PARTICIPATION, error));
 }
 }

/* function* GetParticipationByUserId( { payload: {UserId } }: ParticipationData): SagaIterator {
    try {
        const response = yield call(GetParticipationByUserIdApi,UserId);
        const Participation = response.data;
        yield put(ParticipationApiResponseSuccess(ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION, Participation));
    } catch (error: any) {
        yield put(ParticipationApiResponseError(ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION, error));
    }
}
 */

function* GetParticipationByCourseId({ payload: { courseId } }: ParticipationData): SagaIterator {
    try {
        // Fetch all participations
        const response = yield call(GetParticipationByIdApi,courseId);

        // Filter participations by course ID
        const participationsByCourseId = response.data.filter((item: Participation) => item.courseId === courseId);
        console.log(participationsByCourseId)
        // Dispatch success action with the filtered participations
        yield put(ParticipationApiResponseSuccess(ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION, participationsByCourseId));
    } catch (error: any) {
        // Dispatch error action if the API call fails
        yield put(ParticipationApiResponseError(ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION, error));
    }
}


function* GetAllParticipations(): SagaIterator {
    try {
        const response = yield call(GetAllParticipationsApi);
        const Participations = response.data;
        yield put(ParticipationApiResponseSuccess(ParticipationActionTypes.Get_ALL_PARTICIPATIONS, Participations));
    } catch (error: any) {
        yield put(ParticipationApiResponseError(ParticipationActionTypes.Get_ALL_PARTICIPATIONS, error));
    }
}



function* UpdateParticipation({ payload }: ParticipationData): SagaIterator {
/*     try {
       const response = yield call(UpdateParticipationApi, {payload});
        const Participation = response.data;
    } catch (error: any) {
         yield put(ParticipationApiResponseError(ParticipationActionTypes.UPDATE_PARTICIPATION, error));
    } */
}



export function* watchAddParticipation() {
    yield takeEvery(ParticipationActionTypes.CREATE_PARTICIPATION, AddParticipation);
}

export function* watchGetParticipationByCourseId() {
    yield takeEvery(ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION,GetParticipationByCourseId);
}

export function* watchGetParticipationByUserId() {
    /* yield takeEvery(ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION,GetParticipationByUserId); */
}


export function* watchGetAllParticipations() {
    yield takeEvery(ParticipationActionTypes.Get_ALL_PARTICIPATIONS, GetAllParticipations);
}



export function* watchUpdateParticipation() {
    yield takeEvery(ParticipationActionTypes.UPDATE_PARTICIPATION, UpdateParticipation);
}


function* ParticipationSaga() {
    yield all([
        fork(watchAddParticipation),
        fork(watchUpdateParticipation),
        fork(watchGetParticipationByUserId),
        fork(watchGetParticipationByCourseId),
        fork(watchGetAllParticipations),
    ]);
}

export default ParticipationSaga;
