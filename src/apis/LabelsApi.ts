import blogManager from '../services'
import { LabelsApi, LabelsApiQuery } from '../typings/api/LabelsApi'
import { ResponseMessages } from '../typings/api/_ResponseMessage'
import { StatusCodes } from '../typings/api/_StatusCodes'

export function getLabelsApi(query: LabelsApiQuery): LabelsApi {
  const data = blogManager.getLabels(query)
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
