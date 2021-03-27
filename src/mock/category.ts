import { getInteger } from '../utils/number_utils'
import { CategoryItem, CategoryType } from '../typings/Models/Category'
import { getDate } from '../utils/date_utils'

export const categories: CategoryType[] = [
  '技术相关',
  '生活感悟',
  '旅游分享',
  '读书心得',
]

export const categoryCountMap = new Map<CategoryType, number>()
export const categoryArticlesIdMap = new Map<CategoryType, number[]>()

/**
 * Get category name and increase counter
 * @returns category
 */
const getCategoryName = (): CategoryType => {
  const categoryName: CategoryType =
    categories[getInteger({ max: categories.length })]
  const count = categoryCountMap.get(categoryName)

  if (count) categoryCountMap.set(categoryName, count + 1)
  else categoryCountMap.set(categoryName, 1)

  return categoryName
}

const addArticle = (category: CategoryType, id: number) => {
  const articleArr = categoryArticlesIdMap.get(category)
  if (articleArr) articleArr.push(id)
  else categoryArticlesIdMap.set(category, [id])
}

export function getCategory(id: number): CategoryItem {
  const categoryName = getCategoryName()
  addArticle(categoryName, id)
  return {
    id,
    createAt: getDate(),
    updateAt: getDate(),
    name: categoryName,
  }
}
