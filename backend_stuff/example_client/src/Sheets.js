import 'whatwg-fetch';

const api_url = 'http://45.32.165.208/';

function sheets(callback){
  fetch(api_url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      callback(json);
    }).catch(function(ex) {
      console.log('parsing failed', ex);
    });
}

export default sheets;
