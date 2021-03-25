import { CategoryType } from "./Category";
import { CommentList } from "./Comment";
import { TagType } from "./Label";
import { AuthorItem } from "./_Author";
import { BaseItem, FlagType } from "./_Base";

export interface ArticleItem extends BaseItem {
  title       : string
  description : string
  content     : string
  firstPicture: string
  category    : CategoryType
  author      : AuthorItem
  
  views   : number       // Number of views
  favorite: number       // Number of favor
  tag     : TagType[]
  comments: CommentList
  
  // flags
  commendable: FlagType
  admirable  : FlagType
  sharable   : FlagType
  published  : FlagType
}

export type ArticleList = ArticleItem[]