export const SET_OBJECT = 'SET_OBJECT';
export const DELETE_OBJECT = 'DELETE_OBJECT';
export const DELETE_OBJECT_ARR = 'DELETE_OBJECT_ARR';
export const ADD_OBJECT = 'ADD_OBJECT';
export const ADD_OBJECT_ARR = 'ADD_OBJECT_ARR';
export const UPDATE_OBJECT = 'UPDATE_OBJECT';
export const UPDATE_TEMP_ELEMENT = 'UPDATE_TEMP_ELEMENT';
export const UPDATE_TEMP_ELEMENT_ARR = 'UPDATE_TEMP_ELEMENT_ARR';
export const CLEAR_OBJECT = 'CLEAR_OBJECT';



export const SET_TEXT = 'SET_TEXT';


export const act_setText = (result) => (
    {
        type: SET_TEXT,
        payload: result
    }
)









export const act_setObject = (result) => (
    {
        type: SET_OBJECT,
        payload: result
    }
)

export const act_deleteObject = (result) => (
    {
        type: DELETE_OBJECT,
        payload: result
    }
)

export const act_deleteObjectArr = (result) => (
    {
        type: DELETE_OBJECT_ARR,
        payload: result
    }
)

export const act_addObject= (result) => (
    {
        type: ADD_OBJECT,
        payload: result
    }
)

export const act_addObjectArr = (result) => (
    {
        type: ADD_OBJECT_ARR,
        payload: result
    }
)

export const act_updateObject = (result) => (
    {
        type: UPDATE_OBJECT,
        payload: result
    }
)

export const act_updateTempElement = (result) => (
    {
        type: UPDATE_TEMP_ELEMENT,
        payload: result
    }
)

export const act_updateTempElementArr = (result) => (
    {
        type: UPDATE_TEMP_ELEMENT_ARR,
        payload: result
    }
)

export const act_clearObject = (result) => (
    {
        type: CLEAR_OBJECT,
        payload: result
    }
)

