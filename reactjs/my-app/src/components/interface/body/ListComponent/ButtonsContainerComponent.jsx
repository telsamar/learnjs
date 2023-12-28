import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonsContainerComponent(props) {
  const handleAdd = () => {/* ... */};
  const handleDelete = () => {/* ... */};
  const handleEdit = () => {/* ... */};

  return (
    <ButtonGroup className="d-flex">
      <Button onClick={handleAdd} variant="primary" className="w-100 me-2">Добавить источник</Button>
      <Button onClick={handleDelete} variant="secondary" className="w-100 me-2">Удалить источник</Button>
      <Button onClick={handleEdit} variant="info" className="w-100">Изменить источник</Button>
    </ButtonGroup>
  );
}

export default ButtonsContainerComponent;
