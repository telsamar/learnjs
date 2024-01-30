import React, { useState } from 'react';

function ElementsContainerComponent(props) {
  const { urls } = props.state;
  const [selectedUrlIndex, setSelectedUrlIndex] = useState(-1);

  const handleDivSelection = (index) => {
    setSelectedUrlIndex(index);
    props.handleButtonClick(index);
  };

  return (
    <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
      {urls.map((url, index) => (
          <div 
            key={index} 
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: selectedUrlIndex === index ? '#28a745' : '#f8f9fa',
              color: selectedUrlIndex === index ? 'white' : 'black',
              cursor: 'pointer',
              borderRadius: '5px',
              textAlign: 'center',
              border: '1px solid black'
            }} 
            onClick={() => handleDivSelection(index)}
          >
          {url.name}
        </div>
      ))}
    </div>
  );
}

export default ElementsContainerComponent;
