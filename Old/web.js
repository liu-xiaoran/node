var http = require("http");

var request = function(req,res){
    res.end("hello");
};

var web = http.createServer(request);

web.listen(1800);
console.log("1800");
