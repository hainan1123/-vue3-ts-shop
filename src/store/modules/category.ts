import { defineStore } from 'pinia'
import request from '@/utils/request'
import { ApiRes, CategoryItem } from '@/types/data'
import { topCategory } from '../constants'
const defaultCategory = topCategory.map((item) => {
  return {
    name: item
  }
})
export default defineStore('category', {
  state() {
    return {
      list: defaultCategory as CategoryItem[]
    }
  },
  actions: {
    async getAllCategory() {
      const res = await request.get<ApiRes<CategoryItem[]>>('/home/category/head')
      // 1. 加工后台返回的数据，加一个 open 属性控制显示隐藏，用于控制显示隐藏
      // 默认都隐藏
      res.data.result.forEach((item) => {
        item.open = false
      })
      this.list = res.data.result

    },
    show(id: string) {
      const category = this.list.find((item) => item.id === id)
      // ! 非空断言
      category!.open = true
    },
    hide(id: string) {
      const category = this.list.find((item) => item.id === id)
      category!.open = false
    },
  }
})