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
import { LabelsApiQuery } from '../typings/api/LabelsApi'
import { LabelType } from '../typings/Models/Label'
import LabelManager from './LabelManager'

class BlogApiManager {
  private _articleManager: ArticleManager
  private _categoryManager: CategoryManager
  private _labelManager: LabelManager

  constructor(count = 100) {
    this._articleManager = new ArticleManager(count)
    this._categoryManager = new CategoryManager()
    this._labelManager = new LabelManager()
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

  getArticlesIdByCategoryName(category: CategoryType): number[] | undefined {
    return this._categoryManager.getArticlesIdByCategoryName(category)
  }
  // category end

  // labels start
  getLabels(query: LabelsApiQuery): { label: LabelType; count: number }[] {
    const entries = this._labelManager.getLabels(query)
    return entries.map((item) => ({ label: item[0], count: item[1] }))
  }

  getArticlesIdByLabelName(label: LabelType): number[] | undefined {
    return this._labelManager.getArticlesIdByLabelName(label)
  }
  // labels end
}

const blogManager = new BlogApiManager(blogConfig.articleCount)
export default blogManager
export { BlogApiManager }
