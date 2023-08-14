import { ref} from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
  //state导航列表
  const categoryList = ref([ ])

  //action获取导航数据方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    categoryList.value = res.result
  }
return{getCategory,categoryList}
})
