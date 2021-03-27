import { TimeType } from '../typings/Models/_Base'

export const getDate = (): TimeType => {
  return +new Date()
}
