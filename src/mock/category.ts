import { getInteger } from '../utils/number_utils'
import { CategoryItem, CategoryType } from '../typings/Models/Category'
import { getDate } from '../utils/date_utils'

export const categories: CategoryType[] = [
  '技术相关',
  '生活感悟',
  '旅游分享',
  '读书心得',
]

interface GetCategory {
  (id: number): CategoryItem
}

function getCategory (id: number) {
  return {
    id,
    createAt: getDate(),
    updateAt: getDate(),
    name: categories[getInteger({ max: categories.length })],
  }
}

const categoryCountMap = new Map<CategoryType, number>()
const categoryArticlesIdMap = new Map<CategoryType, number[]>()

// init
categories.forEach((item) => {
  categoryCountMap.set(item, 0)
  categoryArticlesIdMap.set(item, [])
})

const increaseCategory = (category: CategoryType) => {
  const count = categoryCountMap.get(category)
  if (count) categoryCountMap.set(category, count + 1)
}

const addArticle = (category: CategoryType, id: number) => {
  const articleArr = categoryArticlesIdMap.get(category)
  if (articleArr) articleArr.push(id)
}

/**
 * Get category by id
 * @param id article id
 * @returns category
 */
export const getCategory = (id: number): CategoryType => {
  const category = categories[getInteger({ max: categories.length })]
  increaseCategory(category)
  addArticle(category, id)
  return category
}

export default increaseCategory
