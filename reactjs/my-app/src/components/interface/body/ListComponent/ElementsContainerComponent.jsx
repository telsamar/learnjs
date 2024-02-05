import React from 'react';

function ElementsContainerComponent(props) {
  const handleDivSelection = (id) => {
    props.handleButtonClick(id);
  };

  return (
    <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
      {props.urls.map((url) => (
        <div 
          key={url.id}
          style={{
            padding: '10px',
            margin: '5px 0',
            backgroundColor: props.currentURL_ID === url.id ? '#28a745' : '#f8f9fa',
            color: props.currentURL_ID === url.id ? 'white' : 'black',
            cursor: 'pointer',
            borderRadius: '5px',
            textAlign: 'center',
            border: '1px solid black'
          }} 
          onClick={() => handleDivSelection(url.id)}
        >
          {url.name}
        </div>
      ))}
    </div>
  );
}

export default ElementsContainerComponent;
