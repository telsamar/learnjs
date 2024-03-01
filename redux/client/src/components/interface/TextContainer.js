//----------------------scripts-------------------------
import React from 'react'
import { connect } from 'react-redux'

//components
//---------------------/scripts-------------------------


//-----------------------main---------------------------
function TextContainer (props) {
    console.log(props)
    return (
        <div className='bg-warning'>
            {props.mytext}
        </div> 
    );
}

//props
const mapStateToProps = (state) => {
    return {
        // foo: state.allInterface.foo,
        mytext: state.allData.mytext,
    }
}

//reducers
const mapDispatchToProps = (dispatch) => {
    return {
        // setFoo: (foo) => dispatch(act_setFoo(foo)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TextContainer); 
//-----------------------main---------------------------
