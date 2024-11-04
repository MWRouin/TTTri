import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { APICore, setAuthorization } from '../../helpers/api/apiCore';
import { AddRole as AddRoleApi, UpdateRole as UpdateRoleApi, GetRole as GetRoleByIdApi, GetRoles as GetAllRolesApi, DeleteRole as DeleteRoleApi } from '../../helpers/';
import { Role } from './type';
import { RoleActionTypes } from './constants';
import { roleApiResponseError, roleApiResponseSuccess } from './actions';

type RoleData = {
    payload: Role;
    type: string;
};

const api = new APICore();

function* AddRole({ payload }: RoleData): SagaIterator {
    try {
        const response = yield call(AddRoleApi, payload);
        const data = response.data;
        console.log(response);

        if (data === true) {
            yield put(roleApiResponseSuccess(RoleActionTypes.CREATE_ROLE, data));
            yield call(GetAllRoles);
        }
    } catch (error: any) {
        yield put(roleApiResponseError(RoleActionTypes.CREATE_ROLE, error));
    }
}

function* GetRoleById({ payload: { roleId } }: RoleData): SagaIterator {
    try {
        const response = yield call(GetRoleByIdApi, roleId);
        const role = response.data;
        yield put(roleApiResponseSuccess(RoleActionTypes.Get_BY_ID_ROLE, role));
    } catch (error: any) {
        yield put(roleApiResponseError(RoleActionTypes.Get_BY_ID_ROLE, error));
    }
}

function* GetAllRoles(): SagaIterator {
    try {
        console.log('payload saga AddRole');
        const response = yield call(GetAllRolesApi);
        const roles = response.data;
        yield put(roleApiResponseSuccess(RoleActionTypes.Get_ALL_ROLE, roles));
    } catch (error: any) {
        yield put(roleApiResponseError(RoleActionTypes.Get_ALL_ROLE, error));
    }
}

function* DeleteRole({ payload }: any): SagaIterator {
    try {
        const response = yield call(DeleteRoleApi, payload.id);
        yield put(roleApiResponseSuccess(RoleActionTypes.DELETE_ROLE, response.data));
        yield call(GetAllRoles);
    } catch (error: any) {
        yield put(roleApiResponseError(RoleActionTypes.DELETE_ROLE, error));
    }
}
function* UpdateRole({ payload }: any): SagaIterator {
    try {
        const response = yield call(UpdateRoleApi, payload.role);
        const role = response.data;
        yield put(roleApiResponseSuccess(RoleActionTypes.UPDATE_ROLE, role));
        yield call(GetAllRoles);
    } catch (error: any) {
        yield put(roleApiResponseError(RoleActionTypes.UPDATE_ROLE, error));
    }
}

export function* watchAddRole() {
    yield takeEvery(RoleActionTypes.CREATE_ROLE, AddRole);
}

export function* watchGetRoleById() {
    yield takeEvery(RoleActionTypes.Get_BY_ID_ROLE, GetRoleById);
}

export function* watchGetAllRoles() {
    yield takeEvery(RoleActionTypes.Get_ALL_ROLE, GetAllRoles);
}

export function* watchDeleteRole() {
    yield takeEvery(RoleActionTypes.DELETE_ROLE, DeleteRole);
}

export function* watchUpdateRole() {
    yield takeEvery(RoleActionTypes.UPDATE_ROLE, UpdateRole);
}

function* RoleSaga() {
    yield all([fork(watchAddRole), fork(watchUpdateRole), fork(watchGetRoleById), fork(watchGetAllRoles), fork(watchDeleteRole)]);
}

export default RoleSaga;
