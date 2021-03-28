import { cloneDeep } from 'lodash'
import { getMessageItem, getMessageList } from '../mock/message'
import { MessagesApiQuery } from '../typings/api/MessagesApi'
import { MessageList } from '../typings/Models/Message'
import { getPageList } from '../utils/page_utils'

class MessageManager {
  private _count: number
  private _messageList: MessageList

  constructor(messageCount = 20) {
    this._count = messageCount
    this._messageList = getMessageList(messageCount)
  }

  get count(): number {
    return this._count
  }

  getMessages(query: MessagesApiQuery): MessageList {
    const messageList = cloneDeep(this._messageList)
    const sortField = query.sortField
    if (sortField === 'createAt' || sortField === 'updateAt') {
      messageList.sort((a, b) => {
        return query.isAsc
          ? a[sortField] - b[sortField]
          : b[sortField] - a[sortField]
      })
    } else if (sortField === 'count') {
      messageList.sort((a, b) => {
        const aChildLen = a.childMessage ? a.childMessage.length : 0
        const bChildLen = b.childMessage ? b.childMessage.length : 0
        return query.isAsc ? aChildLen - bChildLen : bChildLen - aChildLen
      })
    }
    return getPageList(messageList, query.offset, query.limit)
  }
}

export default MessageManager
