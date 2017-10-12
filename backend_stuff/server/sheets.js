var https = require("https");

const spreadsheetsID = "1SEuFXjUtNFTZkp1xSInLBa1ydE4EFE6lOUuHqKnyy5o";
const apiKey = "AIzaSyCDDfmqAa9O3q--Mp3XCXne3dNqRVgglBg";

//original from stackoverflow.com/questions/9577611
function getJSON(callback){
  var options = {
    host: "sheets.googleapis.com",
    port: 443,
    path: "/v4/spreadsheets/" + spreadsheetsID + "/values/A1:H200?majorDimension=ROWS&key=" + apiKey,
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
  };

  var req = https.request(options, function(res){
    var output = "";
    console.log(options.host + ":" + res.statusCode);
    res.setEncoding("utf8");

    res.on("data", function (chunk) {
        output += chunk;
    });

    res.on("end", function() {
        callback(output);
    });
  });

  req.on("error", function(err) {
    console.log("error: " + JSON.stringify(err));
  });

  req.end();
}

module.exports = function sheets(){
  if(!sheets.timerID){
    sheets.timerID = setInterval(() => {
      getJSON( (res) => {
        sheets.data = JSON.parse(res).values;
        console.log("JSON reloaded");
      });
    }, 10000);
  }
}
