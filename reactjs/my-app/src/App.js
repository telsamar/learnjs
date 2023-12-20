import React, { useState } from 'react';
import MainComponent from './components/main/MainComponent';

function App() {
  const [state, setState] = useState({
    urls: [
      { name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
      { name: "url_2", url: "https://filesamples.com/samples/code/json/sample4.json" },
    ],
    loadedJSON: {},
    countRows: 0,
    countColumns: 0,
    statusLoadedJSON: false,
    currentURL_ID: -1
  });


  return (
    <div>
      <MainComponent state={state} setState={setState} />
    </div>
  );
}

export default App;
