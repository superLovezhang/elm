import Vue from 'vue';
import prop from './Popup'; 

export var Pop = (function (){
    
    return function (opts){
        var defaults = opts;
        var newPop = Vue.extend(prop);
        var vm = new newPop({ 
            el:document.createElement('div'),
            data(){
                return{
                    message:defaults
                }
            },
            mounted(){
                setTimeout(() => {
                    document.body.removeChild(this.$el)
                }, 1500);
            }
         })
         document.body.appendChild(vm.$el);
    }
})() 