

// 所有的接口的通用类型
export interface ApiRes<T> {
  code: string
  msg: string
  result: T
}
// 单个分类的类型

export type CategoryItem = {
  id: string
  name: string
  picture: string
  children: CategoryItem[]
  open: boolean
}