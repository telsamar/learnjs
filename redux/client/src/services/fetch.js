const qs = require("qs");


//********************* Fetch API ************************
// Fetch common
// settings = {
    //          --- necessary ---
//      method,         // GET POST
//      adress,         // URL a API Server
//      api,            // API a method
//      callback        // a callback for the recievied data
//              --- optionally ---
//      body,           // a body of the request
//      header,         // a header of the request
//      addParamToPOST, // add param like in GET to POST request
//      showURL,        // show URL of the request for a debugging
//      showBody,       // show Body of the request for a debugging
//      form,           // set a form type of the request when using POST    
//      stringify,      // stringify get parametres 
//      TSV,            // Read TSV format response
//      showFullError   // Show full message of error and response
// }
// type= 'callback' or 'promises' 
export const fetchCommon = async (settings, type='promises') => {
    if (settings.method && settings.adress && settings.api && (settings.callback || type==='promises')) {
        const fBody =  {
            method: settings.method,
            crossDomain: true,
        };
        
        if (settings.header) {
            fBody.headers = settings.header;
        }

        if (settings.method === 'post' && settings.body) {
            if (settings.form) {
                fBody.body  = new URLSearchParams(settings.body)     
            }
            else {
                fBody.body = JSON.stringify(settings.body);
            }
        };

        let urlParameters = '';

        if ((settings.method === 'get' || settings.addParamToPOST === true) && settings.body) { 
            if (settings.stringify) {
                urlParameters = '?'+qs.stringify(settings.body)
            }
            else {
                urlParameters += '?'+Object.entries(settings.body).map(e => e.join('=')).join('&');
            }
        };

        const URL =  settings.adress + settings.api + urlParameters;
    
        if (settings.showURL) {console.log(URL) };
        if (settings.showBody) {console.log(fBody) };

        if (type==='callback') {
            return await fetch(URL, fBody)
                .then(response => {
                    if (!settings.TSV) {

                        return response.json()
                        .then(data => {
                            if (typeof data.error == 'undefined') {
                                return settings.callback(data);     
                            }
                            else {
                                console.log('error:')
                                console.log(data.error)
                                return undefined
                            }
                        })
                        .catch(error => {
                            console.log('json error');
                            console.log(error.message);
                            if (settings.showFullError) {
                                console.log(response)
                            };
                            return undefined
                        })   
                    }
                    else {
                        response.text()
                        .then(txt => {
                            return settings.callback(tsvJSON(txt))
                        })
                        .catch(error => {
                            console.log('tsv error');
                            console.log(error.message);
                            if (settings.showFullError) {
                                console.log(response)
                            };
                            return undefined
                        })   
                       
                    }
                })
                .catch(error => {  
                    console.log('Fetch failed');  
                    if (settings.showFullError) {
                        console.log(error)
                    };
                    return undefined 
                })
        }

        if (type==='promises') {
            return await new Promise((resolve, reject) => {
                fetch(URL, fBody)
                .then(response => {
                    if (!settings.TSV) {
                        response.json()
                        .then(data => {
                            if (typeof data.error == 'undefined') {
                                resolve(data);   
                            }
                            else {
                                console.log('error:')
                                console.log(data.error)
                                resolve(null)
                                // reject(undefined);
                            }
                        })
                        .catch(error => {
                            console.log('json error');
                            console.log(error.message);
                            if (settings.showFullError) {
                                console.log(response)
                            };
                            resolve(null)
                            // reject(undefined);
                        })  
                    }
                    else {
                        response.text()
                        .then(txt => {
                            console.log(txt)
                            resolve(tsvJSON(txt))
                        })
                        .catch(error => {
                            console.log('tsv error');
                            console.log(error.message);
                            if (settings.showFullError) {
                                console.log(response)
                            };
                            resolve(null)
                            // reject(undefined);
                        })  
                    }
                   
                })
                .catch(error => {  
                    console.log('Fetch failed');  
                    if (settings.showFullError) {
                        console.log(error)
                    };
                    resolve(null)
                    // reject(undefined);
                })


            });

        }
    }
    else {
        if (type==='promises') {
            throw 'Заполните все поля: method, adress и api'

        }
        if (type==='callback') {
            throw 'Заполните все поля: method, adress, api и callback'

        }
    }
}


const tsvJSON = (tsv) => {
    return tsv.split('\n')
    .map(line => line.split('\t'))
    .reduce((a, c, i, d) => {
      if (i) {
        const item = Object.fromEntries(c.map((val, j) => [d[0][j], val]))
        return a ? [...a, item] : [item]
      }
    }, [])
}


// module.exports = {
//     fetchCommon
// }