import httpInstance from '@/utils/http.js'
 export function getBannerAPI(params={}){
  const {distributionSite = '1'} = params
  return httpInstance({
    url:'/home/banner',
    params:{
      distributionSite
    }
  })
 }


 //新鲜好物封装
 export const findNewAPI = () => {
  return httpInstance({
    url:'/home/new'
  })
}
/* /home/brand */
//热门推荐
export const findHotAPI = () => {
  return httpInstance({
    url:'/home/hot'
  })
}

 export const getGoodsAPI = () => {
  return httpInstance({
    url:'/home/goods'
  })
} 