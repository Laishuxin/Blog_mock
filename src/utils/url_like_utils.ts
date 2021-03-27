import { Random } from 'mockjs'

export const getUrl = (): string => {
  return Random.url()
}

export const getEmail = (): string => {
  return Random.email()
}

export default {
  getUrl,
  getEmail,
}
