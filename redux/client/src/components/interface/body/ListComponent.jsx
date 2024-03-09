import React from 'react';
import { connect } from 'react-redux';
import ElementsContainerComponent from './ListComponent/ElementsContainerComponent';
import ButtonsContainerComponent from './ListComponent/ButtonsContainerComponent';

function ListComponent(props) {
  const currentUrlName = props.urls.find(url => url.id === props.currentURL_ID)?.name || "Выберите элемент";

  return (
    <div>
        <h4 className='text-center'>Список источников данных</h4>
        
        <div style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
          {currentUrlName}
        </div>

        < ElementsContainerComponent />

        <div style={{ marginTop: '20px' }}>
          < ButtonsContainerComponent />
        </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentURL_ID: state.allData.currentURL_ID,
  urls: state.allData.urls,
});

export default connect(mapStateToProps)(ListComponent);