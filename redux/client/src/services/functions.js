export const processUrlsFromFile = (file, existingUrls) => new Promise((resolve, reject) => {
    const reader = new FileReader();
  
    reader.onload = () => {
      const text = reader.result;
      let newId = existingUrls.reduce((max, url) => Math.max(url.id, max), 0);
  
      const newUrls = text.split('\n')
        .map(url => url.trim())
        .filter(url => url && !existingUrls.some(existingUrl => existingUrl.url.trim() === url))
        .map(url => ({
          id: ++newId,
          name: `url_${newId}`,
          url
        }));
  
      resolve(newUrls);
    };
  
    reader.onerror = reject;
  
    reader.readAsText(file);
  });
  
export const loadUrlsFromLocalStorage = () => {
    const serializedUrls = localStorage.getItem('urls');
    if (serializedUrls) {
      try {
        const urls = JSON.parse(serializedUrls);
        console.log('Список URL успешно загружен из Local Storage: ', urls);
        return urls;
      } catch (error) {
        console.error('Ошибка при загрузке URL из Local Storage:', error);
      }
    } else {
      console.log('Список URL не найден в Local Storage');
    }
    return [];
  };

export const loadDataForUrl = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ошибка! статус: ${response.status}`);
      const json = await response.json();
      return { success: true, data: json };
    } catch (error) {
      console.error("Не удается загрузить URL:", error);
      return { success: false, error };
    }
  };

export const calculateDataFromUrl = async (selectedUrl) => {
    try {
      const response = await fetch(selectedUrl);
      if (!response.ok) throw new Error(`HTTP ошибка! статус: ${response.status}`);
      const data = await response.json();
  
      const countRows = Array.isArray(data) ? data.length : 1;
      const countColumns = Array.isArray(data) && data[0] ? Object.keys(data[0]).length : Object.keys(data).length;
  
      console.log(`Расчет завершен. Строк: ${countRows}, Полей: ${countColumns}`);
  
      return { countRows, countColumns };
    } catch (error) {
      console.error("Ошибка при попытке загрузить данные:", error);
      return { countRows: 0, countColumns: 0 };
    }
  };