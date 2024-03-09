import React from 'react';
import { connect } from 'react-redux';

function LoadedComponent({ currentURL_ID, statusLoadedJSON }) {
  return (
    <div>
      <p>
        {currentURL_ID === -1
          ? 'Ожидание выбора данных'
          : statusLoadedJSON
          ? 'Данные загружены'
          : 'Данные не удалось загрузить'}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentURL_ID: state.allData.currentURL_ID,
  statusLoadedJSON: state.allData.statusLoadedJSON,
});

export default connect(mapStateToProps)(LoadedComponent);
