import React from 'react';
import URLComponent from './ListComponent/URLComponent';
import ElementsContainerComponent from './ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from './ListComponent/ButtonsContainerComponent';

function ListComponent(props) {
  return (
    <div>
        <URLComponent state={props.state} />
        <ElementsContainerComponent state={props.state} />
        <ButtonsContainerComponent state={props.state} />
    </div>
  );
}

export default ListComponent;
