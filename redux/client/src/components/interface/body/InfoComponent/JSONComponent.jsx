import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

function JSONComponent(props) {
  return (
    <div>
      {props.statusLoadedJSON ? (
        <pre className="json-container border border-primary p-3 rounded">
          {JSON.stringify(props.loadedJSON, null, 2)}
        </pre>
      ) : (
        <Alert variant="info">
          Содержимое JSON будет отображено здесь после загрузки.
        </Alert>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  loadedJSON: state.allData.loadedJSON,
  statusLoadedJSON: state.allData.statusLoadedJSON,
});

export default connect(mapStateToProps)(JSONComponent);
