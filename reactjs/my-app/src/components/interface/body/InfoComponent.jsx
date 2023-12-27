import React from 'react';
import CountRowComponent from './InfoComponent/CountRowComponent';
import CountColumnComponent from './InfoComponent/CountColumnComponent';
import JSONComponent from './InfoComponent/JSONComponent';

function InfoComponent(props) {
  return (
    <div>
      <CountRowComponent state={props.state} />
      <CountColumnComponent state={props.state} />
      <JSONComponent state={props.state} />
    </div>
  );
}

export default InfoComponent;



