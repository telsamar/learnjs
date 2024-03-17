import { 
  processUrlsFromFile,
  loadUrlsFromLocalStorage,
 } from '@path_services/functions';

export const LOAD_URLS_FROM_FILE = 'LOAD_URLS_FROM_FILE';
export const LOAD_URLS_FROM_LOCAL_STORAGE = 'LOAD_URLS_FROM_LOCAL_STORAGE';
export const CALCULATE_DATA_FROM_URL = 'CALCULATE_DATA_FROM_URL';

export const LOAD_DATA_FOR_URL = 'LOAD_DATA_FOR_URL';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export const RESET_COUNTS = 'RESET_COUNTS';

export const act_loadUrlsFromFile = (file) => async (dispatch, getState) => {
  const existingUrls = getState().allData?.urls || [];

  try {
    const newUrls = await processUrlsFromFile(file, existingUrls);
    dispatch({
      type: LOAD_URLS_FROM_FILE,
      payload: newUrls
    });
  } catch (error) {
    console.error('Ошибка при обработке файла: ', error);
  }
};

export const act_loadUrlsFromLocalStorage = () => ({
  type: LOAD_URLS_FROM_LOCAL_STORAGE,
  payload: loadUrlsFromLocalStorage(),
});

export const act_calculateDataFromUrl = (countRows, countColumns) => ({
  type: CALCULATE_DATA_FROM_URL,
  payload: { countRows, countColumns }
});

export const act_loadDataForUrlRequest = (id) => ({
  type: LOAD_DATA_FOR_URL,
  payload: { currentURL_ID: id }
});

export const act_loadDataForUrlSuccess = (data, id) => ({
  type: LOAD_DATA_SUCCESS,
  payload: { data, currentURL_ID: id }
});

export const act_loadDataForUrlError = (id) => ({
  type: LOAD_DATA_ERROR,
  payload: { currentURL_ID: id }
});

export const act_resetCounts = () => ({
  type: RESET_COUNTS,
});

export const ADD_URL = 'ADD_URL';
export const UPDATE_URL = 'UPDATE_URL';
export const DELETE_URL = 'DELETE_URL';

export const act_addUrl = (newUrl) => ({
  type: ADD_URL,
  payload: newUrl,
});

export const act_updateUrl = (updatedUrl) => ({
  type: UPDATE_URL,
  payload: updatedUrl,
});

export const act_deleteUrl = (urlId) => ({
  type: DELETE_URL,
  payload: urlId,
});