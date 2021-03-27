import Router from 'koa-router'
import { getArticlesItemApi } from '../apis/ArticlesItemApi'
import { ArticlesItemApiQuery } from '../typings/api/ArticlesItemApi'
import { parseInteger } from '../utils/parse_utils'
const router = new Router()

router.get('/articles/:id', async (ctx, next) => {
  const query = handleArticleRequestQuery(ctx.params)
  ctx.body = getArticlesItemApi(query)
  await next()
})

function handleArticleRequestQuery(query: any): ArticlesItemApiQuery {
  if (!query) return { id: -1 }
  return {
    id: parseInteger(query.id, -1),
  }
}

export default router
