import { BaseItem } from "./_Base"

// export type TagType = 'original' | 'reprint' | 'other'
export type LabelType = string
export interface LabelItem extends BaseItem {
  name: LabelType
}

export type LabelList = LabelItem[]
