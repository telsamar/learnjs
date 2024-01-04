import React from 'react';
import ButtonsComponent from './ButtonsComponent';
import LoadedComponent from './LoadedComponent';

function MenuComponent(props) {
  return (
    <div id="menuComponent" className="bg-light d-flex flex-column justify-content-between p-3" style={{ flex: '0 0 20%' }}>
      <div>
        <h3 className="mb-3 text-center">МЕНЮ</h3>
        <ButtonsComponent state={props.state} setState={props.setState} />
      </div>
      <div>
        <LoadedComponent state={props.state} />
      </div>
    </div>
  );
}

export default MenuComponent;
