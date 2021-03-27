import { Random } from 'mockjs'
import { getImage } from '../utils/image_utils'
import { articleConfig } from '../config/mock_config'
import { ArticleItem } from '../typings/Models/Article'
import { getCategory } from './category'
import {
  getContent,
  getName,
  getParagraph,
  getTitle,
} from '../utils/text_utils'
import { getUrl } from '../utils/url_like_utils'
import { getEmail } from '../utils/url_like_utils'
import getCommentList from './comment'
import getTag from './tag'
import { getInteger } from '../utils/number_utils'
import { getBoolean } from '../utils/boolean_utils'
import { getDate } from '../utils/date_utils'
import { getLabels } from './label'

interface GetArticle {
  (id: number): ArticleItem
}

function getArticleWrap(): GetArticle {
  const _url = getUrl()
  const _email = getEmail()
  // const _avatar = getImage({ ...articleConfig.avatar, label: 'avatar' })

  // making first picture cache
  const { width, height } = articleConfig.firstPicture
  const _firstPicturesLen = width.length
  const _firstPictures: string[] = Array(_firstPicturesLen)
  for (let i = 0; i < _firstPicturesLen; ++i) {
    _firstPictures.push(
      getImage({
        width: width[i],
        height: height[i],
        label: 'first picture',
      }),
    )
  }

  return function (id: number): ArticleItem {
    return {
      id,
      createAt   : getDate(),
      updateAt   : getDate(),
      title      : getTitle({ ...articleConfig.title }),
      description: getParagraph({
        paragraphMin: articleConfig.description.min,
        paragraphMax: articleConfig.description.max,
      }),
      content     : getContent({ ...articleConfig.content }),
      firstPicture: _firstPictures[id % _firstPicturesLen],
      category    : getCategory(id).name,
      author      : {
        name: getName(),
        email: _email,
        url: Random.boolean() ? _url : '',
      },

      views   : getInteger(articleConfig.views),
      favorite: getInteger(articleConfig.favorite),
      labels  : getLabels(id, getInteger({ min: 1, max: 3 })),
      comments: getCommentList(id, getInteger(articleConfig.comments)),
      tag     : getTag(id),

      commendable: getBoolean({ max: 0.95 }),
      admirable  : getBoolean({ max: 0.95 }),
      sharable   : getBoolean({ max: 0.95 }),
      published  : getBoolean({ max: 0.9 }),
    }
  }
}

export const getArticle: GetArticle = getArticleWrap()
