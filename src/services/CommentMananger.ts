import { articleCommentMap, getCommentItem } from '../mock/comment'
import { CommentItem, CommentList } from '../typings/Models/Comment'

class CommentManager {
  private _articleCommentMap = articleCommentMap
  constructor() {}

  getCommentsByArticleId(id: number): CommentList | undefined {
    return this._articleCommentMap.get(id)
  }

  getCommentItem(id: number, childCommentCount = 0): CommentItem {
    return getCommentItem(id, childCommentCount)
  }
}

export default CommentManager
