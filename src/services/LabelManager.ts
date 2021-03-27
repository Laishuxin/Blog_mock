import { labelArticlesIdMap, labelCountMap, labels } from '../mock/label'
import {
  LabelsApiQuery,
  LabelsApiQueryDefaults,
} from '../typings/api/LabelsApi'
import { LabelType } from '../typings/Models/Label'

class LabelManager {
  private _labels = labels
  private _labelCountMap = labelCountMap
  private _labelArticlesIdMap = labelArticlesIdMap

  constructor() {}

  getLabels({
    sortField = LabelsApiQueryDefaults.sortField,
    isAsc = LabelsApiQueryDefaults.isAsc,
  }: LabelsApiQuery): [LabelType, number][] {
    const entries = this._labelCountMap.entries()
    const result = Array.from(entries)
    if (sortField === 'articleCount') {
      result.sort((a, b) => {
        return isAsc ? a[1] - b[1] : b[1] - a[1]
      })
    }
    return result
  }

  getArticlesIdByLabelName(label: LabelType): number[] | undefined {
    const articleIdSet = this._labelArticlesIdMap.get(label)
    return articleIdSet ? Array.from(articleIdSet.keys()) : undefined
  }

  get labels(): LabelType[] {
    return this._labels
  }
}

export default LabelManager
