import React from 'react';

function CountColumnComponent(props) {
  const { countColumns } = props.state;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div style={{ flex: 1.5, border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
        <span>Количество полей:</span>
      </div>
      <div style={{ flex: 0.375, border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        <span>{countColumns}</span>
      </div>
    </div>
  );
}

export default CountColumnComponent;
