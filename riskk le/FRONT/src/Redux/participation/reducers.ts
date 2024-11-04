import { APICore } from '../../helpers/api/apiCore';
import { ParticipationActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    loading: false,
    ListParticipations: [],
    Participation: null,
    error: null,
};

type ParticipationData = {
   payload:{
    userId:number,
    courseId:number,
    participationId:number,
    dateParticipation:Date
   }
   type: string;
};

type ParticipationActionType = {
    type:
    | ParticipationActionTypes.API_RESPONSE_SUCCESS
    | ParticipationActionTypes.API_RESPONSE_ERROR
    | ParticipationActionTypes.Get_ALL_PARTICIPATIONS
    | ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION
    | ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION
    | ParticipationActionTypes.UPDATE_PARTICIPATION
    | ParticipationActionTypes.DELETE_PARTICIPATION
    | ParticipationActionTypes.CREATE_PARTICIPATION;
    payload: {
        actionType?: string;
        data?: ParticipationData | ParticipationData[] | {};
        error?: string;
    };
};

const Participation = (state: any = INIT_STATE, action: ParticipationActionType): any => {
    switch (action.type) {
        case ParticipationActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case ParticipationActionTypes.Get_ALL_PARTICIPATIONS: {
                    return {
                        ...state,
                        ListParticipations: action.payload.data,
                        error: null,
                    };
                }
                case ParticipationActionTypes.UPDATE_PARTICIPATION: {
                    return {
                        ...state,
                        Participation: action.payload.data,
                        error: null,
                    };
                }
                case ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION: {
                    return {
                        ...state,
                        ListParticipations: action.payload.data,
                        loading:true,
                        error: null,
                    };
                }
                case ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION: {
                    return {
                        ...state,
                        ListParticipations: action.payload.data,
                        error: null,
                    };
                }
                case ParticipationActionTypes.DELETE_PARTICIPATION: {
                    return {
                        ...state,
                    
                    };
                }
                case ParticipationActionTypes.CREATE_PARTICIPATION: {
                    return {
                        ...state,
                        Participation: action.payload.data,
                        ListParticipations: [...state.ListParticipations, action.payload.data],
                        error: null,
                    };
                }
                default:
                    return { ...state };
            }

        case ParticipationActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };

        case ParticipationActionTypes.Get_ALL_PARTICIPATIONS:
        case ParticipationActionTypes.Get_BY_USER_ID_PARTICIPATION:
        case ParticipationActionTypes.Get_BY_COURSE_ID_PARTICIPATION:
        case ParticipationActionTypes.UPDATE_PARTICIPATION:
        case ParticipationActionTypes.DELETE_PARTICIPATION:
        case ParticipationActionTypes.CREATE_PARTICIPATION:
            return {
                ...state,
                loading: true,
                error: null,
            };

        default:
            return { ...state };
    }
};

export default Participation;
