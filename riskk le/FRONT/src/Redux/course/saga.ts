import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { GetCourseById as GetCourseByIdApi, AddCourse as AddCourseApi, UpdateCourse as UpdateCourseApi, DeleteCourse as DeleteCourseApi, GetAllCourses as GetAllCoursesApi } from '../../helpers/api/course';
import { courseApiResponseError, courseApiResponseSuccess } from './actions';
import { CourseActionTypes } from './constants';
import { Course } from './type';

const api = new APICore();

interface CourseData {
  payload: Course;
  type: string;
}

function* AddCourse({ payload }: any): SagaIterator {
  try {
    const response = yield call(AddCourseApi, payload);
    const data = response.data;

    if (data === true) {
      yield put(courseApiResponseSuccess(CourseActionTypes.CREATE_COURSE, data));
      yield call(GetAllCourses);
    }
  } catch (error: any) {
    yield put(courseApiResponseError(CourseActionTypes.CREATE_COURSE, error));
  }
}

function* GetCourseById({ payload: { CourseId } }: CourseData): SagaIterator {
  try {
    const response = yield call(GetCourseByIdApi, CourseId);
    const course = response.data;
    yield put(courseApiResponseSuccess(CourseActionTypes.Get_BY_ID_COURSE, course));
  } catch (error: any) {
    yield put(courseApiResponseError(CourseActionTypes.Get_BY_ID_COURSE, error));
  }
}

function* GetAllCourses(): SagaIterator {
  try {
    const response = yield call(GetAllCoursesApi);
    const courses = response.data;
    yield put(courseApiResponseSuccess(CourseActionTypes.Get_ALL_COURSES, courses));
  } catch (error: any) {
    console.error("GetAllCourses Error: ", error);
    yield put(courseApiResponseError(CourseActionTypes.Get_ALL_COURSES, error));
  }
}


function* DeletCourse({ payload: { CourseId } }: CourseData): SagaIterator {
  try {
    const response = yield call(DeleteCourseApi, CourseId);
    yield put(courseApiResponseSuccess(CourseActionTypes.DELETE_COURSE, response.data));
    yield call(GetAllCourses);
  } catch (error: any) {
    yield put(courseApiResponseError(CourseActionTypes.DELETE_COURSE, error));
  }
}

function* UpdateCourse({ payload }: any): SagaIterator {
  try {
    const response = yield call(UpdateCourseApi, payload);
    const course = response.data;
    yield put(courseApiResponseSuccess(CourseActionTypes.UPDATE_COURSE, course));
    yield call(GetAllCourses);
  } catch (error: any) {
    yield put(courseApiResponseError(CourseActionTypes.UPDATE_COURSE, error));
  }
}

export function* watchAddCourse() {
  yield takeEvery(CourseActionTypes.CREATE_COURSE, AddCourse);
}

export function* watchUpdateCourse() {
  yield takeEvery(CourseActionTypes.UPDATE_COURSE, UpdateCourse);
}

export function* watchDeleteCourse() {
  yield takeEvery(CourseActionTypes.DELETE_COURSE, DeletCourse);
}

export function* watchGetAllCourse() {
  yield takeEvery(CourseActionTypes.Get_ALL_COURSES, GetAllCourses);
}

export function* watchGetCourseById() {
  yield takeEvery(CourseActionTypes.Get_BY_ID_COURSE, GetCourseById);
}

function* CourseSaga() {
  yield all([
    fork(watchAddCourse),
    fork(watchUpdateCourse),
    fork(watchDeleteCourse),
    fork(watchGetAllCourse),
    fork(watchGetCourseById),
  ]);
}

export default CourseSaga;
