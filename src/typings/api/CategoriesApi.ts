import { ResponseMessages } from './_ResponseMessage'
import { RestfulApi } from './_RestfulApi'
import { StatusCodes } from './_StatusCodes'

export interface CategoriesApiQuery {
  sortField: string
  isAsc: boolean
}

export const CategoriesApiQueryDefaults: CategoriesApiQuery = {
  sortField: 'articleCount',
  isAsc: false,
}

export interface CategoriesApi extends RestfulApi {
  data: {
    category: string
    count: number
  }[]
}

export type CategoriesApiStatusOptions =
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.NOT_FOUND
  | StatusCodes.INTERNAL_SERVER_ERROR

export type CategoriesApiMessageOptions =
  | ResponseMessages.SUCCESS
  | ResponseMessages.LACK_OF_PARAMS
  | ResponseMessages.NOT_FOUND
  | ResponseMessages.SERVER_ERROR
  | ResponseMessages.UNAUTHORIZED
