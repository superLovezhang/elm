<template>
  <div class="swiper-container">
    <div class="foodentry swiper-wrapper">
      <div class="swiper-slide">
        <ul>
          <li v-for="item in foodData1" :key="item.position">
            <img :src="item.web" width="45px">
            <p>{{ item.name }}</p>
          </li>
          <!-- <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li> -->
        </ul>
      </div>
      <div class="swiper-slide">
        <ul>
          <li v-for="item in foodData2" :key="item.position">
            <img :src="item.web" width="45px">
            <p>{{ item.name }}</p>
          </li>
         <!--  <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li>
          <li>
            <img src="@/assets/1.jpg" width="45px">
            <p>美食</p>
          </li> -->
        </ul>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import foodResource from '../../../public/data/data.json'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
export default {
    data(){
      return{
        foodData1:foodResource.splice(0,10),
        foodData2:foodResource.splice(0,7)
      }
    },
    mounted(){
         var mySwiper = new Swiper('.swiper-container',{
            loop:true,
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }  
}
</script>

<style lang="scss" scoped>
.swiper-container{
    height: 9.375rem;
}
.foodentry {
  width: 100%;
  height: 8.125rem;
}
.foodentry ul,
.foodentry li {
  float: left;
}
.swiper-slide > ul {
  width: 100%;
  height: 100%;
}
.foodentry li {
  width: 20%;
  height: 50%;
  box-sizing: border-box;
  padding-top: 0.5625rem;
  text-align: center;
}
.foodentry li > p {
  font-size: 12px;
  color: #666;
  margin-top: -0.625rem;
}
</style>