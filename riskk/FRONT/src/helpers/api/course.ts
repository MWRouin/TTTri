import { APICore } from './apiCore';

const api = new APICore();
const BASE_URL = '/api/courses';




const GetAllCourses = async () => {
    const response = await api.getData(BASE_URL);
    return response;
};

const GetCourseById = async (CourseId: any) => {
    const response = await api.getById(BASE_URL, CourseId);
    return response;
};

const AddCourse = async (data: {Course: any }) => {
    const response = await api.create(BASE_URL, data);
    return response;
};

const UpdateCourse = async (data: {  Course: any }) => {
    const response = await api.putSimple(BASE_URL, data);
    return response;
};

const DeleteCourse = async (CourseId: any) => {
    const response = await api.delete(`${BASE_URL}/${CourseId}`);
    return response;
};



export { GetAllCourses,  GetCourseById, AddCourse, UpdateCourse, DeleteCourse};
