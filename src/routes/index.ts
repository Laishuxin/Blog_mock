import Router from 'koa-router'
import { API_PREFIX } from '../config/app_config'
import testRouter from './_test'
import articlesRouter from './articles'
import articlesItemRouter from './articlesItem'
import categoriesRouter from './categories'
import labelsRouter from './labels'
const router = new Router()

router.prefix(API_PREFIX)
router.use(testRouter.routes())
router.use(articlesRouter.routes())
router.use(articlesItemRouter.routes())
router.use(categoriesRouter.routes())
router.use(labelsRouter.routes())

export default router
