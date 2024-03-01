import React from 'react';

function LoadedComponent(props) {
  return (
    <div>
      <p>
        {props.currentURL_ID === -1
          ? 'Ожидание выбора данных'
          : props.statusLoadedJSON
          ? 'Данные загружены'
          : 'Данные не удалось загрузить'}
      </p>
    </div>
  );
}

export default LoadedComponent;
