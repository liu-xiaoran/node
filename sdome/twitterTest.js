var http = require('http'),
    assert = require('assert')

var opts = {
    host:'localhost',
    port:8080,
    path:'/send',
    method: 'POST',
    headers:{'content-type':'application/x-www-form-urlencoded'}
}