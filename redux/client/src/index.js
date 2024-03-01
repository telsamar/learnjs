import ReactDOM from 'react-dom/client';
// import {io} from 'socket.io-client'
import App from './App';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import rootReduce from './store/reducers'
import { thunk } from 'redux-thunk';


//-----------------------CSS----------------------------
import 'antd/dist/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'leaflet/dist/leaflet.css';
import "allotment/dist/style.css";
import './index.sass';
//-----------------------/CSS---------------------------


import { } from '@path_services/api'

import { } from '@path_store/interface/actions'

import {  } from '@path_store/data/actions'

//------------------configurations----------------------
//Development settings
export let serverName = process.env.REACT_APP_PROD_SERVERNAME;
export let listenerName = process.env.REACT_APP_PROD_LISTENER;


if (process.env.NODE_ENV === 'development') {
    serverName = process.env.REACT_APP_DEV_SERVERNAME;
}

console.log(`*********************************************************************************`)
console.log(`************${new Date()}*************`)
console.log('run from IP: ' + listenerName)

//Redux store init
let initialStore = {};
export const store = createStore(rootReduce, initialStore, applyMiddleware(thunk));

//-----------------/configurations----------------------


// API_getDataTA();



//----------------------Sockets-------------------------
// const socket = io(serverName, {
//         'force new connection': true
//     }
// )                                

// socket.on('connection', () => {
//     console.log('Connect to socket server')
//     console.log(socket.id)
//     // store.dispatch(act_setSocketID(socket.id))
// })


// socket.on("connect", () => {
//     console.log('connect to socket server with id = '+socket.id) 
//     // store.dispatch(act_setSocketID(socket.id))

//   });

// socket.io.on("reconnect", (attempt) => {
//     console.log('...try reconnect to socket server') 
// });

// socket.on('connect_error', (e)=>{
//     console.log('connection to socket error')
//     setTimeout(()=>socket.connect(),5000)
// })


// socket.on('message', (data) => {
//     console.log('get update message');
//     // API_getExchangeMessages();
// })

//---------------------/Sockets-------------------------




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);



