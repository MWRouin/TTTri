import { APICore } from '../../helpers/api/apiCore';
import {FileActionTypes } from './constants';
const api = new APICore();
const INIT_STATE = {
    ListFiles: [],
    File: null,
    type: '',
  };

type FileData = {
    payload: {
        fileId: number;
        fileName:string;
        file:any;

    };
    type: string;
};

type FileActionType = {
    type:
    | FileActionTypes.API_RESPONSE_SUCCESS
    | FileActionTypes.API_RESPONSE_ERROR
    | FileActionTypes.Get_ALL_FILES
    | FileActionTypes.Get_BY_NAME_FILE
    | FileActionTypes.UPDATE_FILE
    | FileActionTypes.DELETE_FILE
    | FileActionTypes.CREATE_FILE;
    payload: {
        actionType?: string;
        data?: FileData | {};
        error?: string;
    };
};
interface State {
    ListFiles?: FileData[];
    File?: FileData;
    type: string;
  }
  
  const File = (state= INIT_STATE, action: FileActionType) => {
    switch (action.type) {
      case FileActionTypes.API_RESPONSE_SUCCESS:
        switch (action.payload.actionType) {
          case FileActionTypes.CREATE_FILE:
            return {
              ...state,
              ListFiles: [...state.ListFiles, action.payload.data],
              File: action.payload.data,
            };
      
          default:
            return state;
        }
  
      case FileActionTypes.API_RESPONSE_ERROR:
        return {
          ...state,
          error: action.payload.error,
        };
  
      case FileActionTypes.CREATE_FILE:
      case FileActionTypes.DELETE_FILE:
      case FileActionTypes.UPDATE_FILE:
      case FileActionTypes.Get_BY_NAME_FILE:
      case FileActionTypes.Get_ALL_FILES:
        return { ...state };
  
      default:
        return state;
    }
  };

  export default File;