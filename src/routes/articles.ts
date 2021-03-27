import Router from 'koa-router'
import { ParsedUrlQuery } from 'node:querystring'
import { getArticlesApi } from '../apis/ArticlesApi'
import {
  ArticlesApiQuery,
  ArticlesApiQueryDefaults,
} from '../typings/api/ArticlesApi'
import { parseBoolean, parseInteger, parseString } from '../utils/parse_utils'
const router = new Router()

router.get('/articles', async (ctx, next) => {
  // ctx.body = 'welcome'
  const query = handleArticleRequestQuery(ctx.query)

  ctx.body = getArticlesApi(query)
  await next()
})

function handleArticleRequestQuery(query: ParsedUrlQuery): ArticlesApiQuery {
  return {
    offset: parseInteger(query.offset, ArticlesApiQueryDefaults.offset),
    limit: parseInteger(query.limit, ArticlesApiQueryDefaults.limit),
    sortField: parseString(
      query.sortField,
      ArticlesApiQueryDefaults.sortField,
    ) as string,
    isAsc: parseBoolean(query.isAsc, ArticlesApiQueryDefaults.isAsc),
    category: parseString(
      query.category,
      ArticlesApiQueryDefaults.category,
      true,
    ),
  }
}

export default router
