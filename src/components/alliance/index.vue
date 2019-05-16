<template>
  <div class="nextNearBox">
    <img
      src="https://fuss10.elemecdn.com/f/e4/f44ca5c4003c695148a40d7229929jpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/"
      width="80px"
    >
    <div class="rightItem">
      <p>米多面多(黄家湖科技店)</p>
      <p class="star">
        <img src="@/assets/star.png">
        4.7 月售3014单
      </p>
      <p>
        <span>￥20起送 | 配送费￥1</span>
        <span>415m | 39分钟</span>
      </p>
      <p>
        <span>盖浇饭</span>
      </p>
      <p>
        <div class="discount"><span>减</span> 满20减10, 满15减17, 满60减23</div>
        <div>五个活动<i class="iconfont icon-down"></i></div>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 4.5
    };
  }
};
</script>

<style lang="scss" scoped>
.nextNearBox {
  height: 218px;
  padding: 20px 12px;
  border-bottom: 1px solid #fcfcfc;
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
.rightItem p:nth-child(2) {
  
}
.rightItem p:nth-child(3) {
  display: flex;
  justify-content: space-between;
}
.rightItem p:nth-child(4) {
  width: 50px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 15px;
  border-radius: 3px;
  border: 1px solid #ccc; 
}
.discount{
  float: left;
}
.discount span{
    width: 17px;
    text-align: center;
    line-height: 17px;
    display: inline-block;
    color: white;
    border-radius: 3px;
    background-color: #f07373;
}
.discount +div{
  float: right;
}
</style>