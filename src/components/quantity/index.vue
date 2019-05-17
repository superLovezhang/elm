<template>
  <div class="quantityBox">
    <div class="quantity">
      <img src="@/assets/2.png" height="100px">
      <h3>品质套餐</h3>
      <p>搭配齐全吃得好</p>
      <p>立即抢购 ></p>
    </div>
    <div class="superVip">
      <img src="@/assets/king.jpg" width="18px">
      <p>超级会员</p>
      <span>每月领20元红包</span>
      <span>立即开通></span>
    </div>
    <div class="swiper-container" ref="quantity">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="@/assets/loop1.jpg">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/loop2.jpg">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/loop3.jpg">
        </div>
        <div class="swiper-slide">
          <img src="@/assets/loop4.jpg">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <span class="littleLg">资质证照</span>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  mounted() {
    new Swiper(this.$refs.quantity, {
      loop: true,
      autoplay: true,
      pagination: {
        el: ".swiper-pagination",
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.quantityBox {
  padding: 0 17px;
}
.quantity {
  height: 100px;
  line-height: 27px;
  padding: 18px 0 0 12px;
  background-color: #f4f4f4;
}
.quantity > h3 {
  color: #333333;
}
.quantity p:nth-child(3) {
  color: #777777;
  font-size: 13px;
}
.quantity p:nth-child(4) {
  color: #c3a28a;
  font-size: 13px;
}
.quantity img {
  float: right;
}
.superVip {
  height: 40px;
  margin: 5px 0;
  padding: 0 0 0 17px;
  color: #644f1b;
  line-height: 40px;
  border-radius: 5px;
  background-color: #feeec1;
}
.superVip > img {
  padding-right: 5px;
  vertical-align: sub;
}
.superVip p {
  font-weight: 800;
  font-size: 14px;
  display: inline;
}
.superVip p::after {
  content: "\B7";
  font-size: 12px;
  margin: 0 5px;
  // font-weight: 700;
}
.superVip span:nth-child(3) {
  font-size: 12px;
  margin-right: 90px;
}
.superVip span:nth-child(4) {
  font-size: 12px;
}
.swiper-slide img{
  width: 100%;
}
.littleLg{
    width: 70px;
    line-height: 20px;
    position: absolute;
    right: 0;
    bottom: .625rem;
    text-align: center;
    color: white;
    z-index: 100;
    font-size: 12px;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, .7);
}
</style>