const https = require('https');
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};
function getHTML(requestOptions,callback) {
  let fullAddress = 'https://'+requestOptions.host + requestOptions.path;
  https.get(fullAddress,(response) => {  
     let chunkReceived = '';
    response.setEncoding('utf8');
    response.on('data',(data) => {
      chunkReceived += data ;
    });
    response.on('end', () => {
      callback(chunkReceived);
    });  
  });
}
function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions,printHTML);