import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonsComponent(props) {
  const handleLoadFromFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.onchange = e => {
      const file = e.target.files[0];

      const reader = new FileReader();
      reader.onload = async (e) => {
        const text = e.target.result;
        const urls = text.split('\n').map((url, index) => ({
          name: `url_${index + 1}`,
          url: url.trim()
        }));

        props.setState(prevState => ({
          ...prevState,
          urls: urls
        }));
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
  
        props.setState(prevState => ({
          ...prevState,
          urls: urls
        }));
        //временно
        console.log('Список URL успешно загружен из Local Storage');
      } catch (error) {
        console.error('Ошибка при загрузке URL из Local Storage:', error);
      }
    } else {
      console.log('Список URL не найден в Local Storage');
    }
  };
  
  const handleSave = () => {
    const { urls } = props.state;
    const serializedUrls = JSON.stringify(urls);
    localStorage.setItem('urls', serializedUrls);
    //временно
    console.log('Список URL успешно сохранен в Local Storage');
  };
  
  const handleCalculate = async () => {
    const { urls, currentURL_ID } = props.state;
  
    if (currentURL_ID < 0 || currentURL_ID >= urls.length) {
      console.log('Пожалуйста, выберите URL из списка.');
      return;
    }

    const currentUrl = urls[currentURL_ID].url;
  
    try {
      const response = await fetch(currentUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
  
      const countRows = Array.isArray(data) ? data.length : 1;
      const countColumns = Array.isArray(data) && data[0] ? Object.keys(data[0]).length : Object.keys(data).length;
  
      props.setState(prevState => ({
        ...prevState,
        countRows: countRows,
        countColumns: countColumns
      }));
  
      console.log(`Расчет завершен. Строк: ${countRows}, Полей: ${countColumns}`);
    } catch (error) {
      console.error("Ошибка при попытке загрузить данные:", error);
    }
  };
  
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleLoadFromFile} className="text-center">Загрузить из файла</Button>
      <Button variant="primary" onClick={handleLoad} className="text-center">Загрузить</Button>
      <Button variant="primary" onClick={handleSave} className="text-center">Сохранить</Button>
      <Button variant="primary" onClick={handleCalculate} className="text-center">Рассчитать</Button>
    </div>
  );
}

export default ButtonsComponent;
