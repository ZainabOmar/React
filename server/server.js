var express = require('express');
var port = process.env.PORT || 8000

var app = express();

require('./middleware.js')(app, express);

app.listen(port, function() {
    console.log("App is running on port " + port);
});
