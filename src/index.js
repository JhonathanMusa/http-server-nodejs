var http = require("http");
const url = require("url");
const querystring = require("querystring");
// var log = require('./modules/my-log');
var { info, error } = require("./modules/my-log");
const { countries } = require("countries-list");

var server = http.createServer(function  (req, res) {
    var parsed = url.parse(req.url)
    console.log("Parsed", parsed);
    // res.writeHead(200, { "Content-Type": "applica tion/json" });
    // res.write(JSON.stringify(countries.EC));
    // res.end();
var pathname = parsed.pathname;

var query = querystring.parse(parsed.query);
console.log("query", query);

  if (pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>HELLO</p></body></html>");
    res.end();
  } else if (pathname === "/exit") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p>BYE</p></body></html>");
    res.end();
  } else if (pathname === "/country") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(countries[query.code]));
    res.end();
  } else if (pathname === "/info") {
    let result = info(pathname);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(result);
    res.end();
  } else if (pathname === "/error") {
    // var result = log.error(req.url);
    let result = error(pathname);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(result);
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<html><body><p>NOT FOUND</p></body></html>");
    res.end();
  }
});

server.listen(4000);
console.log("Running on 4000");
