import React from 'react';
import ButtonsComponent from '../interface/menu/ButtonsComponent';
import LoadedComponent from '../interface/menu/LoadedComponent';
import URLComponent from '../interface/body/ListComponent/URLComponent';
import ElementsContainerComponent from '../interface/body/ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from '../interface/body/ListComponent/ButtonsContainerComponent';
import InfoComponent from '../interface/body/InfoComponent';

const MainComponent = (props) => {
  // console.log("Props:", props);

  return (
    <div id="mainComponent" className="d-flex h-100">
      <div id="menuComponent" className="bg-light p-3" style={{ flex: '0 0 20%' }}>
        <h3 className="mb-3">МЕНЮ</h3>
        <ButtonsComponent state={props.state} />
        <LoadedComponent />
      </div>
      <div id="bodyComponent" className="d-flex flex-column flex-grow-1 p-3">
        <div id="listComponent" className="mb-3 bg-white border p-3">
          <h4>Список источников данных</h4>
          <URLComponent />
          <ElementsContainerComponent state={props.state} />
          <ButtonsContainerComponent state={props.state} />
        </div>
        <InfoComponent />
      </div>
    </div>
  );
}

export default MainComponent;
