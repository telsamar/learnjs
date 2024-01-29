import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ElementsContainerComponent(props) {
  const { urls } = props.state;
  
  const [selectedUrlIndex, setSelectedUrlIndex] = useState(-1);

  const handleButtonSelection = (index) => {
    setSelectedUrlIndex(index);
    props.handleButtonClick(index);
  };

  useEffect(() => {
    console.log('Текущее состояние:', props.state);
  }, [props.state]); 

  return (
    <div style={{ maxHeight: '150px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }} >
      {urls.map((url, index) => (
        <Button key={index} variant={selectedUrlIndex === index ? 'success' : 'outline-secondary'} className="w-100 mb-2" onClick={() => handleButtonSelection(index)} >
          {url.name}
        </Button>
      ))}
    </div>
  );
}

export default ElementsContainerComponent;
