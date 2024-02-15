import React from 'react';
import { Button, ButtonGroup, Modal, Form } from 'react-bootstrap';

function ButtonsContainerComponent(props) {
  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={() => props.handleOpenModal('add')} variant="success" className="w-100 me-2">Добавить источник</Button>
        <Button onClick={() => props.setShowDeleteModal(true)} variant="danger" className="w-100 me-2">Удалить источник</Button>
        <Button onClick={() => {
          const selectedUrl = props.urls.find(url => url.id === props.currentURL_ID);
          if (selectedUrl) {
            props.handleOpenModal('edit', { name: selectedUrl.name, path: selectedUrl.url });
          } else {
            alert('Выберите URL для редактирования.');
          }
        }} variant="warning" className="w-100">Изменить источник</Button>
      </ButtonGroup>

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

      <Modal show={props.showModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.modalMode === 'add' ? 'Добавить источник' : 'Редактировать источник'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Имя источника</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите имя источника"
                value={props.urlName}
                onChange={(e) => props.setUrlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Путь к источнику</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите URL"
                value={props.urlPath}
                onChange={(e) => props.setUrlPath(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Отменить</Button>
          <Button variant="primary" onClick={props.handleSaveUrl}>{props.modalMode === 'add' ? 'Сохранить' : 'Обновить'}</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default ButtonsContainerComponent;
