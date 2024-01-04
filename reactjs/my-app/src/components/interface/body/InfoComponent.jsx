import React from 'react';
import CountRowComponent from './InfoComponent/CountRowComponent';
import CountColumnComponent from './InfoComponent/CountColumnComponent';
import JSONComponent from './InfoComponent/JSONComponent';

function InfoComponent(props) {
  return (
    <div className="border rounded p-3">
      <h4 className="text-center">Информация</h4>
      <CountRowComponent state={props.state} />
      <CountColumnComponent state={props.state} />
      <JSONComponent state={props.state} />
    </div>
  );
}

export default InfoComponent;
