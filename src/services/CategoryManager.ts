import {
  categories,
  categoryArticlesIdMap,
  categoryCountMap,
} from '../mock/category'
import {
  CategoriesApiQuery,
  CategoriesApiQueryDefaults,
} from '../typings/api/CategoriesApi'
import { CategoryType } from '../typings/Models/Category'

class CategoryManager {
  private _categories = categories
  private _categoryCountMap = categoryCountMap
  private _categoryArticlesIdMap = categoryArticlesIdMap

  constructor() {}

  getCategories({
    sortField = CategoriesApiQueryDefaults.sortField,
    isAsc = CategoriesApiQueryDefaults.isAsc,
  }: CategoriesApiQuery): [CategoryType, number][] {
    const entries = this._categoryCountMap.entries()
    const result = Array.from(entries)
    if (sortField === 'articleCount') {
      result.sort((a, b) => {
        return isAsc ? a[1] - b[1] : b[1] - a[1]
      })
    }
    return result
  }

  getArticlesIdByCategoryType(category: CategoryType): number[] | undefined {
    return this._categoryArticlesIdMap.get(category)
  }

  get categories(): CategoryType[] {
    return this._categories
  }
}

export default CategoryManager
