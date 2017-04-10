function getHTML(requestOptions,callback) {
  const https = require('https');
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
module.exports = getHTML;