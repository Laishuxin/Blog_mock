import { BaseItem, UrlType } from './_Base'

export interface CommentItem extends BaseItem {
  username: string
  email: string
  avatar: UrlType
  url?: UrlType
  content: string
  childComment: CommentList | null
}

export type CommentList = CommentItem[]
