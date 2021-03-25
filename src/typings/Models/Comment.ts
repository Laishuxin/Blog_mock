import { BaseItem, UrlType } from "./_Base";

export interface CommentItem extends BaseItem {
  username    : string
  email       : string
  avatar      : UrlType
  url?        : UrlType
  content     : string
  childComment: CommentItem | null
}

export type CommentList = CommentItem[]
