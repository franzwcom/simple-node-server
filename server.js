/*
 *	simple server + a simple express js :D
 *	--------------------------------------------------------
 *	Source: Mean machine
 */

/*
 * declaring the modules
 */
var http = require('http');
var fs = require('fs');


/*
 * creating the server
 */

http.createServer(function(req, res) {
    // write the server and set config
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    });

    // get the index.html  and  using fs

    var readStream = fs.createReadStream(__dirname + '/index.html');

    // send the html
    readStream.pipe(res);

}).listen(1337);

// listening

console.log('server at localhost:1337');
