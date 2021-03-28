import { cloneDeep } from 'lodash'
import { getArticle } from '../mock/article'
import {
  ArticlesApiQuery,
  ArticlesApiQueryDefaults,
} from '../typings/api/ArticlesApi'
import { ArticleItem, ArticleList } from '../typings/Models/Article'
import { getPageList } from '../utils/page_utils'

class ArticleManager {
  // article list: index corresponding to article id
  private _articleList!: ArticleList
  private readonly _count: number

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

  // TODO(rushui 2021-03-27): implement other query
  public getArticleList({
    offset = ArticlesApiQueryDefaults.offset,
    limit = ArticlesApiQueryDefaults.limit,
    category = ArticlesApiQueryDefaults.category,
    isAsc = ArticlesApiQueryDefaults.isAsc,
    sortField = ArticlesApiQueryDefaults.sortField,
  }: ArticlesApiQuery = ArticlesApiQueryDefaults): ArticleList {
    // find articles which article.category === category
    // if category is null return all articles
    const clonedItems = category
      ? this._articleList.filter((item) => item.category === category)
      : this._articleList
    // console.log(clonedItems)

    const articleList = cloneDeep(clonedItems)

    // TODO(rushui 2021-03-28): merge to one??
    if (sortField === 'updateAt' || sortField === 'createAt') {
      articleList.sort((a, b) => {
        return isAsc ? a[sortField] - b[sortField] : b[sortField] - a[sortField]
      })
    } else if (sortField === 'views' || sortField === 'commentCount') {
      articleList.sort((a, b) => {
        let aLen, bLen
        if (sortField === 'views') {
          aLen = a.views
          bLen = b.views
        } else {
          aLen = a.comments ? a.comments.length : 0
          bLen = b.comments ? b.comments.length : 0
        }
        // console.log(`sortField = ${sortField}, aLen = ${aLen}, bLen = ${bLen}`)
        return isAsc ? aLen - bLen : bLen - aLen
      })
    }
    return getPageList<ArticleItem>(articleList, offset, limit)
  }

  getArticleItemById(id: number): ArticleItem | null {
    return id < this._count && id >= 0 ? this._articleList[id] : null
  }
}

export default ArticleManager
