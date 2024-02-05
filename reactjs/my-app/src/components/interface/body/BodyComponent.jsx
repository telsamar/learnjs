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
          handleAdd={props.handleAdd} 
          handleDelete={props.handleDelete} 
          handleEdit={props.handleEdit} 
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
