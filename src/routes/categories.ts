import Router from 'koa-router'
import { ParsedUrlQuery } from 'querystring'
import { getCategoriesApi } from '../apis/CategoriesApi'
import {
  CategoriesApiQuery,
  CategoriesApiQueryDefaults,
} from '../typings/api/CategoriesApi'
import { parseBoolean, parseString } from '../utils/parse_utils'
const router = new Router()

router.get('/categories', async (ctx, next) => {
  const query = handleCategoriesQuery(ctx.query)
  ctx.body = getCategoriesApi(query)
  await next()
})

function handleCategoriesQuery(query: ParsedUrlQuery): CategoriesApiQuery {
  return {
    sortField: parseString(
      query.sortField,
      CategoriesApiQueryDefaults.sortField,
    ) as string,
    isAsc: parseBoolean(query.isAsc, CategoriesApiQueryDefaults.isAsc),
  }
}
export default router
