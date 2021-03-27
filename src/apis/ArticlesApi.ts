import blogManager from '../services'
import { ArticlesApi, ArticlesApiQuery } from '../typings/api/ArticlesApi'
import { ResponseMessages } from '../typings/api/_ResponseMessage'
import { StatusCodes } from '../typings/api/_StatusCodes'

export function getArticlesApi(query: ArticlesApiQuery): ArticlesApi {
  const articleList = blogManager.getArticleList(query)
  const count = articleList.length
  const limit = query.limit
  const offset = query.offset

  return {
    data: {
      data: articleList,
      count,
      offset,
      limit,
    },
    success: true,
    code: StatusCodes.OK,
    message: count > 0 ? ResponseMessages.SUCCESS : ResponseMessages.NO_MORE,
  }
}
