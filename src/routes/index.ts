import Router from 'koa-router'
import { API_PREFIX } from '../config/app_config'
import { Random } from 'mockjs'

const router = new Router()

router.prefix(API_PREFIX)
router.get('/', async (ctx, next) => {
  // const text = Random.cparagraph(20, 30)

  ctx.body = Random.integer(0, 1)
  return await next()
})

export default router
