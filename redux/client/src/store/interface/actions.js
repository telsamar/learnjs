export const SET_MODAL_VISIBILITY = 'SET_MODAL_VISIBILITY';
export const SET_MODAL_MODE = 'SET_MODAL_MODE';
export const SET_URL_NAME = 'SET_URL_NAME';
export const SET_URL_PATH = 'SET_URL_PATH';
export const SET_DELETE_MODAL_VISIBILITY = 'SET_DELETE_MODAL_VISIBILITY';

export const act_setModalVisibility = (isVisible) => ({
  type: SET_MODAL_VISIBILITY,
  payload: isVisible,
});

export const act_setModalMode = (mode) => ({
  type: SET_MODAL_MODE,
  payload: mode,
});

export const act_setUrlName = (name) => ({
  type: SET_URL_NAME,
  payload: name,
});

export const act_setUrlPath = (path) => ({
  type: SET_URL_PATH,
  payload: path,
});

export const act_setDeleteModalVisibility = (isVisible) => ({
  type: SET_DELETE_MODAL_VISIBILITY,
  payload: isVisible,
});
