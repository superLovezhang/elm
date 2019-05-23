<template>
  <div class='OrderBox' ref="orderBox">
    <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt>
    <p>登陆后查看外卖订单</p>
    <router-link tag="a" to="/login" class="login">立即登录</router-link>>
    <tabBar />
  </div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
    components:{
        tabBar
    },
    mounted(){
        var height = document.documentElement.clientHeight - 60;
        this.$refs.orderBox.style.height = height + 'px';
    }
};
</script>

<style lang="scss" scoped>
.OrderBox{
    width: 100%;
    color: #727272;
    text-align: center;
    font-size: 15px;
    background-color: #f5f5f5;
}
.OrderBox >img{
    margin-top: 40%;
    width: 50%;
}
.OrderBox p{
    font-size: 18px;
}
.login{
    width: 130px;
    margin-top: 20px;
    display: inline-block;
    text-decoration: none;
    line-height: 40px;
    color: white;
    text-align: center;
    background-color: #56d176;
}
</style>