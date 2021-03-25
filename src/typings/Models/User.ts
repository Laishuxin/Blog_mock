import { BaseItem, UrlType } from './_Base'

export interface UserItem extends BaseItem {
  username: string
  nickname: string
  email: string
  auth: AuthType
  url?: UrlType
}

export enum AuthType {
  admin   = 0,
  friend  = 1,
  visitor = 2,
  other   = 3,
}
export type UserList = UserItem[]
