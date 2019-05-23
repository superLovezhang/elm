<template>
  <div :style="{ backgroundColor:'#f5f5f5' }">
    <div class="rateBox">
       <div class="left">
         <p>4.5</p>
         <div class="shoprate">
           <span>商家评分</span>
           <div>
             <img src="@/assets/star.png">
           </div>
         </div>
       </div>
       <div class="right">
         <div class="taste">
           <span>味道</span>
           <p>4.6</p>
         </div>
         <div class="pack">
           <span>包装</span>
           <p>4.5</p>
         </div>
         <div class="translate">
           <span>配送</span>
           <p>4.5</p>
         </div>
       </div>
    </div>
    <div class="filter">
      <p>全部 186</p>
      <p>最新</p>
      <p>好评 164</p>
      <p>差评 7</p>
      <p>有图 19</p>
      <p>味道好 18</p>
    </div>
    <div class="comment">
      <div class="commentItem" v-for="(item, index) in rateDate.comment" :key="index">
        <span></span>
        <div class="userName">
          <p>{{ item.username }}<span>{{ item.rated_at }}</span></p>
          <div class="star">
            <img src="@/assets/star.png">
            <span> 满意</span>
          </div>        
          <div class="userComment">
            <p>{{ item.rating_text }}</p>
            <!-- <img width="150px" src="https://fuss10.elemecdn.com/1/bf/e23e5c06b56633b0c8a0ee18d8bb0jpeg.jpeg?imageMogr/format/webp/thumbnail/300x/"> -->
            <img width="150px" :src="item.image_hash | imgFormat">
          </div>
          <p class="foodTag">{{ item.food_names }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rateDate from '../../../public/data/rate.json';
export default {
  data(){
    return{
      rateDate:rateDate
    }
  },
  created(){

  }
};
</script>

<style lang="scss" scoped>
.rateBox{
  height: 60px;
  display: flex;
  color: #666666;
  font-weight: 800;
  margin-bottom: 15px;
  background-color: white;
  padding: 30px 0 30px 20px;
  .left{
    flex: 3;
    display: flex;
    text-align: center;
    justify-content: space-between;
    >p{
      color: #ff6000;
      font-weight: normal;
      font-size: 35px;
    }
    .shoprate{
      span{
        font-size: 10px; 
        font-weight: normal;
      }
      div{
        img{
         width:50px;
         vertical-align: baseline;
      }
      }
    }
  }
  .right{
    flex: 7;
    display: flex;
    justify-content: space-around;
    .taste,.pack,.translate{
      text-align: center;
      flex: 1;
      // display: flex;
      // align-items: flex-start;
      span{
        font-weight: normal;
        font-size: 12px;
      }
      p{
        font-size: 18px;
      }
    }
    .pack{
      border-right: 1px solid #dddddd;
    }
  }
}
.filter{
  height: 50px;
  display: flex;
  padding: 15px 20px;
  flex-wrap: wrap;
  margin-bottom: 10px;
  border-bottom: 1px solid #f8f8f8;
  background-color: white;
  justify-content: flex-start;
  p{
   padding: 0px 5px;
    height: 25px;
    color: #6d7885;
    margin: {
      bottom: 10px;
      right: 10px;
    }
    border-radius: 3px;
    line-height: 25px;
    text-align: center;
    font-size: 12px;
    background-color: #ebf5ff;
    // background-color: #0097ff;
  }
  p:first-child{
    color: white;
    background-color: #0097ff;
  }
}
.comment{
  color: #333;
  width: 100%;
  
  font-size: 12px;
  padding: 20px 15px;
  box-sizing: border-box;
  background-color: white;
  .commentItem{
    padding: 15px 0;
    border: {
      bottom: 1px solid #eeeeee;
    }
    >span{
      width: 35px;
      height: 35px;
      vertical-align: top;
      border-radius: 50%;
      margin-right: 10px;
      display: inline-block;
      background-size: 35px;
      background-position: 0 35px;
      background-image: url('https://shadow.elemecdn.com/faas/h5/static/sprite.3ffb5d8.png');
    }
    .userName{
      width: 85%;
      display: inline-block;
      p:first-child{
        width: 100%;
        display: flex;
        margin-bottom: 5px;
        justify-content: space-between;
        >span{
          color: #a69999;
        }
      }
      .star{
        >img{
          width: 50px;
        }
        >span{
          color: #fb9a0b;
        }
      }
      .userComment{
        line-height: 30px;
        p{
          font-size: 14px;
        }
        img{

        }
      }
      .foodTag{
        padding: 0px 5px;
        line-height: 20px;
        font-size: 10px;
        color: #6d7885;
        text-align: center;
        display: inline-block;
        background-color: #ebf5ff;
      }
    }
  }
}
</style>