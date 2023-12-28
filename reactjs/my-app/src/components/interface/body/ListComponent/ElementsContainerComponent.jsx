import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ElementsContainerComponent(props) {
  const { urls } = props.state;
  // Создание локального состояния для отслеживания выбранной кнопки
  const [selectedUrlIndex, setSelectedUrlIndex] = useState(-1);

  // Функция для обработки нажатия на кнопку. Устанавливает индекс выбранной кнопки
  const handleButtonClick = (index) => {
    setSelectedUrlIndex(index);
  };

  return (
    // Контейнер для кнопок с ограниченной высотой и возможностью прокрутки
    <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      {urls.map((url, index) => (
        // Кнопка для каждого URL-адреса
        <Button
          key={index}
          variant={selectedUrlIndex === index ? 'success' : 'outline-secondary'}
          className="w-100 mb-2"
          onClick={() => handleButtonClick(index)}
        >
          {url.name}: {url.url}
        </Button>
      ))}
    </div>
  );
}
export default ElementsContainerComponent;