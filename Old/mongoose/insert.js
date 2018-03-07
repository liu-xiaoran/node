var mongoose = require("mongoose");
require("./mo.js");

var Book = mongoose.model("Book");

var book = new Book({
    name:"liu",
    author:"ran",
    publishTime:new Date()
});

book.save(
    function(err){
        console.log("status",err?"failed":"success");
        
    }
);