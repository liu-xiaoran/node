const Koa = require('koa');
const router = require('koa-router')();
// const bodyParser = require('koa-bodyparser'); // 引入表单解析工具

const app = new Koa();
// app.use(bodyParser())   // 表单解析工具先于使用前 注册
app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`)
    await next();
})
router.get('/hello/:name',async(ctx,next)=>{  // 如果是post写为 router.post
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello,${name}!</h1>`;
})
router.get('/',async(ctx,next)=>{
    ctx.response.body = '<h1>Index</h1>';
})
app.use(router.routes())  // 该函数调用
app.listen(3000)
