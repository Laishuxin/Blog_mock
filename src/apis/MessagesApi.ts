import blogManager from '../services'
import { MessagesApi, MessagesApiQuery } from '../typings/api/MessagesApi'
import { ResponseMessages } from '../typings/api/_ResponseMessage'
import { StatusCodes } from '../typings/api/_StatusCodes'

export function getMessagesApi(query: MessagesApiQuery): MessagesApi {
  const data = blogManager.getMessages(query)
  let hasMessage = data.length >= 0
  let message = hasMessage ? ResponseMessages.SUCCESS : ResponseMessages.NO_MORE
  let code = StatusCodes.OK
  return {
    data,
    code,
    message,
    success: true,
  }
}
