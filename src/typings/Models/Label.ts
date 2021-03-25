import { BaseItem } from "./_Base"

export type TagType = 'original' | 'reprint' | 'other'
export interface LabelItem extends BaseItem {
  name: string
}

export type LabelList = LabelItem[]
