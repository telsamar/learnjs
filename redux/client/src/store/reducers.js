import { combineReducers } from 'redux'

import { dataReducer } from './data/reducers' // все основное
import { interfaceReducer } from './interface/reducers' // все про модалку


export default combineReducers({
    allData: dataReducer,
    allInterface: interfaceReducer,
})