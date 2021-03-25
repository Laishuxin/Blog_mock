import { BaseItem } from "./_Base"

export type CategoryType = string
export interface CategoryItem extends BaseItem {
  name: string
}

export type CategoryList = CategoryItem[]