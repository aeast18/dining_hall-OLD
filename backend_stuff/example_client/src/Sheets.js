import 'whatwg-fetch';

const api_url = 'http://localhost:8080/';

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
