var express = require('express')
app = express()
config = require('./configuration/config.js');


require('./configuration/config.express')(app);
require('./configuration/router.express')(app);


app.listen(config.express_port, function() {
	console.log('listening on port ' + config.express_port);
})