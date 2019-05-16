<template>
  <div>
      <div class="shopItem nextNearBox" v-for="item in nearRestaurant.items" :key="item.authentic_id">
        <img
        :src="item.restaurant.src"
        width="80px"
      >
      <div class="rightItem">
        <p>{{ item.restaurant.name }}</p>
        <p class="star">
          <img src="@/assets/star.png">
          {{ item.restaurant.rating }} 月售{{ item.restaurant.recent_order_num }}单
        </p>
        <p v-for="dollar in item.restaurant.piecewise_agent_fee.rules" :key="dollar.fee">
          <span>￥{{ dollar.fee }}起送 | 配送费￥{{ dollar.price }}</span>
          <span>415m | 39分钟</span>
        </p>
        <p v-for="tag in item.restaurant.flavors" :key="tag.id" class="tag">
          <span>{{ tag.name }}</span>
        </p>
        <div class="down" ref="down">
          <div class="discount" v-for="act in item.restaurant.activities" :key="act.tips"><span>{{ act.icon_name }}</span> {{ act.tips }}</div>
          <div class="active" @click="toggle(item.restaurant.act_tag)">{{item.restaurant.type}}个活动<i class="iconfont icon-down"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import nearRestaurant from '../../../public/data/restaurant.json';
export default {
  data() {
    return {
      nearRestaurant:nearRestaurant,
    };
  },
  mounted(){

  },
  methods:{
    toggle(id){
      var downs = this.$refs.down[id];
      if(downs.style.height === '20px'){
          downs.style.height = 100 + 'px';
      }else{
        downs.style.height = 20 + 'px';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.nextNearBox {
  // height: 180px;
  overflow: hidden;
  padding: 20px 12px;
  // margin-bottom: 20px;
  // background-color: red;
  // border-bottom: 1px solid #ccc;
}
.nextNearBox > img {
  float: left;
  margin-right: 15px;
}
.rightItem {
  float: left;
  width: 70%;
  font-size: 12px;
  color: #818181;
  font-size: 12px;
  line-height: 25px;
  vertical-align: top;
}
.rightItem p:nth-child(1) {
  font-weight: 800;
  font-size: 16px;
  color: #333;
}
.rightItem p:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.tag{
  width: 50px;
  margin-right: 10px;
  display: inline-block;
  margin-bottom: 10px;
  text-align: center;
  line-height: 15px;
  border-radius: 3px;
  border: 1px solid #ccc; 
}
.down{
  height: 25px;
  overflow: hidden;
  position: relative;
}
.active{
  cursor: pointer;
}
.discount:nth-child(1) >span{
  background-color: #f07373;
}
.discount:nth-child(2) >span{
  background-color: #f1884f;
}
.discount:nth-child(3) >span{
  background-color: #70bc46;
}
.discount span{
    width: 17px;
    text-align: center;
    line-height: 17px;
    display: inline-block;
    color: white;
    border-radius: 3px;
    background-color: #999999;
}
.active{
  position: absolute;
  top: 0;
  right: 0px;
}
</style>