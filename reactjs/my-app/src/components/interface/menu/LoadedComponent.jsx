import React from 'react';

function LoadedComponent(props) {
  const { statusLoadedJSON, currentURL_ID } = props.state;

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

export default LoadedComponent;
