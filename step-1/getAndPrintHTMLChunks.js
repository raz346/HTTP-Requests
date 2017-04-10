const https = require('https');
function getAndPrintHTMLChunks() {
  let chunkReceived = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  let fullAddress = 'https://'+requestOptions.host + requestOptions.path;
  // console.log(fullAddress);
  https.get(fullAddress,function (response) {  
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      chunkReceived += data + '\n';
      console.log('Chunk Received : ', chunkReceived);
    });
  });
}
getAndPrintHTMLChunks();