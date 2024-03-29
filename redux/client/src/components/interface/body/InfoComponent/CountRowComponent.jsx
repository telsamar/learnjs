import React from 'react';
import { connect } from 'react-redux';

function CountRowComponent(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div style={{ flex: 1.5, border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '10px' }}>
        <span>Количество строк:</span>
      </div>
      <div style={{ flex: 0.375, border: '1px solid #ccc', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
        <span>{props.countRows}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countRows: state.allData.countRows,
});

export default connect(mapStateToProps)(CountRowComponent);
