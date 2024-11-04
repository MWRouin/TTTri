import { APICore } from '../../helpers/api/apiCore';
import { SectionActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    ListSections: [],
    Section: null,
    type: '',
};

type SectionData = {
    payload: {
        SectionId: number;
        Title: string;
        Description: string;
        IsActive: boolean;
        CourseId: number;
    };
    type: string;
};

type SectionActionType = {
    type:
    | SectionActionTypes.API_RESPONSE_SUCCESS
    | SectionActionTypes.API_RESPONSE_ERROR
    | SectionActionTypes.GET_ALL_SECTIONS
    | SectionActionTypes.GET_BY_ID_SECTION
    | SectionActionTypes.UPDATE_SECTION
    | SectionActionTypes.DELETE_SECTION
    | SectionActionTypes.CREATE_SECTION;
    payload: {
        actionType?: string;
        data?: SectionData | {};
        error?: string;
    };
};

const Section = (state: any = INIT_STATE, action: SectionActionType): any => {
    switch (action.type) {
        case SectionActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case SectionActionTypes.GET_ALL_SECTIONS:
                    return {
                        ...state,
                        ListSections: action.payload.data,
                    };
                case SectionActionTypes.UPDATE_SECTION:
                case SectionActionTypes.GET_BY_ID_SECTION:
                case SectionActionTypes.CREATE_SECTION:
                    return {
                        ...state,
                        Section: action.payload.data,
                    };
                case SectionActionTypes.DELETE_SECTION:
                    return {
                        ...state,
                        Section: action.payload,
                    };
                default:
                    return { ...state };
            }
        case SectionActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case SectionActionTypes.GET_ALL_SECTIONS:
                case SectionActionTypes.UPDATE_SECTION:
                case SectionActionTypes.GET_BY_ID_SECTION:
                case SectionActionTypes.DELETE_SECTION:
                case SectionActionTypes.CREATE_SECTION:
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error,
                    };
                default:
                    return { ...state };
            }
        default:
            return { ...state };
    }
};

export default Section;
