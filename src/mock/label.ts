import { getInteger } from '../utils/number_utils'
import { LabelType } from '../typings/Models/Label'

export const labels: LabelType[] = [
  'javascript',
  'java',
  'python',
  'source code',
  'hometown',
  'learning',
  'underscore',
  'axios',
  'vue',
  'react',
]

export const labelCountMap = new Map<LabelType, number>()
export const labelArticlesIdMap = new Map<LabelType, Set<number>>()

const getLabel = (): LabelType => {
  const labelName = labels[getInteger({ max: labels.length })]
  const count = labelCountMap.get(labelName)
  if (count) labelCountMap.set(labelName, count + 1)
  else labelCountMap.set(labelName, 1)

  return labelName
}

const addArticle = (label: LabelType, id: number) => {
  const labelArticlesIdSet = labelArticlesIdMap.get(label)
  if (labelArticlesIdSet) labelArticlesIdSet.add(id)
  else labelArticlesIdMap.set(label, new Set([id]))
}

export const getLabels = (id: number, count = 3): LabelType[] => {
  const labels: LabelType[] = Array(count)
  
  for (let i = 0; i < count; ++i) {
    labels[i] = getLabel()
    addArticle(labels[i], id)
  }
  return labels
}
