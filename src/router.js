const Router = require('koa-router');
const router = new Router();
const model = require('./rhinoceros');
const { validateRhinoPostBody } = require('./validation');

router.get('/rhinos', (ctx, next) => {
  const rhinoceroses = model.getAll();
  ctx.response.body = { rhinoceroses };
});

router.post('/rhino', (ctx, next) => {
  const { body: postBody } = ctx.request

  const validPostBody = validateRhinoPostBody(postBody)
  if (!validPostBody) {
    ctx.response.status = 400;
    ctx.response.body = { error: "Please try again."};
  } else {
    ctx.response.body = model.newRhinoceros(postbody);
  }
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
