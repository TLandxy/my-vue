//导入图片是否进入可视区域
import { useIntersectionObserver } from '@vueuse/core'


export const  LazyPlugin = {
  install(app){
    app.directive('img-lazy',{
      mounted(el,binding){
     const {stop} = useIntersectionObserver(
    el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
          stop()
        }
      },
    )
      }
    })
    
  }
}