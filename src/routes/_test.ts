import Router from 'koa-router'
import { getArticle } from '../mock/article'
import { getCategory } from '../mock/category'
import getCommentList, { getCommentItem } from '../mock/comment'
import { getLabel, getLabels } from '../mock/label'
import getTag from '../mock/tag'
import { getBoolean } from '../utils/boolean_utils'
import { getInteger } from '../utils/number_utils'
const router = new Router()

function testGetCommentItem(): any {
  // return getCommentItem(1, 0)
  return getCommentItem(1, 5)
}

function testGetCommentList(): any {
  return getCommentList(1)
}

function testGetTag(): any {
  const tags = []
  for (let i = 0; i < 20; ++i) {
    tags.push(getTag(i))
  }
  return tags
}

function testGetCustomBoolean(): any {
  const booleans = []
  let count = 0
  for (let i = 0; i < 100; ++i) {
    const b = getBoolean({ min: 0, max: 0.8 })
    booleans.push(b)
    count = !!b ? count + 1 : count
  }
  return {
    booleans,
    count,
  }
}

function testGetLabel(): any {
  const labels = []
  for (let i = 0; i < 100; ++i) {
    labels.push(getLabel(i))
  }
  return labels
}

function testGetCategory(): any {
  const categories = []
  for (let i = 0; i < 100; ++i) {
    categories.push(getCategory(i))
  }
  return categories
}

function testGetLabels(): any {
  const articleLabels = []
  for (let i = 0; i < 100; ++i) {
    articleLabels.push(getLabels(i, getInteger({ min: 1, max: 3 })))
  }
  return articleLabels
}

function testGetArticle(): any {
  const articles = []
  for (let i = 0; i < 10; ++i) {
    articles.push(getArticle(i))
  }
  return articles
}

router.get('/test', async (ctx, next) => {
  // const text = Random.cparagraph(20, 30)
  // OOaoooasdfasadfasfasdfasdfsafd

  // ctx.body = getParagraph()
  // ctx.body = getContent()
  // ctx.body = Random.integer(0, 500)
  // ctx.body = testGetCommentItem()
  // ctx.body = testGetCommentList()
  // ctx.body = testGetTag()
  // ctx.body = testGetCustomBoolean()
  // ctx.body = testGetLabel()
  // ctx.body = testGetCategory()
  // ctx.body = testGetLabels()
  // ctx.body = testGetArticle()
  console.log(ctx.status)
  ctx.body = 'ss'
  await next()
})

export default router
