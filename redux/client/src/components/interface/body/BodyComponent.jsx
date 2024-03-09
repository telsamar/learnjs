import React from 'react';
import InfoComponent from './InfoComponent';
import ListComponent from './ListComponent';

function BodyComponent() {
  return (
    <div id="bodyComponent" className="d-flex flex-column flex-grow-1 p-3">
      <div id="listComponent" className="mb-3 bg-white border p-3">
        < ListComponent />
      </div>
      < InfoComponent />
    </div>
  );
}

export default BodyComponent;
