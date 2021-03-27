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
import ArticleManager from './ArticleManager'
import CategoryManager from './CategoryManager'

class BlogApiManager {
  private _articleManager: ArticleManager
  private _categoryManager: CategoryManager

  constructor(count = 100) {
    this._articleManager = new ArticleManager(count)
    this._categoryManager = new CategoryManager()
  }

  get count(): number {
    return this._articleManager.count
  }

  // article start
  public getArticleList(
    query: ArticlesApiQuery = ArticlesApiQueryDefaults,
  ): ArticleList {
    return this._articleManager.getArticleList(query)
  }

  getArticleItemById(id: number): ArticleItem | null {
    return this._articleManager.getArticleItemById(id)
  }
  // article end

  // category start
  getCategories(
    query: CategoriesApiQuery,
  ): { category: CategoryType; count: number }[] {
    const entries = this._categoryManager.getCategories(query)
    return entries.map((item) => ({ category: item[0], count: item[1] }))
  }
  
  getArticlesIdByCategoryType(category: CategoryType): number[] | undefined {
    return this._categoryManager.getArticlesIdByCategoryType(category)
  }
  // category end
}

const blogManager = new BlogApiManager(blogConfig.articleCount)
export default blogManager
export { BlogApiManager }
