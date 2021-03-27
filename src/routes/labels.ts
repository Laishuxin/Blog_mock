import Router from 'koa-router'
import { ParsedUrlQuery } from 'querystring'
import { getLabelsApi } from '../apis/LabelsApi'
import {
  LabelsApiQuery,
  LabelsApiQueryDefaults,
} from '../typings/api/LabelsApi'
import { parseBoolean, parseString } from '../utils/parse_utils'
const router = new Router()
router.get('/labels', async (ctx, next) => {
  const query = handleLabelsQuery(ctx.query)
  
  ctx.body = getLabelsApi(query)
  await next()
})

function handleLabelsQuery(query: ParsedUrlQuery): LabelsApiQuery {
  return {
    isAsc: parseBoolean(query.isAsc, LabelsApiQueryDefaults.isAsc),
    sortField: parseString(
      query.sortField,
      LabelsApiQueryDefaults.sortField,
    ) as string,
  }
}
export default router
