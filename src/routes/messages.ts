import Router from 'koa-router'
import { ParsedUrlQuery } from 'querystring'
import { getMessagesApi } from '../apis/MessagesApi'
import {
  MessagesApiQuery,
  MessagesApiQueryDefaults,
} from '../typings/api/MessagesApi'
import { parseBoolean, parseInteger, parseString } from '../utils/parse_utils'

const router = new Router()
router.get('/messages', async (ctx, next) => {
  const query = handleMessagesQuery(ctx.query)
  ctx.body = getMessagesApi(query)
  await next()
})

function handleMessagesQuery(query: ParsedUrlQuery): MessagesApiQuery {
  return {
    isAsc: parseBoolean(query.isAsc, MessagesApiQueryDefaults.isAsc),
    sortField: parseString(
      query.sortField,
      MessagesApiQueryDefaults.sortField,
    ) as string,
    offset: parseInteger(query.offset, MessagesApiQueryDefaults.offset),
    limit: parseInteger(query.limit, MessagesApiQueryDefaults.limit),
  }
}

export default router
