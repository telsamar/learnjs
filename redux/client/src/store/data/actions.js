import { 
  processUrlsFromFile,
  loadUrlsFromLocalStorage,
  calculateDataFromUrl,
  loadDataForUrl,
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

export const act_loadDataForUrl = (id) => async (dispatch, getState) => {
  const { urls } = getState().allData;
  const urlToLoad = urls.find(url => url.id === id);

  if (!urlToLoad) {
    console.error("Ссылка не найдена:", id);
    return;
  }

  dispatch({ type: LOAD_DATA_FOR_URL, currentURL_ID: id });

  const result = await loadDataForUrl(urlToLoad.url);

  if (result.success) {
    dispatch({ type: LOAD_DATA_SUCCESS, payload: result.data, currentURL_ID: id });
  } else {
    dispatch({ type: LOAD_DATA_ERROR, currentURL_ID: id });
  }

  dispatch({ type: RESET_COUNTS });
};

export const act_calculateDataFromUrl = (urlId) => async (dispatch, getState) => {
  const { urls } = getState().allData;
  const selectedUrl = urls.find(url => url.id === urlId);

  if (!selectedUrl) {
    console.log('Пожалуйста, выберите URL из списка.');
    return;
  }

  const { countRows, countColumns } = await calculateDataFromUrl(selectedUrl.url);

  dispatch({
    type: CALCULATE_DATA_FROM_URL,
    payload: { countRows, countColumns }
  });
};

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