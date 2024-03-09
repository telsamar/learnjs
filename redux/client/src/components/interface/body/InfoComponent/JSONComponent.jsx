import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

function JSONComponent({ loadedJSON, statusLoadedJSON }) {
  return (
    <div>
      {statusLoadedJSON ? (
        <pre className="json-container border border-primary p-3 rounded">
          {JSON.stringify(loadedJSON, null, 2)}
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
