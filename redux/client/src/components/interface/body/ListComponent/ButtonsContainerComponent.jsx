import React from 'react';
import { connect } from 'react-redux';
import { Button, ButtonGroup, Modal, Form } from 'react-bootstrap';
import { 
  act_setModalVisibility, 
  act_setModalMode, 
  act_setUrlName, 
  act_setUrlPath, 
  act_setDeleteModalVisibility 
} from '@path_store/interface/actions';

import {
   act_addUrl, 
   act_updateUrl,
   act_deleteUrl
} from '@path_store/data/actions';

function ButtonsContainerComponent(props) {
  const handleOpenModal = (mode, url = { name: '', path: '' }) => {
    props.setModalMode(mode);
    props.setUrlName(url.name);
    props.setUrlPath(url.path);
    props.setModalVisibility(true);
  };

  const handleSaveUrl = () => {
    if (props.modalMode === 'add') {
      props.addUrl({ name: props.urlName, url: props.urlPath });
    } else if (props.modalMode === 'edit') {
      props.updateUrl({ id: props.currentURL_ID, name: props.urlName, url: props.urlPath });
    }
    props.handleClose();
  };

  const handleDeleteButtonClick = () => {
    props.setDeleteModalVisibility(true);
  };

  const handleConfirmDelete = () => {
    if (props.currentURL_ID < 0) {
      console.log("Нет выбранного URL для удаления.");
      return;
    }

    props.deleteUrl(props.currentURL_ID);
    props.handleClose();
  };
  
  return (
    <>
      <ButtonGroup className="d-flex">
        <Button onClick={() => handleOpenModal('add')} variant="success" className="w-100 me-2">Добавить источник</Button>
        
        <Button onClick={() => handleDeleteButtonClick()} variant="danger" className="w-100 me-2">Удалить источник</Button>
        
        <Button onClick={() => 
          {
            const selectedUrl = props.urls.find(url => url.id === props.currentURL_ID);

            if (selectedUrl) {
              handleOpenModal('edit', { name: selectedUrl.name, path: selectedUrl.url });
            } else {
              alert('Выберите URL для редактирования.');
            }
          }
        } variant="warning" className="w-100">Изменить источник</Button>
      </ButtonGroup>

      <Modal show={props.showDeleteModal} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Удаление источника</Modal.Title>
        </Modal.Header>
        <Modal.Body>Точно удалить источник {props.currentUrlName}? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Отмена</Button>
          <Button variant="danger" onClick={handleConfirmDelete}>Удалить</Button>
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
          <Button variant="primary" onClick={handleSaveUrl}>{props.modalMode === 'add' ? 'Сохранить' : 'Обновить'}</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

//props
const mapStateToProps = (state) => ({
  currentURL_ID: state.allData.currentURL_ID,
  showDeleteModal: state.allInterface.showDeleteModal,
  currentUrlName: state.allData.urls.find(url => url.id === state.allData.currentURL_ID)?.name || '',
  showModal: state.allInterface.showModal,
  modalMode: state.allInterface.modalMode,
  urlName: state.allInterface.urlName,
  urlPath: state.allInterface.urlPath,
  urls: state.allData.urls,
});

//reducers
const mapDispatchToProps = (dispatch) => ({
  setModalVisibility: (isVisible) => dispatch(act_setModalVisibility(isVisible)),
  setModalMode: (mode) => dispatch(act_setModalMode(mode)),
  setUrlName: (name) => dispatch(act_setUrlName(name)),
  setUrlPath: (path) => dispatch(act_setUrlPath(path)),
  setDeleteModalVisibility: (isVisible) => dispatch(act_setDeleteModalVisibility(isVisible)),
  handleClose: () => {
    dispatch(act_setModalVisibility(false));
    dispatch(act_setDeleteModalVisibility(false));
    dispatch(act_setUrlName(''));
    dispatch(act_setUrlPath(''));
  },
  addUrl: (newUrl) => dispatch(act_addUrl(newUrl)),
  updateUrl: (updatedUrl) => dispatch(act_updateUrl(updatedUrl)),
  deleteUrl: (urlId) => dispatch(act_deleteUrl(urlId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainerComponent);
