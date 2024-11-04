import { APICore } from '../../helpers/api/apiCore';
import { CategorieActionTypes } from './constants';

const api = new APICore();
const INIT_STATE = {
  ListCategories: [],
  Categorie: null,
  type: '',
};

type CategorieData = {
  payload: {
    categorieId?: number;
    description: string;
    image: string;
  };
  type: string;
};

type CategorieActionType = {
  type:
    | CategorieActionTypes.API_RESPONSE_SUCCESS
    | CategorieActionTypes.API_RESPONSE_ERROR
    | CategorieActionTypes.Get_ALL_CATEGORIE
    | CategorieActionTypes.Get_BY_ID_CATEGORIE
    | CategorieActionTypes.UPDATE_CATEGORIE
    | CategorieActionTypes.DELETE_CATEGORIE
    | CategorieActionTypes.CREATE_CATEGORIE;
  payload: {
    actionType?: string;
    data?: CategorieData | {};
    error?: string;
  };
};

interface State {
  ListCategories?: CategorieData[];
  Categorie?: CategorieData;
  type: string;
}

const Categorie = (state: any = INIT_STATE, action: CategorieActionType): any => {
  switch (action.type) {
    case CategorieActionTypes.API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case CategorieActionTypes.Get_ALL_CATEGORIE: {
          return {
            ...state,
            ListCategories: action.payload.data,
          };
        }
        case CategorieActionTypes.UPDATE_CATEGORIE: {
          return {
            ...state,
            Categorie: action.payload,
          };
        }
        case CategorieActionTypes.Get_BY_ID_CATEGORIE: {
          return {
            ...state,
            Categorie: action.payload,
          };
        }
        case CategorieActionTypes.DELETE_CATEGORIE: {
          return {
            ...state,
            Categorie: action.payload,
          };
        }
        case CategorieActionTypes.CREATE_CATEGORIE: {
          return {
            ...state,
            Categorie: action.payload,
            ListCategories: [],
          };
        }
        default:
          return { ...state };
      }

    case CategorieActionTypes.API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case CategorieActionTypes.Get_ALL_CATEGORIE: {
          return {
            ...state,
            ListCategories: null,
            error: action.payload.error,
          };
        }
        case CategorieActionTypes.UPDATE_CATEGORIE: {
          return {
            ...state,
            Categorie: null,
            error: action.payload.error,
          };
        }
        case CategorieActionTypes.Get_BY_ID_CATEGORIE: {
          return {
            ...state,
            Categorie: null,
            error: action.payload.error,
          };
        }
        case CategorieActionTypes.DELETE_CATEGORIE: {
          return {
            ...state,
            Categorie: null,
            error: action.payload.error,
          };
        }
        case CategorieActionTypes.CREATE_CATEGORIE: {
          return {
            ...state,
            Categorie: null,
            error: action.payload.error,
          };
        }
        default:
          return { ...state };
      }

    case CategorieActionTypes.CREATE_CATEGORIE:
      return { ...state };
    case CategorieActionTypes.DELETE_CATEGORIE:
      return { ...state };
    case CategorieActionTypes.UPDATE_CATEGORIE:
      return { ...state };
    case CategorieActionTypes.Get_BY_ID_CATEGORIE:
      return { ...state };
    case CategorieActionTypes.Get_ALL_CATEGORIE:
      return { ...state };
    default:
      return { ...state };
  }
};

export default Categorie;
