// //------------------------Generate random color-------------------------------
// export const getRandomColor = () => {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }
// //-----------------------/Generate random color-------------------------------


// //------------------Create date time string from Date-------------------------
// export const generateDateString = (dt, pref = '', T = ' ', P = '-', revers = false) => {
//     let dt_ret = dt.getFullYear()+P+
//                  (dt.getMonth()+1).toString().padStart(2,0)+P+
//                  dt.getDate().toString().padStart(2,0);
//     if (revers) {
//         dt_ret = dt.getDate().toString().padStart(2,0)+P+
//                  (dt.getMonth()+1).toString().padStart(2,0)+P+
//                  dt.getFullYear();
//     }
//     switch (pref) {
//         case ('begin'): {
//             dt_ret += T+'00:00:00';
//             break;
//         }
//         case ('end'): {
//             dt_ret += T+'23:59:59';
//             break;
//         }
//         case ('time'): {
//             dt_ret = dt.getHours().toString().padStart(2,0)+':'+
//             dt.getMinutes().toString().padStart(2,0)+':'+
//             dt.getSeconds().toString().padStart(2,0);
//             break;
//         }
//         case ('date'): {
            
//             break;
//         }
        
//         default : {
//             dt_ret += T+dt.getHours().toString().padStart(2,0)+':'+
//             dt.getMinutes().toString().padStart(2,0)+':'+
//             dt.getSeconds().toString().padStart(2,0);
//         }
//     }
//     return dt_ret
// }
// //-----------------/Create date time string from Date-------------------------


// //-----------------------------Open file dialog-------------------------------
// export const openFile = (filename, data) => {
//     const blob = new Blob([data], {type: 'application/octet-binary'});
//     if(window.navigator.msSaveOrOpenBlob) {
//         window.navigator.msSaveBlob(blob, filename);
//     }
//     else{
//         const elem = window.document.createElement('a');
//         elem.href = window.URL.createObjectURL(blob);
//         elem.download = filename;        
//         document.body.appendChild(elem);
//         elem.click();        
//         document.body.removeChild(elem);
//     }
// }
// //----------------------------/Open file dialog-------------------------------

