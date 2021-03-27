import { Random } from 'mockjs'

export interface ImageConfig {
  width?: number
  height?: number
  label?: string
}

export function getImage({
  width = 100,
  height = 100,
  label = 'image',
}: ImageConfig = {}): string {
  return Random.image(
    `${width}x${height}`,
    Random.color(),
    Random.color(),
    `${label} with ${width}x${height}`,
  )
}

export default {
  getImage,
}
