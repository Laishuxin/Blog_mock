import { cloneDeep } from 'lodash'

/**
 * Get page item
 * @param src source list
 * @param offset offset from start page, begin with 0
 * @param limit limit per page
 * @returns items in current page
 */
export const getPageList = <T>(
  src: Array<T>,
  offset: number,
  limit: number,
): Array<T> => {
  const length = src.length
  if (offset >= length || offset < 0 || limit <= 0 || length <= 0) return []
  // avoid out of range
  const high = length <= offset + limit ? length : offset + limit

  const dest: Array<T> = Array(high - offset)

  for (
    let srcIndex = offset, destIndex = 0;
    srcIndex < high;
    ++srcIndex, ++destIndex
  ) {
    // avoid to modify source list
    dest[destIndex] = cloneDeep(src[srcIndex])
  }

  return dest
}
