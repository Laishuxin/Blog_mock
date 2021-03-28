import { blogConfig } from '../config/mock_config'
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
import CommentManager from './CommentMananger'
import { CommentItem, CommentList } from '../typings/Models/Comment'
import MessageManager from './MessageManager'
import { MessagesApiQuery } from '../typings/api/MessagesApi'
import { MessageList } from '../typings/Models/Message'

class BlogApiManager {
  private _articleManager: ArticleManager
  private _categoryManager: CategoryManager
  private _labelManager: LabelManager
  private _commentManager: CommentManager
  private _messageManager: MessageManager

  constructor(articleCount = 100, messageCount = 20) {
    this._articleManager = new ArticleManager(articleCount)
    this._categoryManager = new CategoryManager()
    this._labelManager = new LabelManager()
    this._commentManager = new CommentManager()
    this._messageManager = new MessageManager(messageCount)
  }

  get articleCount(): number {
    return this._articleManager.count
  }

  get messageCount(): number {
    return this._messageManager.count
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

  // comments start
  getCommentsByArticleId(id: number): CommentList | undefined {
    return this._commentManager.getCommentsByArticleId(id)
  }

  getCommentItem(id: number, childCommentCount = 3): CommentItem {
    return this._commentManager.getCommentItem(id, childCommentCount)
  }
  // comments end
  
  // messages start
  getMessages(query: MessagesApiQuery): MessageList {
    return this._messageManager.getMessages(query)
  }
  // messages end
}

const blogManager = new BlogApiManager(blogConfig.articleCount)
export default blogManager
export { BlogApiManager }
