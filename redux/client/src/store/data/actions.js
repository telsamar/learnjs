export const LOAD_URLS_FROM_FILE = 'LOAD_URLS_FROM_FILE';
export const LOAD_URLS_FROM_LOCAL_STORAGE = 'LOAD_URLS_FROM_LOCAL_STORAGE';
export const CALCULATE_DATA_FROM_URL = 'CALCULATE_DATA_FROM_URL';

export const LOAD_DATA_FOR_URL = 'LOAD_DATA_FOR_URL';
export const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'LOAD_DATA_ERROR';

export const act_loadUrlsFromFile = (file) => async (dispatch, getState) => {
  const reader = new FileReader();

  reader.onload = async (e) => {
    const text = e.target.result;
    
    const state = getState();
    if (!state.allData || !state.allData.urls) {
      console.error('ошибка', state);
      return;
    }
    const existingUrls = state.allData.urls;

    let newId = existingUrls.reduce((max, url) => Math.max(url.id, max), 0);

    const newUrls = text.split('\n')
      .map(url => url.trim())
      .filter(url => url && !existingUrls.some(existingUrl => existingUrl.url.trim() === url))
      .map(url => ({
        id: ++newId,
        name: `url_${newId}`,
        url: url
      }));

    if (newUrls.length > 0) {
      // console.log("Новые URL-адреса для добавления:", newUrls);
      dispatch({
        type: LOAD_URLS_FROM_FILE,
        payload: newUrls,
      });
    } else {
      // console.log("Новые URL-адреса не найдены или уже существуют в списке");
    }
  };

  reader.readAsText(file);
};

export const act_loadUrlsFromLocalStorage = () => {
  const serializedUrls = localStorage.getItem('urls');
  let urls = [];

  if (serializedUrls) {
    try {
      urls = JSON.parse(serializedUrls);
      console.log('Список URL успешно загружен из Local Storage: ', urls);
    } catch (error) {
      console.error('Ошибка при загрузке URL из Local Storage:', error);
    }
  } else {
    console.log('Список URL не найден в Local Storage');
  }

  return {
    type: LOAD_URLS_FROM_LOCAL_STORAGE,
    payload: urls,
  };
};

export const act_calculateDataFromUrl = (urlId) => async (dispatch, getState) => {
  const { urls } = getState().allData;
  const selectedUrl = urls.find(url => url.id === urlId);

  if (!selectedUrl) {
    console.log('Пожалуйста, выберите URL из списка.');
    return;
  }

  try {
    const response = await fetch(selectedUrl.url);
    if (!response.ok) throw new Error(`HTTP error! статус: ${response.status}`);
    const data = await response.json();

    const countRows = Array.isArray(data) ? data.length : 1;
    const countColumns = Array.isArray(data) && data[0] ? Object.keys(data[0]).length : Object.keys(data).length;

    dispatch({
      type: CALCULATE_DATA_FROM_URL,
      payload: { countRows, countColumns }
    });

    console.log(`Расчет завершен. Строк: ${countRows}, Полей: ${countColumns}`);
  } catch (error) {
    console.error("Ошибка при попытке загрузить данные:", error);
    dispatch({
      type: CALCULATE_DATA_FROM_URL,
      payload: { countRows: 0, countColumns: 0 }
    });
  }
};

export const act_loadDataForUrl = (id) => async (dispatch, getState) => {
  const { urls } = getState().allData;
  const urlToLoad = urls.find(url => url.id === id);

  if (!urlToLoad) {
    console.error("Ссылка не найдена:", id);
    return;
  }

  dispatch({ type: LOAD_DATA_FOR_URL, currentURL_ID: id });

  try {
    const response = await fetch(urlToLoad.url);
    if (!response.ok) throw new Error(`HTTP ошибка! статус: ${response.status}`);
    const json = await response.json();

    dispatch({ type: LOAD_DATA_SUCCESS, payload: json, currentURL_ID: id });
  } catch (error) {
    console.error("Не удается загрузить URL:", error);
    dispatch({ type: LOAD_DATA_ERROR, currentURL_ID: id });
  }
};
