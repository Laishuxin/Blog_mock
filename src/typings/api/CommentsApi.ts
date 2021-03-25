import { CommentList } from '../Models/Comment'
import { ResponseMessages } from './_ResponseMessage'
import { RestfulApi } from './_RestfulApi'

export interface CommentsApi extends RestfulApi<CommentList> {}

export type CommentsApiMessageOptions = 
  | ResponseMessages.SUCCESS
