import React from 'react';
import InfoComponent from './InfoComponent';
import ListComponent from './ListComponent';

function BodyComponent(props) {
  return (
    <div id="bodyComponent" className="d-flex flex-column flex-grow-1 p-3">
      <div id="listComponent" className="mb-3 bg-white border p-3">
        <ListComponent 
          currentURL_ID={props.currentURL_ID}
          urls={props.urls}
          handleButtonClick={props.handleButtonClick} 
          addUrl={props.addUrl} 
          deleteUrl={props.deleteUrl} 
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
      <InfoComponent 
        statusLoadedJSON={props.statusLoadedJSON}
        countRows={props.countRows}
        countColumns={props.countColumns}
        loadedJSON={props.loadedJSON}
      />
    </div>
  );
}

export default BodyComponent;
