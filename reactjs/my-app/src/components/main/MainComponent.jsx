import React from 'react';
import BodyComponent from '../interface/body/BodyComponent';
import MenuComponent from '../interface/menu/MenuComponent';

function MainComponent(props) {
  return (
    <div id="mainComponent" className="d-flex h-100">
      <MenuComponent state={props.state} />
      <BodyComponent state={props.state} />
    </div>
  );
}

export default MainComponent;
