var https = require("https");

var config = require("./config");

//original from stackoverflow.com/questions/9577611
// function getJSON(options, callback){
//   var req = https.request(options, function(res){
//     var output = "";
//     console.log(options.host + ":" + res.statusCode);
//     res.setEncoding("utf8");
//
//     res.on("data", function (chunk) {
//         output += chunk;
//     });
//
//     res.on("end", function() {
//         callback(output);
//     });
//   });
//
//   req.on("error", function(err) {
//     console.log("error: " + JSON.stringify(err));
//   });
//
//   req.end();
// }
//
// function getSheet(callback){
//   var options = {
//     host: "sheets.googleapis.com",
//     port: 443,
//     path: "/v4/spreadsheets/" + config.spreadsheetsID + "?key=" + config.apiKey,
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     }
//   };
//   getJSON(options, callback);
// }
//
// function getValue(callback, range){
//   var options = {
//     host: "sheets.googleapis.com",
//     port: 443,
//     path: "/v4/spreadsheets/" + config.spreadsheetsID + "/values/A1:ET" + range + "?majorDimension=ROWS&key=" + config.apiKey,
//     method: "GET",
//     headers: {
//         "Content-Type": "application/json"
//     }
//   };
//   getJSON(options, callback);
// }

module.exports = function sheets(){
  sheets.data = [];
  sheets.importData = function(file){
    console.log("get file");
    var content = file.buffer.toString();
    sheets.data = content.split(/(?:\r\n|\r|\n)/g).map( (element) => element.split('\t') ) ;
    //return sheets.data;
  }

  // if(!sheets.timerID){
  //   sheets.timerID = setInterval(() => {
  //     getSheet( (res) => {
  //       if(res){
  //         sheets.rowCount = JSON.parse(res).sheets[0].properties.gridProperties.rowCount;
  //         getValue( (res) => {
  //           if(res){
  //             sheets.raw = JSON.parse(res).values;
  //             sheets.data = sheets.raw;
  //
  //             //parse raw object
  //             //const header = sheets.raw[0];
  //
  //             // sheets.data = sheets.raw.slice(1).map( (element) => {
  //             //   let meal = {};
  //             //   for(let i = 0; i < element.length; i++){
  //             //     meal[header[i]] = element[i];
  //             //   }
  //             //   return meal;
  //             // });
  //
  //             console.log("JSON reloaded");
  //           }
  //         }, sheets.rowCount);
  //       }
  //     });
  //   }, 10000);
  // }
}
