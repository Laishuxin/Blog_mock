import blogManager from '../services'
import {
  ArticlesItemApi,
  ArticlesItemApiQuery,
} from '../typings/api/ArticlesItemApi'
import { ResponseMessages } from '../typings/api/_ResponseMessage'
import { StatusCodes } from '../typings/api/_StatusCodes'
export function getArticlesItemApi(
  query: ArticlesItemApiQuery,
): ArticlesItemApi {
  let hasId = typeof query.id !== 'undefined'
  let hasAuth = true
  let code = StatusCodes.OK
  let message = ResponseMessages.SUCCESS
  let article = hasId
    ? blogManager.getArticleItemById(query.id as number)
    : null

  if (!hasId) {
    code = StatusCodes.BAD_REQUEST
    message = ResponseMessages.LACK_OF_PARAMS
  }

  if (!article) {
    // article not found
    hasAuth = false
    code = StatusCodes.NOT_FOUND
    message = ResponseMessages.NOT_FOUND
  } else {
    // article is found but not published yet
    hasAuth = article.published
    if (!hasAuth) {
      code = StatusCodes.FORBIDDEN
      message = ResponseMessages.NOT_ALLOW
      article = null
    }
  }

  return {
    data: article,
    code,
    message,
    success: code === StatusCodes.OK,
  }
}
