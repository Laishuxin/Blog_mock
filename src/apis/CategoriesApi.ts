import blogManager from '../services'
import { CategoriesApi, CategoriesApiQuery } from '../typings/api/CategoriesApi'
import { ResponseMessages } from '../typings/api/_ResponseMessage'
import { StatusCodes } from '../typings/api/_StatusCodes'

export function getCategoriesApi(query: CategoriesApiQuery): CategoriesApi {
  const data = blogManager.getCategories(query)
  let hasCategories = data.length >= 0
  let message = hasCategories
    ? ResponseMessages.SUCCESS
    : ResponseMessages.NOT_FOUND
  let code = hasCategories ? StatusCodes.OK : StatusCodes.NOT_FOUND

  return {
    data,
    success: hasCategories,
    code,
    message,
  }
}
