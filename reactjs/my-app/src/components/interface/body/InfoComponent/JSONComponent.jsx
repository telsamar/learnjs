import React from 'react';
import { Alert } from 'react-bootstrap';

function JSONComponent(props) {
  const { loadedJSON, statusLoadedJSON } = props.state;

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

export default JSONComponent;
