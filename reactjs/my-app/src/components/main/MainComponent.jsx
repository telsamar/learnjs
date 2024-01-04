import React, { useState } from 'react';
import BodyComponent from '../interface/body/BodyComponent';
import MenuComponent from '../interface/menu/MenuComponent';

function MainComponent() {
  const [state, setState] = useState({
    urls: [
      { name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
      { name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
      { name: "url_3", url: "https://my-json-server.typicode.com/typicode/demo/db" },
      { name: "url_4", url: "https://my-json-server.typicode.com/typicode/demo/comments" },
    ],
    loadedJSON: {},
    countRows: 0,
    countColumns: 0,
    statusLoadedJSON: false,
    currentURL_ID: -1
  });

  return (
    <div id="mainComponent" className="d-flex h-100">
      <MenuComponent state={state} setState={setState} />
      <BodyComponent state={state} setState={setState} />
    </div>
  );
}

export default MainComponent;
