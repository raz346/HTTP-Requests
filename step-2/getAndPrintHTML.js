const https = require('https');
function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  let fullAddress = 'https://'+requestOptions.host + requestOptions.path;
  // console.log(fullAddress);
  https.get(fullAddress,(response) => {  
     let chunkReceived = '';
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data',(data) => {
      chunkReceived += data ;
    });
    response.on('end', () => {
      console.log(chunkReceived);
    });  
  });
}
getAndPrintHTMLChunks();