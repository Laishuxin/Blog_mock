import { MessageItem, MessageList } from '../typings/Models/Message'
import { getBoolean } from '../utils/boolean_utils'
import { getDate } from '../utils/date_utils'
import { getImage } from '../utils/image_utils'
import { getInteger } from '../utils/number_utils'
import { getName, getParagraph } from '../utils/text_utils'
import { getEmail, getUrl } from '../utils/url_like_utils'

interface GetMessageItem {
  (childCommentCount: number): MessageItem
}

export const getMessageItem = ((): GetMessageItem => {
  let _id = 1
  const _email = getEmail()
  const _url = getUrl()
  const _avatar = getImage()
  return function _getMessageItem(childMessageCount = 0): MessageItem {
    const childMessage: MessageList = []
    for (let i = 0; i < childMessageCount; ++i) {
      childMessage.push(_getMessageItem())
    }
    return {
      id: _id++,
      createAt: getDate(),
      updateAt: getDate(),
      username: getName(),
      email: _email,
      url: getBoolean() ? _url : '',
      avatar: _avatar,
      content: getParagraph(),
      childMessage: childMessageCount >= 0 ? childMessage : null,
    }
  }
})()

export const getMessageList = (count: number): MessageList => {
  const messageList: MessageList = Array(count)
  for (let i = 0; i < count; ++i) {
    messageList.push(getMessageItem(getInteger({ max: 3 })))
  }
  return messageList
}
