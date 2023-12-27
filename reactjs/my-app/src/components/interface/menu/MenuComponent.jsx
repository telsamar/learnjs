import React from 'react';
import ButtonsComponent from './ButtonsComponent';
import LoadedComponent from './LoadedComponent';

function MenuComponent(props) {
  return (
    <div id="menuComponent" className="bg-light p-3" style={{ flex: '0 0 20%' }}>
      <h3 className="mb-3">МЕНЮ</h3>
      <ButtonsComponent state={props.state} />
      <LoadedComponent state={props.state} />
    </div>
  );
}

export default MenuComponent;
