import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

function ButtonsContainerComponent(props) {
  return (
    <ButtonGroup className="d-flex">
      <Button onClick={props.handleAdd} variant="primary" className="w-100 me-2">Добавить источник</Button>
      <Button onClick={props.handleDelete} variant="secondary" className="w-100 me-2">Удалить источник</Button>
      <Button onClick={props.handleEdit} variant="info" className="w-100">Изменить источник</Button>
    </ButtonGroup>
  );
}

export default ButtonsContainerComponent;
