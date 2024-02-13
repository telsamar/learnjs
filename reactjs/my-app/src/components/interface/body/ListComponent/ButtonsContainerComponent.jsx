import React from 'react';
import { Button, ButtonGroup, Modal, Form } from 'react-bootstrap';

function ButtonsContainerComponent(props) {
  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={() => props.setShowAddModal(true)} variant="success" className="w-100 me-2">Добавить источник</Button>
        <Button onClick={() => props.setShowDeleteModal(true)} variant="danger" className="w-100 me-2">Удалить источник</Button>
        <Button onClick={() => props.openEditModal()} variant="warning" className="w-100">Изменить источник</Button>
      </ButtonGroup>

      <Modal show={props.showAddModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Добавить источник</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Имя источника</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя источника"
                value={props.newUrlName}
                onChange={(e) => props.setNewUrlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Путь к источнику</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите URL"
                value={props.newUrlPath}
                onChange={(e) => props.setNewUrlPath(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Отменить</Button>
          <Button variant="primary" onClick={props.handleSaveNewUrl}>Сохранить</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={props.showDeleteModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление источника</Modal.Title>
        </Modal.Header>
        <Modal.Body>Точно удалить источник {props.currentUrlName}? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Отмена</Button>
          <Button variant="danger" onClick={props.handleConfirmDelete}>Удалить</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={props.showEditModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Редактировать источник</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Имя источника</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя источника"
                value={props.editUrlName}
                onChange={(e) => props.setEditUrlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Путь к источнику</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите URL"
                value={props.editUrlPath}
                onChange={(e) => props.setEditUrlPath(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Отменить</Button>
          <Button variant="primary" onClick={props.handleSaveEdit}>Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ButtonsContainerComponent;
