import { Random } from "mockjs"


/**
 * Get random integer which fall in interval [min, max)
 * @param param0 integer config
 * @returns integer
 */
export const getInteger = ({min = 0, max = 1}): number => {
  return Random.integer(min, max - 1)
}

// export default getInteger

