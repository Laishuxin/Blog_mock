import { CategoryType } from './Category'
import { CommentList } from './Comment'
import { LabelType } from './Label'
import { TagType } from './Tag'
import { AuthorItem } from './_Author'
import { BaseItem, FlagType, UrlType } from './_Base'

export interface ArticleItem extends BaseItem {
  title: string
  description: string
  content: string
  firstPicture: UrlType,
  category: CategoryType
  author: AuthorItem

  views   : number       // Number of views
  favorite: number       // Number of favor
  labels   : LabelType[]
  comments: CommentList
  tag     : TagType

  // flags
  commendable: FlagType
  admirable  : FlagType
  sharable   : FlagType
  published  : FlagType
}

export type ArticleList = ArticleItem[]
