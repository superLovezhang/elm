const goods = {
    state :{
       count : 0,
       menuIndex:[0,0,0,0,0,0,0,0,0]
    },   
    mutations:{
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