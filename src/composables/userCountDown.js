import { computed, onMounted, ref } from "vue"
import dayjs from "dayjs";

//封装倒计时逻辑函数
export const useCountDown = () => {
  //响应式数据
  const time = ref(0)
  let timer = null
  //格式化时间
  const formatTime = computed(() =>dayjs.unix(time.value).format('mm分ss秒'))
  //开启倒计时函数
  const start = (currentTime) => {
    time.value=currentTime
    setInterval(() => {
      time.value--
    },1000)
  }
  //组件销毁时清除定时器
  onMounted(() => {
    timer && clearInterval(timer)
  })
  return {
    formatTime,start
  }
}
