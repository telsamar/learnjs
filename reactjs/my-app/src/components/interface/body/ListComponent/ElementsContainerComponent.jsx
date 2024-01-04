import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ElementsContainerComponent(props) {
  const { urls } = props.state;
  
  const [selectedUrlIndex, setSelectedUrlIndex] = useState(-1);

const handleButtonClick = async (index) => {
  setSelectedUrlIndex(index);
  try {
    const response = await fetch(urls[index].url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const json = await response.json();

    const newRowcount = Array.isArray(json) ? json.length : 1;

    const newColumncount = Array.isArray(json)
      ? (json[0] ? Object.keys(json[0]).length : 0)
      : Object.keys(json).length;

    props.setState(prevState => ({
      ...prevState,
      loadedJSON: json,
      statusLoadedJSON: true,
      currentURL_ID: index,
      countRows: newRowcount,
      countColumns: newColumncount
    }));
  } catch (error) {
    console.error("Could not load the URL:", error);
    props.setState(prevState => ({
      ...prevState,
      loadedJSON: {},
      statusLoadedJSON: false,
      currentURL_ID: index,
      countRows: 0,
      countColumns: 0
    }));
  }
};

  useEffect(() => {
    console.log('Текущее состояние:', props.state);
  }, [props.state]); 

  return (
    <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
      {urls.map((url, index) => (
        <Button
          key={index}
          variant={selectedUrlIndex === index ? 'success' : 'outline-secondary'}
          className="w-100 mb-2"
          onClick={() => handleButtonClick(index)}
        >
          {url.name}: {url.url}
        </Button>
      ))}
    </div>
  );
}

export default ElementsContainerComponent;
