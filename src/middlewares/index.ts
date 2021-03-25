import { IMiddleware } from 'koa-router'

export const setResponseHeaders = (): IMiddleware => {
  return async (ctx, next) => {
    ctx.response.set('Content-Type', 'application/json;charset=utf-8')
    return await next()
  }
}
