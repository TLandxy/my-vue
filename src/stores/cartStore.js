import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './user.js'
import { insertCartAPI,findNewCartListAPI,delCartAPI } from "@/apis/cart.js";

export const useCartStore = defineStore('cart',() => {
  const userStore = useUserStore()
  const islogin = computed(() =>userStore.userInfo.token)
    const cartList = ref([])


    //获取最新购物车列表
const updataNewList = async() => {
  const res = await findNewCartListAPI()
  cartList.value = res.result
}
    //action
    const addCart = async(goods) => {
      if (islogin.value) {
        //登录之后的加入购物车逻辑
        const {skuId,count} = goods
        await insertCartAPI({skuId,count})
        updataNewList ()
      }else{const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          item.count++
        } else {
          cartList.value.push(goods)
        }}
      //添加购物车操作
      //添加过count+1
      //没有push
    }
    



    //删除购物车
    const delCart = async(skuId) => {
      if (islogin.value) {
        //调用接口
        await delCartAPI([skuId])
        updataNewList()

      }else{
        const idx = cartList.value.findIndex((item) => skuId === item.skuId)
        cartList.value.splice(idx, 1)
      }
    }


    //清除购物车
    const clearCart = () => {
      cartList.value=[]
    }
 
    //计算属性
    //数量和总价
    const allCount = computed(() =>
      cartList.value.reduce((a, c) => a + c.count, 0)
    )
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    )
    //已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    )
    //已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    )

    //全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected))
    }
    //单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => item.skuId === skuId)
      item.selected = selected
    }

    //是否全选
    const isAll = computed(() => cartList.value.every((item) => item.selected))

    return {
      cartList,
      addCart,
      delCart,
      allCount,
      allPrice,
      singleCheck,
      isAll,
      allCheck,
      selectedCount,
      selectedPrice,
      islogin,
      clearCart,
      updataNewList
    }
  },
  { persist: true }
)
