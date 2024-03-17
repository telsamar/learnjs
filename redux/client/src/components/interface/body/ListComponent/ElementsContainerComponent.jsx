import React from 'react';
import { connect } from 'react-redux';

import {
  act_loadDataForUrlRequest, 
  act_loadDataForUrlSuccess, 
  act_loadDataForUrlError,
  act_resetCounts,
} from '@path_store/data/actions';

import { 
  loadDataForUrl 
} from '@path_services/functions';

function ElementsContainerComponent(props) {
  const handleButtonClick = (id) => {
    props.loadDataForUrlWithDispatch(id);
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
  loadDataForUrlWithDispatch: (id) => {
    dispatch(async (dispatch, getState) => {
      const { urls } = getState().allData;
      const urlObject = urls.find(url => url.id === id);
      if (!urlObject) {
        console.error("Ссылка не найдена:", id);
        dispatch(act_loadDataForUrlError(id));
        return;
      }

      dispatch(act_loadDataForUrlRequest(id));

      try {
        const result = await loadDataForUrl(urlObject.url);
        if (result.success) {
          dispatch(act_loadDataForUrlSuccess(result.data, id));
        } else {
          dispatch(act_loadDataForUrlError(id));
        }
      } catch (error) {
        dispatch(act_loadDataForUrlError(id));
      }
    });
    dispatch(act_resetCounts(id));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ElementsContainerComponent);
