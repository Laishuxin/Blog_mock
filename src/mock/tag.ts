import { getInteger } from '../utils/number_utils'
import { TagType } from '../typings/Models/Tag'

const articleTagMap = new Map<number, TagType>()
const allTags: TagType[] = ['origin', 'other', 'reprint']

export const getTag = (id: number): TagType => {
  const tag: TagType = allTags[getInteger({ min: 0, max: allTags.length })]

  // override
  articleTagMap.set(id, tag)
  return tag
}

export default getTag
