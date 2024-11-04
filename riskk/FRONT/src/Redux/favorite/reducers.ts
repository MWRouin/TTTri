import { APICore } from '../../helpers/api/apiCore';
import { FavoriteActionTypes } from './constants';
const api = new APICore();
const INIT_STATE = {
    ListFavorites: [],
    Favorite: null,
    type: '',
};

type FavoriteData = {
    payload: {
        feedbackId: number;
        userId: number;
        courseId: number;
    };
    type: string;
};

type FavoriteActionType = {
    type:
        | FavoriteActionTypes.API_RESPONSE_SUCCESS
        | FavoriteActionTypes.API_RESPONSE_ERROR
        | FavoriteActionTypes.Get_ALL_FAVORITES
        | FavoriteActionTypes.DELETE_FAVORITE
        | FavoriteActionTypes.CREATE_FAVORITE;
    payload: {
        actionType?: string;
        data?: FavoriteData | {};
        error?: string;
    };
};
interface State {
    ListFavorites?: FavoriteData[];
    Favorite?: FavoriteData;
    type: string;
}

const Favorite = (state: any = INIT_STATE, action: FavoriteActionType): any => {
    switch (action.type) {
        case FavoriteActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case FavoriteActionTypes.Get_ALL_FAVORITES: {
                    return {
                        ...state,
                        ListFavorites: action.payload.data,
                    };
                }

                case FavoriteActionTypes.DELETE_FAVORITE: {
                    return {
                        ...state,
                        Favorite: action.payload,
                    };
                }
                case FavoriteActionTypes.CREATE_FAVORITE: {
                    return {
                        ...state,
                        ListFavorites: [...state.ListFavorites, action.payload.data],
                    };
                }
                default:
                    return { ...state };
            }

        case FavoriteActionTypes.API_RESPONSE_ERROR:
            switch (action.payload.actionType) {
                case FavoriteActionTypes.Get_ALL_FAVORITES: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error,
                    };
                }
                case FavoriteActionTypes.DELETE_FAVORITE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error,
                    };
                }
                case FavoriteActionTypes.CREATE_FAVORITE: {
                    return {
                        ...state,
                        ResponseValue: null,
                        error: action.payload.error,
                    };
                }
                default:
                    return { ...state };
            }

        case FavoriteActionTypes.CREATE_FAVORITE:
            return { ...state };
        case FavoriteActionTypes.DELETE_FAVORITE:
            return { ...state };
        case FavoriteActionTypes.Get_ALL_FAVORITES:
            return { ...state };
        default:
            return { ...state };
    }
};

export default Favorite;
