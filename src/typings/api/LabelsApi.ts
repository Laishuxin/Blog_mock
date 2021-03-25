import { ResponseMessages } from './_ResponseMessage'
import { RestfulApi } from './_RestfulApi'
import { StatusCodes } from './_StatusCodes'

export interface LabelsApi extends RestfulApi {
  data: {
    label: string
    count: number
  }[]
}

export type LabelsApiStatusOptions =
  | StatusCodes.OK
  | StatusCodes.BAD_REQUEST
  | StatusCodes.UNAUTHORIZED
  | StatusCodes.NOT_FOUND
  | StatusCodes.INTERNAL_SERVER_ERROR
  
export type LabelsApiMessageOptions = 
  | ResponseMessages.SUCCESS
  | ResponseMessages.LACK_OF_PARAMS
  | ResponseMessages.NOT_FOUND
  | ResponseMessages.SERVER_ERROR
  | ResponseMessages.UNAUTHORIZED