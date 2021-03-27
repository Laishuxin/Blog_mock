import { ArticleItem } from "../Models/Article";
import { ResponseMessages } from "./_ResponseMessage";
import { RestfulApi } from "./_RestfulApi";
import { StatusCodes } from "./_StatusCodes";

export interface ArticlesItemApi extends RestfulApi {
  data: ArticleItem | null
}

export interface ArticlesItemApiQuery {
  id: number|undefined
}

export type ArticleApiStatusOptions =
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.FORBIDDEN
  | StatusCodes.NOT_FOUND
  | StatusCodes.INTERNAL_SERVER_ERROR

export type ArticleApiMessageOptions = 
  | ResponseMessages.SUCCESS
  | ResponseMessages.LACK_OF_PARAMS
  | ResponseMessages.NOT_ALLOW
  | ResponseMessages.NOT_FOUND
  | ResponseMessages.SERVER_ERROR
