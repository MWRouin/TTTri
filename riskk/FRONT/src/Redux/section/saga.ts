import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { sectionApiResponseError, sectionApiResponseSuccess } from './actions';
import { SectionActionTypes } from './constants';
import {
  GetSectionById as GetSectionByIdApi,
  AddSection as AddSectionApi,
  UpdateSection as UpdateSectionApi,
  DeleteSection as DeleteSectionApi,
  GetAllSections as GetAllSectionsApi
} from '../../helpers/api/section'
import { Section } from './type';

interface SectionData {
  payload: Section;
  type: string;
}

function* AddSection({ payload }: any): SagaIterator {
  try {
    const response = yield call(AddSectionApi, payload);
    const data = response.data;

    if (data === true) {
      yield put(sectionApiResponseSuccess(SectionActionTypes.CREATE_SECTION, data));
      yield call(GetAllSections);
    }
  } catch (error: any) {
    yield put(sectionApiResponseError(SectionActionTypes.CREATE_SECTION, error));
  }
}

function* GetSectionById({ payload: { sectionId } }: SectionData): SagaIterator {
  try {
    const response = yield call(GetSectionByIdApi, sectionId);
    const section = response.data;
    yield put(sectionApiResponseSuccess(SectionActionTypes.GET_BY_ID_SECTION, section));
  } catch (error: any) {
    yield put(sectionApiResponseError(SectionActionTypes.GET_BY_ID_SECTION, error));
  }
}

function* GetAllSections(): SagaIterator {
  try {
    const response = yield call(GetAllSectionsApi);
    const sections = response.data;
    console.log("saga");
    console.log(response);
    yield put(sectionApiResponseSuccess(SectionActionTypes.GET_ALL_SECTIONS, sections));
  } catch (error: any) {
    yield put(sectionApiResponseError(SectionActionTypes.GET_ALL_SECTIONS, error));
  }
}

function* UpdateSection({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateSectionApi, payload);
    const section = response.data;
    yield put(sectionApiResponseSuccess(SectionActionTypes.UPDATE_SECTION, section));
    yield call(GetAllSections);
  } catch (error: any) {
    yield put(sectionApiResponseError(SectionActionTypes.UPDATE_SECTION, error));
  }
}

export function* watchAddSection() {
  yield takeEvery(SectionActionTypes.CREATE_SECTION, AddSection);
}

export function* watchUpdateSection() {
  yield takeEvery(SectionActionTypes.UPDATE_SECTION, UpdateSection);
}

export function* watchGetAllSections() {
  yield takeEvery(SectionActionTypes.GET_ALL_SECTIONS, GetAllSections);
}

export function* watchGetSectionById() {
  yield takeEvery(SectionActionTypes.GET_BY_ID_SECTION, GetSectionById);
}

function* SectionSaga() {
  yield all([
    fork(watchAddSection),
    fork(watchUpdateSection),
    fork(watchGetAllSections),
    fork(watchGetSectionById),
  ]);
}

export default SectionSaga;
