import React from 'react';
import URLComponent from './ListComponent/URLComponent';
import ElementsContainerComponent from './ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from './ListComponent/ButtonsContainerComponent';

function ListComponent(props) {
  return (
    <div>
        <h4 className='text-center'>Список источников данных</h4>
        <URLComponent state={props.state} />
        <ElementsContainerComponent state={props.state} setState={props.setState} />
        <div style={{ marginTop: '20px' }}>
          <ButtonsContainerComponent state={props.state} />
        </div>
    </div>
  );
}

export default ListComponent;
