<template>
  <div class="mineBox" ref="mineBox">
    <div class="login" @touchstart="$router.push('/login')">
      <img
        width="60px"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
      >
      <div class="vip">
        <h3>登录/注册</h3>
        <p class="iconfont icon-shouji">
          <i></i>登陆后享受更多特权
        </p>
      </div>
      <span class="iconfont icon-more"></span>
    </div>
    <div class="exchange">
       <div class="redEnvelope">
           <div class="redItem">
               <i class="iconfont icon-icon--"></i>
           </div>
           <p>红包</p>
       </div>
       <div class="integral">
           <div class="greenItem">
               <i class="iconfont icon-jinbi"></i>
           </div>
           <p>金币</p>
       </div>
    </div>
    <div class="littleItem">
        <div class="address">
            <div class="left">
                <i class="iconfont icon-dingwei1"></i>
                <span>我的地址</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="address">
            <div class="left">
                <i style="color:#6ac20b" class="iconfont icon-shopping"></i>
                <span>金币商城</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="address">
            <div class="left">
                <i style="color:#fc7b53" class="iconfont icon-gift"></i>
                <span>分享拿20元现金</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="address">
            <div class="left">
                <i style="color:#fc7b53" class="iconfont icon-htmal5icon31"></i>
                <span>我的客服</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="address">
            <div class="left">
                <i class="el-icon-platform-eleme"></i>
                <span>下载饿了么APP</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
        <div class="address">
            <div class="left">
                <i class="iconfont icon-tianchongxing-"></i>
                <span>规则中心</span>
            </div>
            <i class="iconfont icon-more"></i>
        </div>
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
    mounted(){
        var height = document.documentElement.clientHeight - 60;
        this.$refs.mineBox.style.height = height + 'px';
    }
};
</script>

<style lang="scss" scoped>
.mineBox{
    background-color: #f5f5f5;
}
.login {
  width: 100%;
  height: 120px;
  position: relative;
  padding: 30px 18px;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #00aaff, #0085ff);
}
.login img {
  margin-right: 20px;
  border-radius: 50%;
}
.vip {
  width: 145px;
  height: 50px;
  color: white;
  vertical-align: top;
  display: inline-block;
}
.vip h3 {
  font-size: 20px;
  margin-bottom: 10px;
}
.vip p {
  font-size: 12px;
}
.login .icon-more {
  position: absolute;
  color: white;
  top: 50%;
  transform: translateY(-50%);
  right: 17px;
}
.exchange{
    width: 100%;
    color: #666666;
    height: 85px;
    font-size: 12px;
    display: flex;
    margin-bottom: 10px;
    background-color: white;
}
.redEnvelope,.integral{
    width: 50%;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #f2f2f2;
}
.redItem,.greenItem{
    width: 30px;
    line-height: 30px;
    margin: 20px auto 5px;
    text-align: center;
    color: white;
    border-radius: 50%;
    background-color: #ff5f3e;
}
.greenItem{
    background-color:#6ac20b;
}
.redEnvelope p,.integral p{
    text-align: center;
}
.littleItem{
    width: 100%;
    padding: 0 18px;
    box-sizing: border-box;
    background-color: white;
}
.address{
    width: 100%;
    line-height: 50px;
    display: flex;
    color: #333;
    justify-content: space-between;
}
.address i{
    color: #4aa5f0;
    font-size: 18px;
    margin-right: 8px;
}
.address .icon-more{
    color: #bbbbbb;
}
</style>