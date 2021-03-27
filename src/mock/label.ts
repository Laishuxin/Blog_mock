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

const labelCountMap = new Map<LabelType, number>()
const labelArticlesIdMap = new Map<LabelType, number[]>()

// init
labels.forEach((item) => {
  labelCountMap.set(item, 0)
  labelArticlesIdMap.set(item, [])
})

const increaseLabel = (label: LabelType) => {
  const count = labelCountMap.get(label)
  if (count) labelCountMap.set(label, count + 1)
}

const addArticle = (label: LabelType, id: number) => {
  const articleArr = labelArticlesIdMap.get(label)
  if (articleArr) articleArr.push(id)
}

export const getLabel = (id: number): LabelType => {
  const label = labels[getInteger({ max: labels.length })]
  increaseLabel(label)
  addArticle(label, id)
  return label
}


/**
 * Get label by article id with indicating labelCount.
 * @warn This method may encounter repeat labels
 * @param id article id
 * @param labelCount the number of labels
 * @returns label list
 */
export const getLabels = (id: number, labelCount = 2): LabelType[] => {
  const labels: LabelType[] = []
  for (let i = 0; i < labelCount; i++) {
    labels.push(getLabel(id))
  }
  return labels
}

export default getLabel
