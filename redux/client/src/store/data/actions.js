export const LOAD_URLS_FROM_FILE = 'LOAD_URLS_FROM_FILE';

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


