<template>
  <div class="findBox" ref="findBox">
    <div class="promotions">
      <ul>
        <li>
          <div class="itemText1">
            <h4>金币商城</h4>
            <p>0元好物在这里</p>
          </div>
          <img
            width="85px"
            src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/"
            alt
          >
        </li>
        <li>
          <img
            width="50px"
            src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg?imageMogr/format/webp/"
          >
          <div class="itemText2">
            <h4>推荐有奖</h4>
            <p>20元现金拿不停</p>
          </div>
        </li>
        <li>
          <img
            width="50px"
            src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/"
          >
          <div class="itemText3">
            <h4>周边优惠</h4>
            <p>领取口碑好卷</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="limited">
       <div class="topGift">
           <div class="line"></div>
           <i class="iconfont icon-icon-test"></i>
           <span> 限时好礼 </span>
           <div class="line"></div>
           <div class="headersItem">
               金币换豪礼
           </div>
       </div>
       <div class="gift">
            <div class="giftItem">
                <span class="tagLogo">限时优惠</span>
                <img width="100px" src="https://fuss10.elemecdn.com/7/ec/adf8ae0fd52a0eb56f4332fb61ac2jpeg.jpeg?imageMogr/format/webp/">
                <p>3元品质联盟红包</p>
                <p>90金币 <span>￥3</span></p>
            </div>
            <div class="giftItem">
                <span class="tagLogo">特价换购</span>
                <img width="100px" src="https://fuss10.elemecdn.com/e/b5/605a11eae79849240113271dd1b94jpeg.jpeg?imageMogr/format/webp/">
                <p>数码经络按摩仪</p>
                <p>90金币 <span>￥239</span></p>
            </div>
            <div class="giftItem">
                <span class="tagLogo">特价换购</span>
                <img width="100px" src="https://fuss10.elemecdn.com/7/ad/f0132ee0fee6c57253ada4573364ejpeg.jpeg?imageMogr/format/webp/">
                <p>悬浮机械手感套装</p>
                <p>90金币 <span>￥139</span></p>
            </div>
       </div>
    <div class="downMore">查看更多 <i class="iconfont icon-more"></i></div>
    </div>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
  components:{
      tabBar
  },
  mounted() {
    var height = document.documentElement.clientHeight - 60;
    this.$refs.findBox.style.height = height + "px";
  }
};
</script>

<style lang="scss" scoped>
.findBox {
  width: 100%;
  background-color: #f5f5f5;
}
.promotions {
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
  background-color: white;
}
.promotions ul {
  float: left;
  width: 100%;
  height: 100%;
}
.promotions ul li {
  float: left;
  height: 50%;
  width: 50%;
  box-sizing: border-box;
  padding: 27px 20px;
}
.promotions ul li:nth-child(1) {
  height: 100%;
  box-sizing: border-box;
  border-right: 1px solid #f8f8f8;
}
.promotions ul li:nth-child(1) img,
.promotions ul li:nth-child(2) img,
.promotions ul li:nth-child(3) img {
  float: right;
}
.itemText1,
.itemText2,
.itemText3 {
  line-height: 25px;
}
.itemText1 {
  margin-bottom: 20px;
}
.itemText2 {
}
.itemText3 {
}
.itemText1 h4,
.itemText2 h4,
.itemText3 h4 {
  font-weight: normal;
}
.itemText1 h4 + p,
.itemText2 h4 + p,
.itemText3 h4 + p {
  color: #999999;
  font-size: 12px;
}
.itemText1 h4 {
  color: #ff9900;
}
.itemText2 h4 {
  color: #45b9e7;
}
.itemText3 h4 {
  color: #ed6660;
}
.promotions ul li:nth-child(2) {
  border-bottom: 1px solid #f8f8f8;
}
.limited{
    width: 100%;
    // height: 280px;
    box-sizing: border-box;
    padding: 25px 17px;
    background-color: white;
}
.topGift{
    width: 175px;
    // height: 25px;
    margin: 0 auto;
}
.line{
    width: 20px;
    height: 2px;
    margin-right: 10px;
    margin-bottom: 6px;
    display: inline-block;
    background-color: #a4a4a4;
}
.topGift span{
    color: #333;
    font-weight: 800;
    font-size: 18px;
}
.icon-icon-test{
    font-size: 18px;
    color: #f94843;
}
.headersItem{
    text-align: center;
    color: #999999;
    font-size: 12px;
}
.gift{
    width: 100%;
    height: 205px; 
    overflow: hidden;
    margin-top: 20px;
}
.giftItem{
    width: 33.3%;
    height: 100%;
    float: left;
    position: relative;
}
.tagLogo{
    top: 0;
    width: 60px;
    color: white;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    position: absolute;
    background-color: #413d3c;
}
.giftItem p:nth-child(3){
    font-size: 13px;
    color :#333333;
}
.giftItem p:nth-child(4){
    line-height: 30px;
    font-size: 13px;
    color :#ff5339;
}
.giftItem p:nth-child(4) span{
    color: #aaaaaa;
    text-decoration: line-through;
    font-size: 10px;
}
.downMore{
    display: block;
    color: #999999;
    font-size: 13px;
    text-align: center;
    text-decoration: none;
}
</style>