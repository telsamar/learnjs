import React from 'react';
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

export default JSONComponent;
