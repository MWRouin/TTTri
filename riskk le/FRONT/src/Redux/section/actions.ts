import { SectionActionTypes } from './constants';
import { Section } from './type';

export type SectionActionType = {
    type:
    | SectionActionTypes.API_RESPONSE_SUCCESS
    | SectionActionTypes.API_RESPONSE_ERROR
    | SectionActionTypes.GET_ALL_SECTIONS
    | SectionActionTypes.GET_BY_ID_SECTION
    | SectionActionTypes.UPDATE_SECTION
    | SectionActionTypes.DELETE_SECTION
    | SectionActionTypes.CREATE_SECTION;
    payload: {} | string;
};

type SectionData = {
    payload: Section;
    type: string;
};

export const sectionApiResponseSuccess = (actionType: string, data: SectionData | {}): SectionActionType => ({
    type: SectionActionTypes.API_RESPONSE_SUCCESS,
    payload: { actionType, data },
});

export const sectionApiResponseError = (actionType: string, error: string): SectionActionType => ({
    type: SectionActionTypes.API_RESPONSE_ERROR,
    payload: { actionType, error },
});

export const addSection = (section: Section): SectionActionType => ({
    type: SectionActionTypes.CREATE_SECTION,
    payload: section,
});

export const deleteSection = (sectionId: number): SectionActionType => ({
    type: SectionActionTypes.DELETE_SECTION,
    payload: { sectionId },
});

export const updateSection = (section: Section): SectionActionType => ({
    type: SectionActionTypes.UPDATE_SECTION,
    payload: section,
});

export const getAllSections = (): SectionActionType => ({
    type: SectionActionTypes.GET_ALL_SECTIONS,
    payload: {},
});

export const getSectionById = (sectionId: number): SectionActionType => ({
    type: SectionActionTypes.GET_BY_ID_SECTION,
    payload: { sectionId },
});
