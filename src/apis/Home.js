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


 /**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
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