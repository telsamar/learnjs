import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { act_loadUrlsFromFile, act_loadUrlsFromLocalStorage, act_calculateDataFromUrl} from '@path_store/data/actions';

function ButtonsComponent(props) {  

  const handleLoadFromFile = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.txt';

    fileInput.onchange = e => {
      const file = e.target.files[0];
      props.loadUrls(file);
    };

    fileInput.click();
  };

  const handleSave = () => {
    console.log('Содержимое props.urls', props.urls);
    const serializedUrls = JSON.stringify(props.urls);
    localStorage.setItem('urls', serializedUrls);
    console.log('Список URL успешно сохранен в Local Storage');
  };

  const handleLoad = () => {
    props.loadUrlsFromLocalStorage();
  };

  const handleCalculate = () => {
    const { currentURL_ID } = props;
    props.calculateData(currentURL_ID);
  };
  
  return (
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handleLoadFromFile} className="text-center">Загрузить из файла</Button>
      <Button variant="primary" onClick={handleLoad} className="text-center">Загрузить</Button>
      <Button variant="primary" onClick={handleSave} className="text-center">Сохранить</Button>
      <Button variant="primary" onClick={handleCalculate} className="text-center">Рассчитать</Button>
    </div>
  );
}

//props
const mapStateToProps = (state) => ({
  urls: state.allData.urls,
  currentURL_ID: state.allData.currentURL_ID,
});

//reducers
const mapDispatchToProps = (dispatch) => ({
  loadUrls: (file) => dispatch(act_loadUrlsFromFile(file)),
  loadUrlsFromLocalStorage: () => dispatch(act_loadUrlsFromLocalStorage()),
  calculateData: (urlId) => dispatch(act_calculateDataFromUrl(urlId)),
});


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsComponent);