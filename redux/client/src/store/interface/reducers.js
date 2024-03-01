import { IS_DISABLE_BUTTON } from './actions'




const defaultState = {
    is_disable_button: false,

    somedata: [
        // {
        //     id: 0,
        //     name: '',
        //     color: '',
        //     elements: [
        //         {id: 0, text: ''},    
        //     ]
        // }
    ]
}


export const interfaceReducer = (state = defaultState, action) => {
    switch (action.type) {
        case IS_DISABLE_BUTTON: 
            return {
                ...state,
                is_disable_button: action.payload
            }

            
        default: return state
    }
}
