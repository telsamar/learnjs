//----------------------scripts-------------------------
import React from 'react'
import { connect } from 'react-redux'

import { act_setIsDisableButton, } from '@path_store/interface/actions'

//---------------------/scripts-------------------------

//-----------------------main---------------------------
function ButtonsContainer (props) {

    const handlerClickDisable = (e) => {
        switch (e.target.value) {
            case '1': props.setIsDisableButton(true)
                break

            case '2': props.setIsDisableButton(false)
                break

            default: return ''
        }
        
    }

    return (
        <div 
            className='m-2 d-flex flex-row justify-content-center align-items-center color-dark'
        > 
            <button 
                className='btn btn-danger'
                onClick={(e) => {
                    handlerClickDisable(e)
                }}
                value='1'
            >
                Disable
            </button>

            <button 
                className='btn btn-success'
                onClick={(e) => {
                    handlerClickDisable(e)
                }}
                value='2'
            >
                Enable
            </button>
            {props.is_disable_button?
                ('Не доступно'):
                ('Доступно')
            }
            
        </div>
    );
}


//props
const mapStateToProps = (state) => {
    return {
        is_disable_button: state.allInterface.is_disable_button,

    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {
        setIsDisableButton: (a) => dispatch(act_setIsDisableButton(a)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ButtonsContainer); 
//-----------------------main---------------------------
