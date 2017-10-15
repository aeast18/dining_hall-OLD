var sheets = require("./sheets.js");

sheets();
module.exports = function(app) {

  app.get('/',
		function(req, res){
			// render index
			res.end(JSON.stringify(sheets.data));
		}
	);
};
