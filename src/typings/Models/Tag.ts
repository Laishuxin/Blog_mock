import { BaseItem } from "./_Base";

export type TagType = 
  | 'origin'
  | 'reprint'
  | 'other'
export interface TagItem extends BaseItem {
  name: TagType
}
export type TagList = TagItem[]