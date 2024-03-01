import { 
    LOAD_URLS_FROM_FILE,
} from './actions'

const defaultState = {
    urls: [
        { id: 1, name: "url_1", url: "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json" },
        ],
    loadedJSON: {},
    countRows: 0,
    countColumns: 0, 
    statusLoadedJSON: false,
    currentURL_ID: -1,
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case LOAD_URLS_FROM_FILE:
            return {
                ...state,
                urls: [...state.urls, ...action.payload],
            };
            
        default: 
            return state
    }
}