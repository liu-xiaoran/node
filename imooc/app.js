var express = require("express");
var path = require('path')
var port = process.env.PORT || 3000;
var app = express() ;

app.set('views','./views/pages');
app.set('view engine','pug');
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname,'bower_components')));
app.listen(port);

console.log("starred on: "+port);
//add route
app.get('/',function(req,res){
    res.render('index',{
        title: 'imooc homePage',
        movies: [
            {
                title:"机械哈哈",
                _id:1,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp'
            },
            {
                title:"hhah哈哈",
                _id:2,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp'
            },
            {
                title:"哈哈哈哈",
                _id:3,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp'
            },
            {
                title:"233333",
                _id:4,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp'
            },
            {
                title:"小萝莉",
                _id:5,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp'
            },
        ]
    })
})
app.get('/admin/list',function(req,res){
    res.render('list',{
        title: 'imooc listPage',
        movies:[
            {
                title:'包包',
                _id:1,
                doctor:'xiaorn',
                country:'美国',
                year:2014,
                poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2510956726.webp',
                language:'英语',
                video:'http://vt1.doubanio.com/201803131120/f4a3b0291d3606bbae91158be210d24b/view/movie/M/302260016.mp4',
                summary:'本片以习近平新时代中国特色社会主义思想为内在逻辑，展示了在创新、协调、绿色、开放'
            }
        ]
    })
})
app.get('/detail/:id',function(req,res){
    res.render('detail',{
        title: 'imooc detailPage',
        movie: {
            doctor:'刘小然',
            country:'天朝',
            title:'哈哈哈',
            year:2016,
            poster:'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2512123434.webp',
            language:'英语',
            video:'http://vt1.doubanio.com/201803131120/f4a3b0291d3606bbae91158be210d24b/view/movie/M/302260016.mp4',
            summary: '本片以习近平新时代中国特色社会主义思想为内在逻辑，展示了在创新、协调、绿色、开放和共享的新发展理念下中国这五年的伟大成就，展现了中国人民在全面建设小康征程上的伟大奋斗，彰显了以习近平同志为核心的党中央的正确领导。凝聚起全党全国人民的磅礴力量，为实现中华民族伟大复兴的中国梦不断前进。 '

        }
    })
})
app.get('/admin/movie',function(req,res){
    res.render('admin',{
        title: 'imooc adminPage',
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