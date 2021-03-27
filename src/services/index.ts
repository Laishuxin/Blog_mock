import { cloneDeep } from 'lodash'
import { blogConfig } from '../config/mock_config'
import { getArticle } from '../mock/article'
import { CategoriesApiQueryDefaults } from '../typings/api/CategoriesApi'
import {
  ArticlesApiQuery,
  ArticlesApiQueryDefaults,
} from '../typings/api/ArticlesApi'
import { CategoriesApiQuery } from '../typings/api/CategoriesApi'
import { ArticleItem, ArticleList } from '../typings/Models/Article'
import { CategoryType } from '../typings/Models/Category'

class BlogApiManager {
  // article list: index corresponding to article id
  private _articleList!: ArticleList
  private _count: number

  constructor(count = 100) {
    this.init(count)
    this._count = count
  }

  private init(articleCount: number) {
    this._articleList = Array<ArticleItem>(articleCount)
    for (let i = 0; i < articleCount; ++i) {
      this._articleList[i] = getArticle(i)
    }
  }

  get count(): number {
    return this._count
  }

  // article start
  // TODO(rushui 2021-03-27): implement other query
  public getArticleList({
    offset = ArticlesApiQueryDefaults.offset,
    limit = ArticlesApiQueryDefaults.limit,
    category = ArticlesApiQueryDefaults.category,
    isAsc = ArticlesApiQueryDefaults.isAsc,
    sortField = ArticlesApiQueryDefaults.sortField,
  }: ArticlesApiQuery = ArticlesApiQueryDefaults): ArticleList {
    const src = cloneDeep(this._articleList)
    const srcLen = src.length
    if (offset >= srcLen) return []
    const destLen = offset + limit

    // calculate upper bound
    const high = srcLen <= destLen ? srcLen : destLen

    const dest: ArticleList = Array(high - offset)
    for (
      let srcIndex = offset, destIndex = 0;
      srcIndex < high;
      ++srcIndex, ++destIndex
    ) {
      dest[destIndex] = src[srcIndex]
    }
    return dest
  }

  getArticleItemById(id: number): ArticleItem | null {
    return id < this._count && id >= 0 ? this._articleList[id] : null
  }
  // article end

  // category start
  getCategories({
    sortField = CategoriesApiQueryDefaults.sortField,
    isAsc = CategoriesApiQueryDefaults.isAsc,
  }: CategoriesApiQuery): { category: CategoryType; count: number }[] {

    return []
  }
  // category end
}

const blogManager = new BlogApiManager(blogConfig.articleCount)
export default blogManager
export { BlogApiManager }
