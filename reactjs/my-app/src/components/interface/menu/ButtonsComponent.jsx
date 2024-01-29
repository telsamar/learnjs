import React from 'react';
import { Button } from 'react-bootstrap';

function ButtonsComponent(props) {  
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={props.handleLoadFromFile} className="text-center">Загрузить из файла</Button>
      <Button variant="primary" onClick={props.handleLoad} className="text-center">Загрузить</Button>
      <Button variant="primary" onClick={props.handleSave} className="text-center">Сохранить</Button>
      <Button variant="primary" onClick={props.handleCalculate} className="text-center">Рассчитать</Button>
    </div>
  );
}

export default ButtonsComponent;
