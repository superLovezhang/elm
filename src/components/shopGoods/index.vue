<template>
  <div>
    <div class="redBag">
      <img width="100%" src="https://fuss10.elemecdn.com/6/1b/b32968ee64d00d2b85071d70ddbe7png.png?imageMogr/format/webp/thumbnail/686x/">
    </div>
    <div class="outer">
      <div class="foodItems">
        <p>商家推荐</p>
        <div class="swiper-wrapper" v-for="(item, index) in goods.recommend" :key=index>
          <div class="foodItem" v-for="items in item.items" :key=items.virtual_food_id>
            <img width="130px" :src="items.image_path | imgFormat">
            <div class="meau">{{ items.name }}</div>
            <!-- <p>{{ items.description }}</p> -->
            <p>月售{{ items.month_sales }} 好评率{{ items.rating }}%</p>
            <div class="price">
              <p>￥3</p>
              <add />
            </div>
        </div>
      </div>
    </div>
    </div>
    <div class="goodsBox" ref="goodsBox">
      <div class="menu_swiper">
        <ul>
          <li v-for="(item, index) in menu" :key="index"  @touchstart="toCurrentpage(index)" :class="[index === current? isSelect : '']">
            {{ item.name }} <span v-if=" $store.state.goods.menuIndex[index]">{{ $store.state.goods.menuIndex[index] }}</span>
          </li>
        </ul>
      </div>
      <div class="goods_swiper" ref="goods_swiper">
        <ul v-for="(item, menuIndex) in menu" :key="item.id">
            <h3>{{ item.name }}<span> {{ item.description }}</span></h3>
            <li v-for="(foods, foodsIndex) in item.foods" :key="foodsIndex">
              <div class="items">
                <img width="30%" :src="foods.image_path | imgFormat">
                <div class="right">
                    <h3>{{ foods.name }}</h3>
                    <p>{{ foods.description }}</p>
                    <p>月售{{ foods.month_sales }}份 好评率{{ foods.satisfy_rate }}%</p>
                    <div class="add">
                      <p class="price">￥3</p>
                      <add @toBig="toBig" :foodsIndex="foodsIndex" :menuIndex="menuIndex"/>
                    </div>
                </div>
              </div>
            </li>
        </ul>
      </div>
      <div class="shopCar">
        <p>满15减1元，满32减2元</p>
        <div class="bottom">
           <div class="outbox" ref="outbox">
             <span  :class="{ 'outActive':this.$store.state.goods.count }"><i class="iconfont icon-gouwuche"></i></span>
           </div>
           <div class="description">
             <div class="left">
               <p :class="[ this.$store.state.goods.count !== 0 ? 'priceActive' : '' ]">{{ this.$store.state.goods.count === 0 ? '未选购商品' :  '￥'+this.$store.state.goods.count * 3}}</p>
               <p>另需配送费1元</p>
             </div>
             <div class="right" :class="[ this.$store.state.goods.count !== 0 ? 'rightActive' : '' ]">
               <p>{{ this.$store.state.goods.count === 0 ? '￥10起送' : '去结算'}}</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import add from '@/components/add'
import goods from '../../../public/data/shopItem.json';
export default {
    data(){
        return{
            menu:goods.menu,
            nowImg:"",
            start:"https://fuss10.elemecdn.com/",
            end:".jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
            current:0,
            isSelect:"isSelect",
            scrolls:[],
            offSpan:goods.menu,
            indexs:0,
            goods:goods
        }
    },
    created(){
      console.log(goods);
      this.$store.commit('menuIncream');
      console.log(this.$store.state.goods.menuIndex)

    },
    mounted(){
      var height = document.documentElement.clientHeight - 50;
      this.$refs.goodsBox.style.height = height + 'px';
      
      var allUl = this.$refs.goods_swiper.children;
      for(let i=0; i<allUl.length; i++){
        this.scrolls.push(allUl[i].offsetTop);
      }

      var sc = this.$refs.goods_swiper;
      sc.onscroll = ()=>{
        for(var i=0; i<allUl.length; i++){
          if(parseInt(sc.scrollTop) >= this.scrolls[i]){
             this.current = i;
          }
        }
      }
    },
    computed:{


    },
    methods:{
      toCurrentpage(index){
         var sc = this.$refs.goods_swiper;
         sc.scrollTop = this.scrolls[index]+1;
      },
      toBig(){
        this.$refs.outbox.className += ' boxBig'
        setTimeout(() => {
          this.$refs.outbox.className = 'outbox';
        }, 300);
      }
  },
  components:{
    add
  }
}
</script>

