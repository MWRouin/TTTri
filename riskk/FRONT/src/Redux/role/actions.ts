import { RoleActionTypes } from './constants';
import { Role } from './type';

export type RoleActionType = {
    type:
        | RoleActionTypes.API_RESPONSE_SUCCESS
        | RoleActionTypes.API_RESPONSE_ERROR
        | RoleActionTypes.Get_ALL_ROLE
        | RoleActionTypes.Get_BY_ID_ROLE
        | RoleActionTypes.UPDATE_ROLE
        | RoleActionTypes.DELETE_ROLE
        | RoleActionTypes.CREATE_ROLE;
    payload: {} | string;
};

type RoleData = {
    payload: Role;
    type: string;
};

export const roleApiResponseSuccess = (actionType: string, data: RoleData | {}): RoleActionType => ({
    type: RoleActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});
export const roleApiResponseError = (actionType: string, error: string): RoleActionType => ({
    type: RoleActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const AddRole = (role: Role): RoleActionType => ({
    type: RoleActionTypes.CREATE_ROLE,
    payload: role,
});

export const DeleteRole = (id: number): RoleActionType => ({
    type: RoleActionTypes.DELETE_ROLE,
    payload: { id },
});

export const GetAllRoles = (): RoleActionType => ({
    type: RoleActionTypes.Get_ALL_ROLE,
    payload: {},
});

export const GetRoleById = (roleId: number): RoleActionType => ({
    type: RoleActionTypes.Get_BY_ID_ROLE,
    payload: { roleId },
});

export const UpdateRole = (role: any): RoleActionType => ({
    type: RoleActionTypes.UPDATE_ROLE,
    payload: { role },
});
