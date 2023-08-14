<script setup>
import HomePanal from "@/views/Home/HomePanel.vue";
import { findHotAPI  } from "@/apis/Home.js";
import { onMounted, ref } from 'vue';
const newList = ref([])
const getNewList = async () => {
  const res = await findHotAPI ()
  newList.value = res.result
}
onMounted(() => {
  getNewList()
})
</script>

<template>
  <HomePanal title="人气推荐" subTitle="人气推荐 好多商品">
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img  v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.title }}</p>
        <p class="price">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
</HomePanal>

</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>