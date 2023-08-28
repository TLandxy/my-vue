 <script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
 import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue' 
import LayoutSticky from '@/views/Layout/components/LayoutSticky.vue'

//触发获取导航列表的action
import {useCategoryStore  } from "@/stores/category.js"
import { onMounted } from 'vue'
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutNav />  
  <LayoutHeader />
  <LayoutSticky></LayoutSticky>
  <!-- <RouterView :key="$route.fullPath"/> -->
  <RouterView/>
  <LayoutFooter />
</template> 