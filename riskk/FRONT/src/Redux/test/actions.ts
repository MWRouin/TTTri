import { TestActionTypes } from "./constants";
import { Test } from "./type";

export type TestActionType = {
  type:
    | TestActionTypes.API_RESPONSE_SUCCESS
    | TestActionTypes.API_RESPONSE_ERROR
    | TestActionTypes.Get_ALL_TEST
    | TestActionTypes.Get_BY_ID_TEST
    | TestActionTypes.UPDATE_TEST
    | TestActionTypes.DELETE_TEST
    | TestActionTypes.CREATE_TEST;
  payload: {} | string;
};

type TestData = {
  payload: Test;
  type: string;
};

// common success
export const TestApiResponseSuccess = (actionType: string, data: TestData | {}): TestActionType => ({
  type: TestActionTypes.API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});
// common error
export const TestApiResponseError = (actionType: string, error: string): TestActionType => ({
  type: TestActionTypes.API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const AddTest = (Test: Test): TestActionType => ({
  type: TestActionTypes.CREATE_TEST,
  payload: Test,
});

export const DeleteTest = (): TestActionType => ({
  type: TestActionTypes.DELETE_TEST,
  payload: {},
});

export const GetAllTests = (): TestActionType => ({
  type: TestActionTypes.Get_ALL_TEST,
  payload: {},
});

export const GetTestById = (): TestActionType => ({
  type: TestActionTypes.Get_BY_ID_TEST,
  payload: {},
});

export const UpdateTest = (): TestActionType => ({
  type: TestActionTypes.UPDATE_TEST,
  payload: {},
});
