import { UserActionTypes } from './constants';
import { User } from './type';
export type UserActionType = {
  type:
    | UserActionTypes.API_RESPONSE_SUCCESS
    | UserActionTypes.API_RESPONSE_ERROR
    | UserActionTypes.Get_ALL_USER
    | UserActionTypes.Get_BY_ID_USER
    | UserActionTypes.UPDATE_USER
    | UserActionTypes.DELETE_USER
    | UserActionTypes.CREATE_USER;
  payload: {} | string;
};

type UserData = {
  payload: User;
  type: string;
};


export const userApiResponseSuccess = (actionType: string, data: UserData | {}): UserActionType => ({
  type: UserActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
export const userApiResponseError = (actionType: string, error: string): UserActionType => ({
  type: UserActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddUser = (user: User): UserActionType => ({
  type: UserActionTypes.CREATE_USER,
  payload: user,
});

export const DeleteUser = (id:number): UserActionType => ({
  type: UserActionTypes.DELETE_USER,
  payload: {id},
});

export const GetAllUsers = (): UserActionType => ({
  type: UserActionTypes.Get_ALL_USER,
  payload: {},
});

export const GetUserById = (userID:number): UserActionType => ({
  type: UserActionTypes.Get_BY_ID_USER,
  payload: {userID},
});

export const UpdateUser = (user: any): UserActionType => ({
  type: UserActionTypes.UPDATE_USER,
  payload: {user},
});
