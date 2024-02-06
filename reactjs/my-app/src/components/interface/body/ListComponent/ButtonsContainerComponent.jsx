import React, { useState } from 'react';
import { Button, ButtonGroup, Modal, Form } from 'react-bootstrap';

function ButtonsContainerComponent(props) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newUrlName, setNewUrlName] = useState('');
  const [newUrlPath, setNewUrlPath] = useState('');
  const [editUrlName, setEditUrlName] = useState('');
  const [editUrlPath, setEditUrlPath] = useState('');

  const handleClose = () => {
    setShowDeleteModal(false);
    setShowAddModal(false);
    setShowEditModal(false);
  };

  const handleConfirmDelete = () => {
    props.deleteUrl();
    handleClose();
  };

  const handleSaveNewUrl = () => {
    props.addUrl({
      name: newUrlName,
      url: newUrlPath
    });
    handleClose();
    setNewUrlName('');
    setNewUrlPath('');
  };

  const openEditModal = () => {
    const urlToEdit = props.urls.find(url => url.id === props.currentURL_ID);
    if (urlToEdit) {
      setEditUrlName(urlToEdit.name);
      setEditUrlPath(urlToEdit.url);
      setShowEditModal(true);
    } else {
      alert('Выберите URL для редактирования.');
    }
  };

  const handleSaveEdit = () => {
    props.updateUrl({
      id: props.currentURL_ID,
      name: editUrlName,
      url: editUrlPath
    });
    handleClose();
  };

  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={() => setShowAddModal(true)} variant="success" className="w-100 me-2">Добавить источник</Button>
        <Button onClick={() => setShowDeleteModal(true)} variant="danger" className="w-100 me-2">Удалить источник</Button>
        <Button onClick={() => openEditModal()} variant="warning" className="w-100">Изменить источник</Button>
      </ButtonGroup>

      <Modal show={showAddModal} onHide={handleClose}>
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
                value={newUrlName}
                onChange={(e) => setNewUrlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Путь к источнику</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите URL"
                value={newUrlPath}
                onChange={(e) => setNewUrlPath(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Отменить</Button>
          <Button variant="primary" onClick={handleSaveNewUrl}>Сохранить</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showDeleteModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление источника</Modal.Title>
        </Modal.Header>
        <Modal.Body>Точно удалить источник {props.currentUrlName}? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Отмена</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Удалить</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showEditModal} onHide={handleClose}>
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
                value={editUrlName}
                onChange={(e) => setEditUrlName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Путь к источнику</Form.Label>
              <Form.Control
                type="text"
                placeholder="Введите URL"
                value={editUrlPath}
                onChange={(e) => setEditUrlPath(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Отменить</Button>
          <Button variant="primary" onClick={handleSaveEdit}>Сохранить</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default ButtonsContainerComponent;