<style lang="scss" scoped>
.redBag {
  width: 90%;
  margin: 5px auto;
}
.outer{
  width: 100%;
  overflow: hidden;
}
.foodItems {
  width: 100%;
  color: #333;
  padding: 0 20px;
  margin: 0;
  overflow: auto;
  margin-bottom: 15px;
  box-sizing: border-box;
}
.foodItems p {
  line-height: 40px;
}
.foodItems .swiper-wrapper{
  width: 130%;
}
.foodItem {
  width: 130px;
  margin-right: 10px;
  display: inline-block;
}
.foodItem .meau {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.meau + p {
  color: #999999;
  line-height: 18px;
  font-size: 12px;
}
.foodItem .price {
  color: #ff5339;
  display: flex;
  justify-content: space-between;
}
.foodItem .price p {
  line-height: 25px;
}




.goodsBox {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  .menu_swiper {
    flex: 2.5;
    font-size: 13px;
    color: #666666;
    line-height: 50px;
    text-align: center;
    background-color: #f8f8f8;
    span{
      width: 12px;
      line-height: 12px;
      color: white;
      font-size: 10px;
      text-align: center;
      border-radius: 50%;
      background-color: #ff4716;
      display: inline-block;
    }
  }
  .goods_swiper {
    position: relative;
    flex: 7.5;
    overflow: auto;
    padding-left: 10px;
    padding-bottom: 68px;
    box-sizing: border-box;
    ul {
    > h3 {
        color: #6f6f6f;
        font-size: 13px;
        font-size: 12px;
        line-height: 35px;
        span {
        color: #999999;
        }
    }
      li {
        height:100px;
        overflow: hidden;
        margin-bottom: 10px;
        position: relative;
        .items {
          width: 100%;
          img {
            float: left;
            margin-right: 10px;
            vertical-align: top;
          }
          .right {
            float: right;
            width: 65%;
            line-height: 20px;
            h3 {
              width: 70%;
              color: #333;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 16px;
            }
            >p {
              width: 70%;
              color: #b8b8b8;
              font-size: 10px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .add {
              width: 60%;
              bottom: 0;
              display: flex;
              justify-content: space-between;
              position: absolute;             
              >p{
              color: #ff6048;
              font-size: 15px;
              }
              >div{
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  .shopCar{
    bottom: 0;
    z-index: 11;
    width: 100%;
    height: 68px;
    position: fixed;
    background-color: red;
    >p{
      color: #333;
      font-size: 10px;
      text-align: center;
      line-height: 20px;
      background-color: #fffad8;
    }
    .bottom{
      height: 100%;
      position: relative;
      padding-left: 90px;
      background-color: #505052;
      .outbox{
         width: 50px;
         height: 50px;
         top: -10px;
         left: 15px;
         position: absolute;
         border-radius: 50%;
         background-color: #444444;
         >span{
            width: 80%;
            height: 80%;
            position: absolute;
            left: 50%;
            top: 50%;
            color: #5f5f63;
            transform: translate(-50%,-50%);
            border-radius: 50%;
            text-align: center;
            display: inline-block;
            background-color: #363636;
            i{
              line-height: 40px;
              font-size: 22px;
            }
         }
      }
      .description{
        display: flex;
        line-height: 50px;
        align-items: center;
        .left{
          flex:6;
          height: 100%;          
          line-height: normal;
          color: #8c8c8c;
          font-size: 12px;
        }
        .right{
          flex:4;
          text-align: center;
          height: 100%;
          font-weight: 700;
          color: white;
          font-size: 18px;

        }
      }
    }
  }
}
.isSelect{
  background-color: white;
}
.boxBig{
  animation: big 0.3s;
}
.outActive{
  color: white !important;
  background-color: #3190e8 !important;
}
.rightActive{
  background-color: #38ca73;
}
.priceActive{
  color: white;
  font-size: 18px;
}
@keyframes big{
  0%{
    transform: scale(1);
  }
  25%{
    transform: scale(0.6);
  }
  50%{
    transform: scale(1);
  }
  75%{
    transform: scale(0.8);
  }
  100%{
      transform: scale(1);
    }
}
</style>