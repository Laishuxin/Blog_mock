import { getImage } from '../utils/image_utils'
import { getContent } from '../utils/text_utils'
import { getName } from '../utils/text_utils'
import { getUrl } from '../utils/url_like_utils'
import { getEmail } from '../utils/url_like_utils'
import { CommentItem, CommentList } from '..//typings/Models/Comment'
import { getInteger } from '../utils/number_utils'

interface GetCommentItem {
  (id: number, childCommentCount: number): CommentItem
}

const articleCommentMap = new Map<number, CommentList>()

/**
 * Get commentItem by article id
 */
export const getCommentItem: GetCommentItem = ((): GetCommentItem => {
  const email = getEmail()
  const avatar = getImage()
  const url = getUrl()
  return function _getCommentItem(
    id: number,
    childCommentCount: number = 0,
  ): CommentItem {
    const childComment: CommentList = []
    for (let i = 0; i < childCommentCount; ++i) {
      childComment.push(_getCommentItem(id))
    }
    const result: CommentItem = {
      id,
      createAt: +new Date(),
      updateAt: +new Date(),
      username: getName(),
      email,
      avatar,
      url,
      content: getContent({
        min: 1,
        max: 5,
      }),
      childComment: childCommentCount ? childComment : null,
    }
    return result
  }
})()

/**
 * Get commentList by article id
 * @param id articleId
 * @param commentCount the length of commentList
 * @param param2 childCommentConfig
 * @returns commentList
 */
export const getCommentList = (
  id: number,
  commentCount = 10,
  { childCommentMin = 0, childCommentMax = 10 } = {},
): CommentList => {
  const commentList: CommentList = []
  for (let i = 0; i < commentCount; ++i) {
    commentList.push(
      getCommentItem(
        id,
        getInteger({ min: childCommentMin, max: childCommentMax }),
      ),
    )
  }

  // override
  articleCommentMap.set(id, commentList)
  // console.log(articleCommentMap)
  return commentList
}

export default getCommentList
