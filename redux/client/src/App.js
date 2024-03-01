// import { useState } from 'react'
import { SnackbarProvider } from 'notistack';

//components
// import BodyContainer from '@path_components/main/BodyContainer';

import MainComponent from '@path_components/main/MainComponent';

//---------------------/scripts-------------------------
function ProvApp() {
    // const { enqueueSnackbar } = useSnackbar();

    // const addSnackbar = (text, variant) => () => {
    //     enqueueSnackbar(text, { variant });
    // };

    return (
        <div className='d-flex flex-column  vh-100 header-main wrapper-window' >
            <MainComponent />
        </div>
    );
}


function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <ProvApp />
        </SnackbarProvider>
    );
}

export default App;


// import React from 'react';
// import MainComponent from '@path_components/main/MainComponent';

// function App() {
//   return (
//     <div>
//       <MainComponent />
//     </div>
//   );
// }

// export default App;
