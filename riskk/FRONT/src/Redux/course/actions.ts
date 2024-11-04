import {CourseActionTypes } from './constants';
import { Course } from './type';
export type CourseActionType = {
    type:
    | CourseActionTypes.API_RESPONSE_SUCCESS
    | CourseActionTypes.API_RESPONSE_ERROR
    | CourseActionTypes.Get_ALL_COURSES
    | CourseActionTypes.Get_BY_ID_COURSE
    | CourseActionTypes.UPDATE_COURSE
    | CourseActionTypes.DELETE_COURSE
    | CourseActionTypes.CREATE_COURSE;
    payload: {} | string;
};

type CourseData = {
    payload: Course;
    type: string;
  };

export const courseApiResponseSuccess = (actionType: string, data: CourseData | {}): CourseActionType => ({
    type: CourseActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const courseApiResponseError = (actionType: string, error: string): CourseActionType => ({
    type: CourseActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const AddCourse = (course:any): CourseActionType => ({
    type: CourseActionTypes.CREATE_COURSE,
    payload: course,
});

export const DeleteCourse = (CourseId: number): CourseActionType => ({
    type: CourseActionTypes.DELETE_COURSE,
    payload: {CourseId},
});

export const UpdateCourse = (course:Course): CourseActionType => ({
    type: CourseActionTypes.UPDATE_COURSE,
    payload: course,
});

export const GetAllCourses=():CourseActionType=>({
    type: CourseActionTypes.Get_ALL_COURSES,
    payload:{}
  })

  export const GetCourseById = (CourseId: number): CourseActionType => ({
    type: CourseActionTypes.Get_BY_ID_COURSE,
    payload: { CourseId },
});
