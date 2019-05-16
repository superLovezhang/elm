<template>
    <div class="tabBar">
       <router-link tag="div" to="/Home">
           <i class="el-icon-eleme"></i>
           <p>首页</p>
       </router-link>
       <router-link tag="div" to="/Find">
           <i class="iconfont icon-iconfontzhizuobiaozhun023103"></i>  
           <p>发现</p>   
        </router-link >
       <router-link tag="div" to="/Order">
           <i class="iconfont icon-dingdan"></i> 
           <p>账单</p>   
        </router-link>  
       <router-link tag="div" to="/Mine">
           <i class="iconfont icon-wode"></i> 
           <p>我的</p>   
       </router-link>   
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.tabBar{
    width: 100%;
    display: flex;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    z-index: 11;
    background-color: white;
    border-top: 1px solid #ccc;
    justify-content: space-between;
}
.el-icon-eleme{
    font-size: 25px;
}
.iconfont{
    font-size: 20px;
}
.tabBar div{
    flex: 1;
    color: #818181;
}
.tabBar p{
    font-size: 12px;
}
.router-link-active{
   color:#00a6ff !important;
}

</style>