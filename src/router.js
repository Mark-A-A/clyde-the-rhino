const Router = require('koa-router');
const router = new Router();
const model = require('./rhinoceros');

router.get('/rhinos', (ctx, next) => {
  const rhinoceroses = model.getAll();
  ctx.response.body = { rhinoceroses };
});

router.post('/rhinoceros', (ctx, next) => {
  ctx.response.body = model.newRhinoceros(ctx.request.body);
});

router.get('/rhino/:id', (ctx, next) => {
  const { id } = ctx.params;
  const rhino = model.getRhinoByID(id);

  const responseBody = {
    rhino
  }

  if (!rhino) {
    responseBody.error = 'Not Found'
    ctx.response.status = 404;
  }

  ctx.response.body = responseBody;
});


module.exports = router;
