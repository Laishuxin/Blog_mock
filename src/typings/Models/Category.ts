import { BaseItem } from "./_Base"

export type CategoryType = string
export interface CategoryItem extends BaseItem {
  name: CategoryType
}

export type CategoryList = CategoryItem[]