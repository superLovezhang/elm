<template>
  <div class="shopBox">
    <div class="topItem">
      <img
        src="https://fuss10.elemecdn.com/1/e1/36bfcddf3b5ce6019141f2711a627png.png?imageMogr/format/webp/thumbnail/150x/"
      >
      <i class="el-icon-arrow-left" @click="$router.back()"></i>
    </div>
    <div class="description">
      <h3>
        如意馄饨(东澜岸店)
        <i class="el-icon-caret-right"></i>
      </h3>
      <p class="order">评价4.5 月售1233单 商家配送约40分钟</p>
      <div class="shopTag">
        <span>满减</span> 满15减1，满32减2
      </div>
      <p class="down">公告：上课时间订单请备注时间，香菜辣椒醋如需添加请备注。</p>
    </div>
    <div class="swich" ref="swich">
      <router-link tag="div" to="/shop/goods" class="order">
        <p>点餐<span></span></p>
      </router-link>
      <router-link tag="div" to="/shop/rate" class="evaluation">
        <p>评价</p>
      </router-link>
      <router-link tag="div" to="/shop/shopItems" class="merchant">
        <p>商家</p>
      </router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
// import Swiper from "swiper";
// import "swiper/dist/css/swiper.min.css";
import add from '@/components/add'
import goods from '@/components/shopGoods';
export default {
  data(){
    return{
    }
  },
  mounted() {
     var swich = this.$refs.swich;
     var top = swich.offsetTop;
     window.onscroll = function(){
       var scrollTop = document.documentElement.scrollTop | document.body.scrollTop;
       if(scrollTop >= top){
        swich.className = 'swich topFixed'
      }else{
        swich.className = 'swich';
      }
     }
  },
  components:{
    goods,
    add
  }
};
</script>

<style lang="scss" scoped>
.topItem {
  width: 100%;
  height: 100px;
  position: relative;
  padding: 8px 15px;
  box-sizing: border-box;
  background-image: url(../..//assets/top.png);
  background-size: cover;
}
.topItem:before {
  content: " ";
  width: 100%;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
.topItem img {
  width: 80px;
  height: 80px;
  left: 50%;
  bottom: -15px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translateX(-50%);
  position: absolute;
  border-radius: 8px;
}
.topItem i {
  position: absolute;
  top: 8px;
  left: 15px;
  font-weight: 800;
  font-size: 20px;
  color: white;
}
.description {
  width: 78%;
  height: 100px;
  line-height: 25px;
  margin: 30px auto;
  font-size: 12px;
  color: #999999;
}
.description h3 {
  font-size: 22px;
  color: #333;
}
.description h3,
.description .order {
  text-align: center;
}
.shopTag {
  color: #333;
}
.shopTag span {
  width: 35px;
  line-height: 15px;
  color: white;
  display: inline-block;
  text-align: center;
  background-color: #f07373;
}
.description .down {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.swich {
  width: 100%;
  height: 50px;
  display: flex;
  color: #333;
  font-weight: 800;
  border-bottom: 1px solid #f7f7f7;
}
.swich > div {
  flex: 1;
  text-align: center;
  line-height: 50px;
}
.swich p {
  display: inline-block;
  position: relative;
}
.swich span {
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #2395ff;
}
.shopBox 
.topFixed{
  top: 0;
  position: fixed;
  z-index: 11;
  background-color: white;
}
</style>