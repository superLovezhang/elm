<template>
  <div class="Home">
    <headers/>
    <HomeSearch/>
    <foodentry/>
    <quantity/>
    <el-divider>推荐商家</el-divider>
    <div class="filter" ref="filter">
      <p @click="extend">
        综合排序
        <i class="iconfont icon-down"></i>
      </p>
      <router-link tag="p" to="/Home/nextNear">距离最近</router-link>
      <router-link tag="p" to="/Home/alliance">品质联盟</router-link>
      <p>
        筛选
        <i class="iconfont icon-down icon-shaixuan"></i>
      </p>
      <div class="Dropdown" ref="Drop">
        <ul>
          <li style="color:#3492e8;">综合排序</li>
          <li>好评优先</li>
          <li>销量最高</li>
          <li>起送价最低</li>
          <li>配送最快</li>
          <li>配送费最低</li>
          <li>人均从低到高</li>
          <li>人均从高到底</li>
          <li>通用排序</li>
        </ul>
      </div>
    </div>
    <tabBar class="tab"/>
    <router-view></router-view>
    <div class="toUp" ref="up" @click="toUp">
      <i class="iconfont icon-upload"></i>
    </div>
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
  data(){
    return{
      count:0
    }
  },
  mounted(){
    var filter = this.$refs.filter;
    var filterTop = filter.offsetTop;
    window.addEventListener('scroll',()=>{
      var top = document.documentElement.scrollTop || document.body.scrollTop;
      if(top >= (filterTop - 50)){
         filter.className = 'filter Ceiling';
      }else{
        filter.className = 'filter';
      }
    })
  },
  methods:{
    extend(){
      this.count += 1;
       if(this.count % 2){
          this.$refs.Drop.className = 'Dropdown open';
       }else{
          this.$refs.Drop.className = 'Dropdown'
       }
    },
    toUp(){
      if(document.documentElement.scrollTop){
          document.documentElement.scrollTop = 0
      }else{
          document.body.scrollTop = 0;
      }
    }
  }
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
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 11;
  position: relative;
  text-align: center;
  background-color: white;
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
.Ceiling{
  position: fixed;
  top:48px;
}
.Dropdown {
  width: 100%;
  height: 0;
  top: 49px;
  z-index: 11;
  overflow: hidden;
  transition: all 0.3 ease-in;
  text-align: left;
  border-top: 1px solid #ccc;
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
.open{
  visibility: visible;
  height: 800%;
}
.toUp{
  width: 45px;
  line-height: 45px;
  position: fixed;
  bottom: 100px;
  right: 10px;
  z-index: 100;
  background-color: white;
  text-align: center;
  border: 1px #ccc solid;
  border-radius: 50%;
}
.icon-upload{
  font-size: 25px;
}
</style>