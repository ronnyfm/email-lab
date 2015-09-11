var port = 10001;
var express = require('express'); 
var server = express();

// Where the files reside
server.use(express.static(__dirname + '/tmp'));
 
server.listen(port, function() {
    console.log('server listening on port ' + port);
});