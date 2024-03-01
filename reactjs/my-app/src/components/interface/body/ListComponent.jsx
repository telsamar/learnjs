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

            handleClose={props.handleClose}
            handleConfirmDelete={props.handleConfirmDelete}

            showModal={props.showModal}
            modalMode={props.modalMode}
            urlName={props.urlName}
            setUrlName={props.setUrlName}
            urlPath={props.urlPath}
            setUrlPath={props.setUrlPath}
            handleOpenModal={props.handleOpenModal}
            handleSaveUrl={props.handleSaveUrl}
          />
        </div>
    </div>
  );
}

export default ListComponent;
