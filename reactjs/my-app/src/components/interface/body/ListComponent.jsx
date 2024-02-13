import React from 'react';
import ElementsContainerComponent from './ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from './ListComponent/ButtonsContainerComponent';

function ListComponent(props) {
  const currentUrlDisplay = props.currentURL_ID >= 0 && props.urls[props.currentURL_ID] ? props.urls[props.currentURL_ID].url : "Выберите элемент";

  return (
    <div>
        <h4 className='text-center'>Список источников данных</h4>
        
        <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
          {currentUrlDisplay}
        </div>

        <ElementsContainerComponent 
          currentURL_ID={props.currentURL_ID}
          urls={props.urls}
          handleButtonClick={props.handleButtonClick} 
        />

        <div style={{ marginTop: '20px' }}>
          <ButtonsContainerComponent 
            addUrl={props.addUrl} 
            deleteUrl={props.deleteUrl} 
            urls={props.urls}
            currentURL_ID={props.currentURL_ID}
            currentUrlName={props.currentUrlName}
            updateUrl={props.updateUrl} 

            showDeleteModal={props.showDeleteModal}
            setShowDeleteModal={props.setShowDeleteModal}
            showAddModal={props.showAddModal}
            setShowAddModal={props.setShowAddModal}
            showEditModal={props.showEditModal}
            newUrlName={props.newUrlName}
            setNewUrlName={props.setNewUrlName}
            newUrlPath={props.newUrlPath}
            setNewUrlPath={props.setNewUrlPath}
            editUrlName={props.editUrlName}
            setEditUrlName={props.setEditUrlName}
            editUrlPath={props.editUrlPath}
            setEditUrlPath={props.setEditUrlPath}

            handleClose={props.handleClose}
            handleConfirmDelete={props.handleConfirmDelete}
            handleSaveNewUrl={props.handleSaveNewUrl}
            openEditModal={props.openEditModal}
            handleSaveEdit={props.handleSaveEdit}
          />
        </div>
    </div>
  );
}

export default ListComponent;
