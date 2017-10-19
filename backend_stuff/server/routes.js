var sheets = require('./sheets.js');
const config = require("./config");

sheets();
module.exports = function(app) {

  app.get('/',
		function(req, res){
			// render index
			res.end(JSON.stringify(sheets.data));
		}
	);

  app.get('/upload',
    function(req, res){
      res.sendFile(__dirname + '/upload.html');
    }
  );

  app.post('/upload',
    function(req, res){
      //console.log(JSON.stringify(req.file) + " " + req.body.pass);
      if(req.body.pass==config.uploadPassword&&req.file&&req.file.mimetype=='text/plain'){
        sheets.importData(req.file);
        res.sendFile(__dirname + '/success.html');
      }else{
        res.sendFile(__dirname + '/failed.html');
      }
    }
  );
};
