import { ResponseMessages } from './_ResponseMessage'
import { StatusCodes } from './_StatusCodes'
import { MessageList } from '../Models/Message'
import { RestfulApi } from './_RestfulApi'

export interface MessagesApiQuery {
  sortField: string
  isAsc: boolean
  offset: number
  limit: number
}

export const MessagesApiQueryDefaults: MessagesApiQuery = {
  sortField: 'updateAt',
  isAsc: false,
  offset: 0,
  limit: 10,
}

export interface MessagesApi extends RestfulApi {
  data: MessageList | null
}

export type MessagesApiStatusOptions = StatusCodes.OK | StatusCodes.NOT_FOUND

export type MessagesApiMessageOptions =
  | ResponseMessages.SUCCESS
  | ResponseMessages.NOT_FOUND
