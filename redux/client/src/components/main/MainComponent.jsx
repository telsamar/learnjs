import React from 'react';
import BodyComponent from '../interface/body/BodyComponent';
import MenuComponent from '../interface/menu/MenuComponent';

function MainComponent() {
  
  return (
    <div id="mainComponent" className="d-flex h-100">
      < MenuComponent />

      < BodyComponent />
    </div>
  );
}

export default MainComponent;
