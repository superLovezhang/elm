<template>
  <div class="header">
    <div class="ToAddress">
      <p><i class="el-icon-location"></i>武汉交通职业学院临湖五舍</p>
      <i class="el-icon-caret-bottom"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  // margin-bottom: -1px;
  padding: 1.3rem 0 0 1.0625rem;
  background-color: #00a0ff;
}
.header p {
  font-weight: 800;
  color: white;
  font-size: 18px;
  width: 180px;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.el-icon-caret-bottom {
  color: white;
}
</style>