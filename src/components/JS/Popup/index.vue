<template>
    <div class="PopupBox">
        <span>{{ message }}</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.PopupBox{
    left: 50%;
    top: 50%;
    border-radius: 5px;
    width: 180px;
    text-align: center;
    line-height: 50px;
    position: fixed;
    animation: appear 1s;
    background-color: rgba(0,0,0,.5);
    transform: translate(-50%,-50%);
}
@keyframes appear {
  from{
    opacity: 0;
    transform: translateX(-150px)
  }
  to{
    opacity: 1;
  }
}
</style>