import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonsComponent(props) {
  const handleLoadFromFile = () => {/* ... */};
  const handleLoad = () => {/* ... */};
  const handleSave = () => {/* ... */};
  const handleCalculate = () => {/* ... */};

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
