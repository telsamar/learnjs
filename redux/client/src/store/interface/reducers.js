import {
    SET_MODAL_VISIBILITY,
    SET_MODAL_MODE,
    SET_URL_NAME,
    SET_URL_PATH,
    SET_DELETE_MODAL_VISIBILITY,
} from './actions';
  
const defaultState = {
    showModal: false,
    modalMode: 'add',
    urlName: '',
    urlPath: '',
    showDeleteModal: false,
};
  
export const interfaceReducer = (state = defaultState, action) => {
    switch (action.type) {
      case SET_MODAL_VISIBILITY:
        return {
          ...state,
          showModal: action.payload,
        };
      case SET_MODAL_MODE:
        return {
          ...state,
          modalMode: action.payload,
        };
      case SET_URL_NAME:
        return {
          ...state,
          urlName: action.payload,
        };
      case SET_URL_PATH:
        return {
          ...state,
          urlPath: action.payload,
        };
      case SET_DELETE_MODAL_VISIBILITY:
        return {
          ...state,
          showDeleteModal: action.payload,
        };
      default:
        return state;
    }
};
  