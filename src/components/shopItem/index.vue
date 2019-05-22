<template>
  <div :style="{'backgroundColor': '#f5f5f5' }">
    <div class="shopItemBox">
      <div class="brand">
        <img width="98%" src="https://fuss10.elemecdn.com/3/55/df6f86a1a87c0171a426505387f51png.png?imageMogr/format/webp/thumbnail/!460x260r/gravity/Center/crop/460x260/">
        <div class="description">
          <h3>满满心意 年年如意</h3>
          <p>公司成立于2006年，专业从事于冷鲜食品制造与连锁经营,目前拥有苏州高新区生产基地、南京江宁生产基地、 ...</p>
        </div>
        <div class="check">
          <p>查看品牌故事</p>
        </div>
      </div>
      <div class="translate">
        <h3>配送信息</h3>
        <p>由商家配送提供配送，约38分钟送达，距离83m配送费￥1</p>
      </div>
      <div class="serve">
        <h3>商家服务</h3>
        <p><span>赔</span> 商家原因导致订单取消，赔付代金券</p>
      </div>
      <div class="scene">
        <h3>商家实景</h3>
        <div class="photo">
          <img width="100px" src="https://fuss10.elemecdn.com/4/e1/d97ce14328eda54e7b9cc2820226cpng.png?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/">
          <span>门面（1张）</span>
        </div>
        <div class="photo">
          <img width="100px" src="https://fuss10.elemecdn.com/9/26/92eeb7cc1574a1992f00227af317bpng.png?imageMogr/format/webp/thumbnail/!200x200r/gravity/Center/crop/200x200/">
          <span>大堂（1张）</span>
        </div>
      </div>
      <div class="shopInfo">
        <h3>商家信息</h3>
        <p class="intro">暂无简介</p>
        <p>品类 <span>馄饨抄手，其他快餐</span></p>
        <p>商家电话 <span>13177412216<i class="iconfont icon-more"></i></span></p>
        <p>地址<span>武汉市洪山区青菱街道红霞村福星惠誉东澜岸47-53-1-商22</span></p>
        <p>营业时间 <span>09:00-21:30</span></p>
      </div>
      <div class="quanlification">
        <p>营业资质<i class="iconfont icon-more"></i></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    components:{
        
    },
      methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.shopItemBox{
  .brand{
    height: 350px;
    padding: 20px;
    margin-bottom: 12px;
    box-sizing: border-box;
    background-color: white;
    .description{
      margin-top: 15px;
      h3{
        color: #333;
        font-size: 16px;
      }
      p{
        color: #666666;
        font-size: 13px;
        line-height: 20px;
      }
    }
    .check{
      margin-top: 28px;
      p{
        color: #666666;
        font-size: 13px;
        text-align: center;
      }
    }
  }
  .translate,.serve{
    margin-bottom: 12px;
    background-color: white;
    padding: 25px 95px 15px 15px;
    h3{
      color: #333;
      font-size: 16px;
      margin-bottom: 15px;
    }
    p{
      font-size: 13px;
      color: #797979;
      line-height: 24px;
      span{
        font-size: 12px;
        color: #a7a7a7;
        padding: 0px 3px;
        border: 1px solid #a7a7a7;
      }
    }
  }
  .scene{
    padding: 15px 13px;
    margin-bottom: 12px;
    background-color: white;
    h3{
      color: #333;
      font-size: 15px;
      font-weight: 400;
      margin-bottom: 15px;
    }
    .photo{
      width: 100px;
      margin-right: 10px;
      display: inline-block;
      position: relative;
      img{
        vertical-align: top;
      }
      span{
        left: 0;
        bottom: 0;
        width: 100%;
        color: white;
        text-align: center;
        font-size: 13px;
        position: absolute;
        background-color: rgba(0, 0, 0, .5)     
      }
    }
  }
  .shopInfo{
    padding: 22px 10px;
    padding-bottom: 0;
    margin-bottom: 12px;
    background-color: white;
    h3{
      font-size: 15px;
    }
    .intro{
      color: #8a8a8a;
    }
    >p{
      color: #333;
      display: flex;
      font-weight: 700;
      font-size: 13px;
      padding: 15px 0;
      justify-content: space-between;
      border-bottom: 1px solid #f4f4f4;
      span{
        color: #66667f;
        max-width: 300px;
        font-weight: normal;
      }
    }
    p:nth-child(5){
      align-items: center;
      span{
        text-align: right;
      }
    }
    p:last-child{
      border: 0;
    }
  }
  .quanlification{
    color: #333;
    font-size: 15px;
    font-weight: 700;
    padding: 15px 10px;
    background-color: white;
    p{
      display: flex;
      justify-content: space-between;
    i{
      color: #cfcfcf;
    }
    }
  }
}
</style>