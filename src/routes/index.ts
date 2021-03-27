import Router from 'koa-router'
import { API_PREFIX } from '../config/app_config'
import testRouter from './_test'
import articlesRouter from './articles'
import articlesItemRouter from './articlesItem'
const router = new Router()

router.prefix(API_PREFIX)
router.use(testRouter.routes())
router.use(articlesRouter.routes())
router.use(articlesItemRouter.routes())

export default router
