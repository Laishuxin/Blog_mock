import { BaseItem, UrlType } from './_Base'

export interface MessageItem extends BaseItem {
  username: string
  email: string
  avatar: UrlType
  url?: UrlType
  content: string
  childMessage: MessageList | null
}
export type MessageList = MessageItem[]
