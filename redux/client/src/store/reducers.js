import { combineReducers } from 'redux'

import { dataReducer } from './data/reducers'
import { interfaceReducer } from './interface/reducers'


export default combineReducers({
    allData: dataReducer,
    allInterface: interfaceReducer,
})