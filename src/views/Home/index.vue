<template>
  <div class="Home">
    <headers/>
    <HomeSearch/>
    <foodentry/>
    <quantity/>
    <el-divider>推荐商家</el-divider>
    <div class="filter" ref="filter">
      <p>
        综合排序
        <i class="iconfont icon-down"></i>
      </p>
      <router-link tag="p" to="/Home/nextNear">距离最近</router-link>
      <router-link tag="p" to="/Home/alliance">品质联盟</router-link>
      <p>
        筛选
        <i class="iconfont icon-down icon-shaixuan"></i>
      </p>
      <div class="Dropdown">
        <ul>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
          <li>距离最远</li>
        </ul>
      </div>
    </div>
    <tabBar class="tab"/>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from "@/components/Header";
import HomeSearch from "@/components/HomeSearch";
import foodentry from "@/components/foodentry";
import quantity from "@/components/quantity";
import tabBar from "@/components/tabBar";
export default {
  components: {
    headers,
    HomeSearch,
    foodentry,
    quantity,
    tabBar
  },
  mounted(){
    var filter = this.$refs.filter;
    window.addEventListener('scroll',()=>{
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top >= filter.offsetTop){
         console.log(1111)
      }
    })
  },
};
</script>

<style lang="scss" scoped>
.Home {
  padding-bottom: 50px;
}
.el-divider--horizontal {
  width: 220px;
  margin: 24px 90px;
}
.el-divider {
  background-color: #999999;
}
.tab {
  position: fixed;
  bottom: 0;
}
.filter {
  height: 50px;
  display: flex;
  position: relative;
  text-align: center;
}
.filter > p {
  flex: 1;
  color: #898989;
  font-size: 15px;
  font-weight: 800;
  line-height: 50px;
}
.filter .router-link-active {
  color: #333333;
}
.Dropdown {
  width: 100%;
  top: 50px;
  border-top: 1px solid #ccc;
  text-align: left;
  z-index: 11;
  background-color: white;
  position: absolute;
}
.Dropdown ul {
  color: #333;
  font-size: 14px;
  font-weight: 600;
  // position: absolute;
  // left: 20px;
  line-height: 35px;
  padding: 10px 0 0 17px;
}
</style>