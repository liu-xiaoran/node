var mongoose = require("mongoose");
// var uri = "mongodb://username:password@hostname:port/databasename";
var uri = "mongodb://localhost/mongoose";
//连接数据库
mongoose.connect(uri);

var BookSchema = new mongoose.Schema({
    name:String,
    author: String,
    publishTime:Date
});

mongoose.model('Book',BookSchema);