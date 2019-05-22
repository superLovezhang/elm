<template>
  <div>
    <span v-if="indexs" @touchstart="reduce">-</span>
    <i v-if="indexs">{{ indexs }}</i>
    <span class="jia" @touchstart="add">+</span>
  </div>
</template>

<script>
export default {
    props:{
        foods:{
            type:Object,
        },
        foodsIndex:{
          type:Number
        },
        menuIndex:{
          type:Number
        }
    },
    data(){
        return{
            indexs:0,
            
        }
    },
    methods:{
      reduce(){
        this.indexs -= 1;
        // window.localStorage.setItem('Foodsindex',this.indexs);
        this.$store.state.goods.count--;
        // if(!this.menuIndex){
          this.$store.commit('subMenu', this.menuIndex)
        // }
      },
      add(){
        this.indexs += 1;
        this.$store.state.goods.count++;
        this.$emit('toBig');
        // console.log(this.menuIndex,this.foodsIndex)      
        // if(!this.menuIndex){
          this.$store.commit('addMenu', this.menuIndex)
        // }
      },
    }
};
</script>

<style lang="scss" scoped>
span {
  width: 25px;
  height: 25px;
  font-size: 20px;
  // line-height: 25px;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  color: #2395ff;
  border: 1px solid #2395ff;
  box-sizing: border-box;
  background-color: white;
}
i {
  margin: 0 5px;
  color: black;
  font-style: normal;
}
.jia {
  width: 25px;
  height: 25px;
  font-size: 20px;
  // line-height: 25px;
  color: white;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  background-color: #2395ff;
}
</style>