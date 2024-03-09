import React from 'react';
import { connect } from 'react-redux';
import { act_loadDataForUrl } from '@path_store/data/actions';

function ElementsContainerComponent({ urls, currentURL_ID, loadDataForUrl }) {
  const handleButtonClick = (id) => {
    loadDataForUrl(id);
  };

  return (
    <div style={{ maxHeight: '150px', overflowY: 'auto', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
      {urls.map((url) => (
        <div 
          key={url.id}
          style={{
            padding: '10px',
            margin: '5px 0',
            backgroundColor: currentURL_ID === url.id ? '#28a745' : '#f8f9fa',
            color: currentURL_ID === url.id ? 'white' : 'black',
            cursor: 'pointer',
            borderRadius: '5px',
            textAlign: 'center',
            border: '1px solid black'
          }} 
          onClick={() => handleButtonClick(url.id)}
        >
          {url.name}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  urls: state.allData.urls,
  currentURL_ID: state.allData.currentURL_ID,
});

const mapDispatchToProps = (dispatch) => ({
  loadDataForUrl: (id) => dispatch(act_loadDataForUrl(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementsContainerComponent);