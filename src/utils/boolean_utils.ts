/**
 * Get custom boolean via Math.random()
 * @param param0 possibility interval
 * @return true if the result of Math.random() fall in the interval
 */
export const getBoolean = ({min = 0, max = 1}): boolean => {
  const r = Math.random()
  return r >= min && r <= max
}

// export default getBoolean