import React from 'react';
import CountRowComponent from './InfoComponent/CountRowComponent';
import CountColumnComponent from './InfoComponent/CountColumnComponent';
import JSONComponent from './InfoComponent/JSONComponent';

function InfoComponent(props) {
  return (
    <div className="border rounded p-3">
      <h4 className="text-center">Информация</h4>
      < CountRowComponent />
      < CountColumnComponent />
      < JSONComponent />
    </div>
  );
}

export default InfoComponent;
