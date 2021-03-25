import Router from 'koa-router'
import { API_PREFIX } from '../config'

const router = new Router()

router.prefix(API_PREFIX)
router.get('/', async (ctx, next) => {
  ctx.body = 'welcome'
  return await next()
})

export default router
