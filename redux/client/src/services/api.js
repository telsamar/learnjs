import { store } from '@path_main/index';

// import {  } from 'path_store/data/actions'

import {fetchCommon} from './fetch'

import {serverName} from '@path_main/index.js'

import { act_setObject, 
         act_setText, } from '@path_store/data/actions'
        



//----------------------------Common APIs-------------------------------
export const commonAPIget = async (api_name, key_dispatch_name, body = null, isDispatch = false, getAPI = null) => {
    const settings = {
        method: 'post',
        adress: serverName,
        api: `/api/${api_name}`,
        header: {
            'Content-Type': 'application/json',
        },
    };
    const curUser = store.getState().allInterface.curUser;
    if (body) {
        settings.body = {
            ...settings.body,
            ...body,
            actioner: curUser?curUser.login_user:null
        }
    };

    const data = await fetchCommon(settings);
    if (data && isDispatch && data.success) {
        store.dispatch(act_setObject({
            key: key_dispatch_name,
            value: data.success
        }))
    };
    if (data && data.success && getAPI) getAPI();
    return data
}
//---------------------------/Common APIs-------------------------------



//-----------------------------Get APIs---------------------------------
const API_getText = () => {
    commonAPIget('/getText', act_setText)
}
// //----------------------------/Get APIs---------------------------------


// //---------------------------Insert APIs--------------------------------

// //--------------------------/Insert APIs--------------------------------


// //---------------------------Update APIs--------------------------------

// //--------------------------/Update APIs--------------------------------



// //---------------------------Delete APIs--------------------------------

// //--------------------------/Delete APIs--------------------------------


// //-----------------------------Set APIs---------------------------------

// //----------------------------/Set APIs---------------------------------


// //----------------------------Send APIs---------------------------------

// //---------------------------/Send APIs---------------------------------





