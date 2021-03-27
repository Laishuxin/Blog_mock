import { Random } from 'mockjs'

export interface TitleConfig {
  min?: number
  max?: number
}

export interface ParagraphConfig {
  paragraphMin?: number
  paragraphMax?: number
}
export interface ContentConfig extends ParagraphConfig {
  min?: number
  max?: number
}

export function getName(): string {
  return Random.cname()
}

export function getTitle({ min = 10, max = 30 }: TitleConfig = {}): string {
  return Random.ctitle(min, max)
}

export function getParagraph({
  paragraphMin = 10,
  paragraphMax = 30,
}: ParagraphConfig = {}): string {
  return `\t${Random.cparagraph(paragraphMin, paragraphMax)}`
}

export function getContent({
  min = 10,
  max = 20,
  paragraphMin = 10,
  paragraphMax = 30,
}: ContentConfig = {}): string {
  const paragraphs: string[] = []
  for (let i = min; i < max; ++i) {
    paragraphs.push(getParagraph({ paragraphMin, paragraphMax }))
  }
  return paragraphs.join('\n')
}
