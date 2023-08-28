import { ref ,onMounted} from "vue";
import {getBannerAPI} from '@/apis/Home.js'

//封装轮播图代码

//获取banner
export function useBanner(){
const BannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI({distributionSite:'2'})
  
  BannerList.value = res.result
}
onMounted(() => {
  getBanner()
})
return {BannerList}
}

