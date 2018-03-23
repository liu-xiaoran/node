var express = require("express");
var app = express() ;

var path = require('path');
//链接本地数据库
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/imooc')
console.log('MongoDB connection success!');

var Movie = require('./models/movie')

app.locals.moment = require('moment')
app.set('views','./views/pages');
app.set('view engine','pug');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))

var _underscore = require('underscore')

app.use(express.static(path.join(__dirname,'public')));

var port = process.env.PORT || 3000;
app.listen(port);

console.log("starred on: "+port);
//add route

app.get('/',function(req,res){
    Movie.fetch(function(err,movies){
        if(err){
            console.log(err);
        }
        res.render('index',{
            title: '小然电影网',
            movies:movies
        })
    })    
})

app.get('/detail/:id',function(req,res){
    var id = req.params.id

    Movie.findById(id,function(err,movie){
        res.render('detail',{
            title:movie.title,
            movie:movie
        })
    })
})

app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title: '管理',
        movie:{
            title:'',
            doctor:'',
            country:'',
            year:'',
            poster:'',
            video:'',
            summary:'',
            language:''
        }
    })
})

app.get('/admin/list',function(req,res){

    Movie.fetch(function(err,movies){
        if(err){
            console.log(err);
        }

        res.render('list',{
            title: '列表',
            movies:movies
        })
    })    
})
app.get('/admin/update/:id',function(req,res){
    var id = req.params.id

    if(id){
        Movie.findById(id,function(err,movie){
            res.render('admin',{
                title:'后台更新页',
                movie:movie
            })
        })
    }
})


// admin post movie
app.post('/admin/movie/new',function(req,res){
    var id = req.body.movie._id
    var movieObj = req.body.movie
    var _movie = null;
    
    if(id){
        Movie.findById(id,function(err,movie){
            if(err){
                console.log(err);
            }

            _movie = _underscore.extend(movie,movieObj)
            _movie.save(function(err,movie){
                if(err){
                    console.log('更新错误');
                    console.log(err);
                }

                res.redirect('/detail/'+movie._id)
            })
        })
    }else{
        _movie = new Movie({
            doctor: movieObj.doctor,
            title: movieObj.title,
            country: movieObj.country,
            year: movieObj.year,
            poster: movieObj.poster,
            video: movieObj.video,
            summary: movieObj.summary,
            language: movieObj.language
        })

        _movie.save(function(err,movie){
            if(err){
                console.log('存储错误');
                console.log(err);
            }

            res.redirect('/detail/'+movie._id)
        })
    }
})

app.delete('/admin/list', function (req, res) {
    var id = req.query.id;
    if (id) {
        Movie.remove({_id: id}, function (err, movie) {
            if (err) {
                console.log(err);
            } else {
                res.json({success: 1});
            }
        });
    }
});