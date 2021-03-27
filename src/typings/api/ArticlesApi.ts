import { ArticleList } from '../Models/Article'
import { StatusCodes } from './_StatusCodes'
import { RestfulApi } from './_RestfulApi'
import { ResponseMessages } from './_ResponseMessage'
import { CategoryType } from '../Models/Category'

export interface ArticlesApiQuery {
  offset   : number
  limit    : number
  sortField: string
  isAsc    : boolean
  category : CategoryType | null
}

export const ArticlesApiQueryDefaults: ArticlesApiQuery = {
  offset: 0,
  limit: 10,
  sortField: 'updateAt',
  isAsc: false,
  category: null
}

export interface ArticlesApi extends RestfulApi {
  data: {
    data  : ArticleList
    count : number
    offset: number
    limit : number
  }
}

export type ArticlesApiStatusOptions =
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.NOT_FOUND
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.INTERNAL_SERVER_ERROR

export type ArticlesApiMessageOptions = 
  | ResponseMessages.SUCCESS
  | ResponseMessages.NO_MORE
  | ResponseMessages.UNRECOGNIZED_SORT_FIELD
  | ResponseMessages.SERVER_ERROR
  | ResponseMessages.UNAUTHORIZED