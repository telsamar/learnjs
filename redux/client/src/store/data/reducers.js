import { 
    LOAD_URLS_FROM_FILE,
    LOAD_URLS_FROM_LOCAL_STORAGE,
    CALCULATE_DATA_FROM_URL,

    LOAD_DATA_FOR_URL, 
    LOAD_DATA_SUCCESS, 
    LOAD_DATA_ERROR,

    ADD_URL, 
    UPDATE_URL,
    DELETE_URL,

    RESET_COUNTS,
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

        case LOAD_URLS_FROM_LOCAL_STORAGE:
            return {
                ...state,
                urls: action.payload,
            };

        case CALCULATE_DATA_FROM_URL:
            return {
                ...state,
                countRows: action.payload.countRows,
                countColumns: action.payload.countColumns,
            };

        case LOAD_DATA_FOR_URL:
            return {
                ...state,
                currentURL_ID: action.payload.currentURL_ID,
                statusLoadedJSON: false,
            };
        case LOAD_DATA_SUCCESS:
            return {
                ...state,
                loadedJSON: action.payload.data,
                currentURL_ID: action.payload.currentURL_ID,
                statusLoadedJSON: true,
            };
        case LOAD_DATA_ERROR:
            return {
                ...state,
                currentURL_ID: action.payload.currentURL_ID,
                statusLoadedJSON: false,
            };
              
        case RESET_COUNTS:
            return {
                ...state,
                countRows: 0,
                countColumns: 0,
            };

        case ADD_URL:
            return {
                ...state,
                urls: [...state.urls, action.payload],
            };
        case UPDATE_URL:
            return {
                ...state,
                urls: state.urls.map(url =>
                url.id === action.payload.id ? action.payload : url
                ),
            };
        case DELETE_URL:
            return {
                ...state,
                urls: state.urls.filter(url => url.id !== action.payload),
                currentURL_ID: -1,
                loadedJSON: {},
                statusLoadedJSON: false,
                countRows: 0,
                countColumns: 0,
            };
            
        default: 
            return state
    }
}