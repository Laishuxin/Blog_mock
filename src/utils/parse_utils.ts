const _isNaN = (value: any): boolean => !(value === value)
export const parseInteger = (value: any, _default: number): number => {
  const result = parseInt(value)
  return !_isNaN(result) ? result : _default
}

export const parseString = (
  value: any,
  _default: string | null,
  nullable: boolean = false,
): string | null => {
  if ((value === undefined || _isNaN(value)) && nullable) return null
  return typeof value === 'string' ? value : _default
}

export const parseBoolean = (value: any, _default: boolean): boolean => {
  if (!value) return _default
  return value === 'true'
}
