import { FileActionTypes } from './constants';
import { File } from './type';

export type FileActionType = {
    type:
    | FileActionTypes.API_RESPONSE_SUCCESS
    | FileActionTypes.API_RESPONSE_ERROR
    | FileActionTypes.Get_BY_NAME_FILE
    | FileActionTypes.UPDATE_FILE
    | FileActionTypes.CREATE_FILE
    payload: {} | string;
};

type FileData = {
    payload: File;
    type: string;
};

export const FileApiResponseSuccess = (actionType: string, data: FileData): FileActionType => ({
    type: FileActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const FileApiResponseError = (actionType: string, error: string): FileActionType => ({
    type: FileActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});



export const UploadFile = ({file,fileName}:File): FileActionType => ({
    type: FileActionTypes.CREATE_FILE,
    payload: {file,fileName},
});


