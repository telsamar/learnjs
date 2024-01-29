import React from 'react';
// import URLComponent from './ListComponent/URLComponent';
import ElementsContainerComponent from './ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from './ListComponent/ButtonsContainerComponent';

function ListComponent(props) {
  const { currentURL_ID, urls } = props.state;

  const currentUrlDisplay = currentURL_ID >= 0 && urls[currentURL_ID] ? urls[currentURL_ID].url : "Выберите элемент";

  return (
    <div>
        <h4 className='text-center'>Список источников данных</h4>
        
        <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
          {currentUrlDisplay}
        </div>

        <ElementsContainerComponent state={props.state} handleButtonClick={props.handleButtonClick} />

        <div style={{ marginTop: '20px' }}>
          <ButtonsContainerComponent state={props.state} handleAdd={props.handleAdd} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
        </div>
    </div>
  );
}

export default ListComponent;
