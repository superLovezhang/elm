<template>
  <div id="homeBox" ref="HomeSearch">
    <a class="homeSearch" href="javascript:;">
      <i class="el-icon-search"></i>
      <span>搜索饿了么商家、商品名称</span>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
      var HomeSearch = this.$refs.HomeSearch;
      var top = HomeSearch.offsetTop;
      window.onscroll = function(){
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if(scrollTop >= top){
             HomeSearch.className = 'ceiling';
          }else{
              HomeSearch.className = '';
          }
      }
  }
};
</script>

<style lang="scss" scoped>
#homeBox {
  width: 100%;
  height: 3rem;
  background-color: #00a0ff;
  box-sizing: border-box;
  padding-top: 0.5rem;
}
.homeSearch {
  width: 90%;
  height: 80%;
  color: #9d9d9d;
  display: block;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  font-size: 0.875rem;
  background-color: white;
}
.homeSearch span {
  line-height: 2rem;
}
.ceiling{
  position: fixed;
  z-index: 10;
  top: 0;  
}
</style>