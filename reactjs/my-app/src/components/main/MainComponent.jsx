import React, { useState } from 'react';
import BodyComponent from '../interface/body/BodyComponent';
import MenuComponent from '../interface/menu/MenuComponent';

function MainComponent() {
  const [state, setState] = useState({
    urls: [
      { id: 1, name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
      { id: 2, name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
      { id: 3, name: "url_3", url: "https://my-json-server.typicode.com/typicode/demo/db" },
      { id: 4, name: "url_4", url: "https://my-json-server.typicode.com/typicode/demo/comments" },
    ],
    loadedJSON: {},
    countRows: 0,
    countColumns: 0,
    statusLoadedJSON: false,
    currentURL_ID: -1
  });

  const updateUrls = (newUrls) => {
    setState(prevState => ({ ...prevState, urls: newUrls }));
  };

  const handleLoadFromFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';
  
    fileInput.onchange = e => {
      const file = e.target.files[0];
  
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const maxId = state.urls.reduce((max, url) => Math.max(url.id, max), 0);
        const existingUrls = new Set(state.urls.map(url => url.url));
        let newId = maxId;
  
        const newUrls = text.split('\n')
          .map(url => url.trim())
          .filter(url => !existingUrls.has(url))
          .map(url => {
            newId += 1;
            return {
              id: newId,
              name: `url_${newId}`,
              url: url
            };
          });
  
        updateUrls([...state.urls, ...newUrls]);
      };
      reader.readAsText(file);
    };
  
    fileInput.click();
  };
  
  const handleLoad = () => {
    const serializedUrls = localStorage.getItem('urls');
  
    if (serializedUrls) {
      try {
        const urls = JSON.parse(serializedUrls);
        updateUrls(urls);
        console.log('Список URL успешно загружен из Local Storage');
      } catch (error) {
        console.error('Ошибка при загрузке URL из Local Storage:', error);
      }
    } else {
      console.log('Список URL не найден в Local Storage');
    }
  };

  const handleSave = () => {
    const serializedUrls = JSON.stringify(state.urls);
    localStorage.setItem('urls', serializedUrls);
    console.log('Список URL успешно сохранен в Local Storage');
  };

  const handleCalculate = async () => {
    const selectedUrl = state.urls.find(url => url.id === state.currentURL_ID);

    if (!selectedUrl) {
      console.log('Пожалуйста, выберите URL из списка.');
      return;
    }
  
    try {
      const response = await fetch(selectedUrl.url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
  
      const countRows = Array.isArray(data) ? data.length : 1;
      const countColumns = Array.isArray(data) && data[0] ? Object.keys(data[0]).length : Object.keys(data).length;
  
      setState(prevState => ({
        ...prevState,
        countRows: countRows,
        countColumns: countColumns
      }));
  
      console.log(`Расчет завершен. Строк: ${countRows}, Полей: ${countColumns}`);
    } catch (error) {
      console.error("Ошибка при попытке загрузить данные:", error);
    }
  };

  const handleButtonClick = async (id) => {
    const urlToLoad = state.urls.find(url => url.id === id);
  
    if (!urlToLoad) {
      console.error("URL not found:", id);
      return;
    }
  
    try {
      const response = await fetch(urlToLoad.url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const json = await response.json();
  
      setState(prevState => ({
        ...prevState,
        loadedJSON: json,
        statusLoadedJSON: true,
        currentURL_ID: id,
      }));
    } catch (error) {
      console.error("Could not load the URL:", error);
      setState(prevState => ({
        ...prevState,
        loadedJSON: {},
        statusLoadedJSON: false,
        currentURL_ID: id,
        countRows: 0,
        countColumns: 0
      }));
    }
  };
  
  const handleAdd = () => {/* ... */};
  const handleDelete = () => {/* ... */};
  const handleEdit = () => {/* ... */};

  return (
    <div id="mainComponent" className="d-flex h-100">
      <MenuComponent state={state} handleLoadFromFile={handleLoadFromFile} handleLoad={handleLoad} handleSave={handleSave} handleCalculate={handleCalculate} />
      <BodyComponent state={state} handleButtonClick={handleButtonClick} handleAdd={handleAdd} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default MainComponent;
