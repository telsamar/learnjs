import { SET_OBJECT, 
    DELETE_OBJECT, 
    DELETE_OBJECT_ARR, 
    ADD_OBJECT, 
    ADD_OBJECT_ARR,
    UPDATE_OBJECT, 
    UPDATE_TEMP_ELEMENT,
    UPDATE_TEMP_ELEMENT_ARR, 
    CLEAR_OBJECT, 


    SET_TEXT,

} from './actions'


const defaultState = {
    mytext: 'text from state',
    ind: 0,
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TEXT:
            return {
                ...state,
                mytext: action.payload
            }







        case SET_OBJECT: 
            return {
                ...state,
                [action.payload.key]: action.payload.value
            }
    
        case DELETE_OBJECT: 
            return {
                ...state,
                [action.payload.key]: state[action.payload.key].filter( a => ''+a.id !== ''+action.payload.id)
            }

        case DELETE_OBJECT_ARR: 
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name], 
                    [action.payload.arr]: [...state[action.payload.name][action.payload.arr].filter( (l, i) => 
                        +i !== +action.payload.num
                        )
                    ]
                }          
            }
            
        case ADD_OBJECT: 
            return {
                ...state,
                [action.payload.key]: [...state[action.payload.key], action.payload.value]
            }

        case ADD_OBJECT_ARR: 
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name], 
                    [action.payload.arr]: [
                        ...state[action.payload.name][action.payload.arr],
                        {...defaultState[action.payload.default]}
                    ]
                }
            }

            
        case UPDATE_OBJECT: 
            return {
                ...state,
                [action.payload.key]: [...state[action.payload.key].map( a => +a.id === +action.payload.id? action.payload.value:a)]
            }

        case UPDATE_TEMP_ELEMENT:
            return {
                ...state,
                [action.payload.name]: {...state[action.payload.name], [action.payload.key]: action.payload.value}
            }

        case UPDATE_TEMP_ELEMENT_ARR:
            return {
                ...state,
                [action.payload.name]: {
                    ...state[action.payload.name], 
                    [action.payload.arr]: [...state[action.payload.name][action.payload.arr].map( (l, i) => 
                        +i === +action.payload.num?
                            {...l, [action.payload.key]: action.payload.value}:
                            l
                        )
                    ]
                }
            }

        case CLEAR_OBJECT:
            return {
                ...state,
                [action.payload.name]: {...defaultState[action.payload.default]}
            }


            
            
        default: return state
    }
}
    
    
    