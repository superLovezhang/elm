const goods = {
    state :{
       count : 0,
       menuIndex:[]
    },   
    mutations:{
       menuIncream(state){
       for(var i=0; i<9; i++){
        state.menuIndex.push(0)
       }      
     },
     addMenu(state, i){
         state.menuIndex[i] += 1;
     },
     subMenu(state, i){
        state.menuIndex[i] -= 1;
    }

    },
    actions:{

    }
}
export default goods;