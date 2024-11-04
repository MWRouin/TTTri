import { APICore } from '../../helpers/api/apiCore';
import { CourseActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListCourses: [],
  Course: null,
  type: '',
};

type CourseData = {
  payload: {
    CourseId: number;
    Title: string;
    Description: string;
    LevelId: number;
    UserId: string;
    CategoryId: string;
    image: string;
    isActive: boolean;
  };
  type: string;
};

type CourseActionType = {
  type:
    | CourseActionTypes.API_RESPONSE_SUCCESS
    | CourseActionTypes.API_RESPONSE_ERROR
    | CourseActionTypes.Get_ALL_COURSES
    | CourseActionTypes.Get_BY_ID_COURSE
    | CourseActionTypes.UPDATE_COURSE
    | CourseActionTypes.DELETE_COURSE
    | CourseActionTypes.CREATE_COURSE;
  payload: {
    actionType?: string;
    data?: CourseData | {};
    error?: string;
  };
};

interface State {
  ListCourses?: CourseData[];
  Course?: CourseData;
  type: string;
}

const Course = (state: any = INIT_STATE, action: CourseActionType): any => {
  switch (action.type) {
    case CourseActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case CourseActionTypes.Get_ALL_COURSES: {
          return {
            ...state,
            ListCourses: action.payload.data,
          };
        }
        case CourseActionTypes.UPDATE_COURSE: {
          return {
            ...state,
            Course: action.payload.data,
          };
        }
        case CourseActionTypes.Get_BY_ID_COURSE: {
          return {
            ...state,
            Course: action.payload.data,
          };
        }
        case CourseActionTypes.DELETE_COURSE: {
          return {
            ...state,
            Course: action.payload,
          };
        }
        case CourseActionTypes.CREATE_COURSE: {
          return {
            Course: action.payload.data,
            ListCourses: [],
          };
        }
        default:
          return { ...state };
      }

    case CourseActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case CourseActionTypes.Get_ALL_COURSES: {
          return {
            ...state,
            ListCourses: null,
            error: action.payload.error,
          };
        }
        case CourseActionTypes.UPDATE_COURSE: {
          return {
            ...state,
            Course: null,
            error: action.payload.error,
          };
        }
        case CourseActionTypes.Get_BY_ID_COURSE: {
          return {
            ...state,
            Course: null,
            error: action.payload.error,
          };
        }
        case CourseActionTypes.DELETE_COURSE: {
          return {
            ...state,
            Course: null,
            error: action.payload.error,
          };
        }
        case CourseActionTypes.CREATE_COURSE: {
          return {
            ...state,
            Course: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case CourseActionTypes.CREATE_COURSE:
      return { ...state };
    case CourseActionTypes.DELETE_COURSE:
      return { ...state };
    case CourseActionTypes.UPDATE_COURSE:
      return { ...state };
    case CourseActionTypes.Get_BY_ID_COURSE:
      return { ...state };
    case CourseActionTypes.Get_ALL_COURSES:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Course;
