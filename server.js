const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa();

app.use(async (ctx, next) => {
  const origin = `${ctx.request.protocol}://${ctx.request.host}`
  ctx.set('AMP-Access-Control-Allow-Source-Origin', origin)
  await next()
})

app.use(serve(__dirname + '/dist'));

app.listen(3000)
console.log('listening on port 3000')
