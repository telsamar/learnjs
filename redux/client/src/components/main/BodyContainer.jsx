// //----------------------scripts-------------------------
// import React from 'react'
// import { connect } from 'react-redux'

// //components
// import TextContainer from '@path_components/interface/TextContainer'
// import ButtonsContainer from '@path_components/interface/ButtonsContainer'

// import { act_setText, } from '@path_store/data/actions'


// //---------------------/scripts-------------------------

// //-----------------------main---------------------------
// function BodyContainer (props) {

//     const handlerClickText = () => {
//         props.setText(Math.random())
        
//     }


//     return (
//         <div 
//             className='d-flex flex-column justify-content-center align-items-center vh-100 vw-100 color-dark'
//         > 
//             <TextContainer />

//             <button 
//                     className='btn btn-primary'
//                     onClick={() => {
//                         handlerClickText()
//                     }}
//                     disabled={props.is_disable_button}
//                 >
//                     Update text
//             </button>

//             <ButtonsContainer />

//         </div>
//     );
// }


// //props
// const mapStateToProps = (state) => {
//     return {
//         is_disable_button: state.allInterface.is_disable_button,

//     }
// }

// //reducers
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setText: (a) => dispatch(act_setText(a)),

        
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer); 
// //-----------------------main---------------------------
