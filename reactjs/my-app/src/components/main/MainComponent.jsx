import React, { useState } from 'react';
import BodyComponent from '../interface/body/BodyComponent';
import MenuComponent from '../interface/menu/MenuComponent';

function MainComponent() {
  // const [state, setState] = useState({
  //   urls: [
  //     { id: 1, name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
  //     { id: 2, name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
  //     { id: 3, name: "url_3", url: "https://my-json-server.typicode.com/typicode/demo/db" },
  //     { id: 4, name: "url_4", url: "https://my-json-server.typicode.com/typicode/demo/comments" },
  //   ],
  //   loadedJSON: {},
  //   countRows: 0,
  //   countColumns: 0,
  //   statusLoadedJSON: false,
  //   currentURL_ID: -1
  // });
  
  const [urls, setUrls] = useState([
    { id: 1, name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
    { id: 2, name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
    { id: 3, name: "url_3", url: "https://my-json-server.typicode.com/typicode/demo/db" },
    { id: 4, name: "url_4", url: "https://my-json-server.typicode.com/typicode/demo/comments" },
  ]);
  const [loadedJSON, setLoadedJSON] = useState({});
  const [countRows, setCountRows] = useState(0);
  const [countColumns, setCountColumns] = useState(0);
  const [statusLoadedJSON, setStatusLoadedJSON] = useState(false);
  const [currentURL_ID, setCurrentURL_ID] = useState(-1);

  const handleLoadFromFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';
  
    fileInput.onchange = e => {
      const file = e.target.files[0];
  
      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const maxId = urls.reduce((max, url) => Math.max(url.id, max), 0);
        const existingUrls = new Set(urls.map(url => url.url));
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
  
          setUrls(currentUrls => [...currentUrls, ...newUrls]);
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
        setUrls(urls);
        console.log('Список URL успешно загружен из Local Storage');
      } catch (error) {
        console.error('Ошибка при загрузке URL из Local Storage:', error);
      }
    } else {
      console.log('Список URL не найден в Local Storage');
    }
  };

  const handleSave = () => {
    const serializedUrls = JSON.stringify(urls);
    localStorage.setItem('urls', serializedUrls);
    console.log('Список URL успешно сохранен в Local Storage');
  };

  const handleCalculate = async () => {
    const selectedUrl = urls.find(url => url.id === currentURL_ID);

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
  
      setCountRows(countRows);
      setCountColumns(countColumns);
  
      console.log(`Расчет завершен. Строк: ${countRows}, Полей: ${countColumns}`);
    } catch (error) {
      console.error("Ошибка при попытке загрузить данные:", error);
      setCountRows(0);
      setCountColumns(0);
    }
  };

  const handleButtonClick = async (id) => {
    const urlToLoad = urls.find(url => url.id === id);
  
    if (!urlToLoad) {
      console.error("Ссылка не найдена:", id);
      return;
    }
  
    try {
      const response = await fetch(urlToLoad.url);
      if (!response.ok) throw new Error(`HTTP ошибка! статус: ${response.status}`);
      const json = await response.json();
  
      setLoadedJSON(json);
      setStatusLoadedJSON(true);
      setCurrentURL_ID(id);
    } catch (error) {
      console.error("Не удается загрузить URL:", error);
      setLoadedJSON({});
      setStatusLoadedJSON(false);
      setCurrentURL_ID(id);
      setCountRows(0);
      setCountColumns(0);
    }
  };
  
  const handleAdd = () => {/* ... */};
  const handleDelete = () => {/* ... */};
  const handleEdit = () => {/* ... */};

  return (
    <div id="mainComponent" className="d-flex h-100">
      <MenuComponent 
        statusLoadedJSON={statusLoadedJSON}
        currentURL_ID={currentURL_ID}
        handleLoadFromFile={handleLoadFromFile} 
        handleLoad={handleLoad} 
        handleSave={handleSave} 
        handleCalculate={handleCalculate} />
      <BodyComponent 
        state={state} 
        handleButtonClick={handleButtonClick} 
        handleAdd={handleAdd} 
        handleDelete={handleDelete} 
        handleEdit={handleEdit} />
    </div>
  );
}

export default MainComponent;
