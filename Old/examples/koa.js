
const Koa = require('koa'); // 在koa2中，我们导入的是 class，因此要用大写
const app = new Koa();
// 对于任何请求，app将调用该异步函数处理请求；
app.use(async (ctx,next)=>{
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
});
app.use(async (ctx,next)=>{
    const start = new Date().getTime();
    await next();
    const ms =new Date().getTime()-start
    console.log(`Time:${ms}ms`)
});
app.use(async (ctx,next)=>{
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,koa2!</h1>';
});
app.listen(3000);
console.log('port 3000...');