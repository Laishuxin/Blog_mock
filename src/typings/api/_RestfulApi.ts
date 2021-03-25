export interface RestfulApi<T=any> {
  success: boolean
  message: string
  data   : T
  code   : number
}
