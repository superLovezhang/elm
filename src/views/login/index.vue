<template>
    <div>
        <div class="loginBox">
            <div class="eleLogin">
                <img src="https://shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png">
            </div>
            <div class="input">
                <div class="first">
                    <input type="text" v-model="tell" maxlength="11" class="userName" placeholder="手机号">
                    <button ref="btn1" class="verification" disabled @click="aler">{{ flag ? '获取验证码' : code }}</button>
                </div>
                <input type="text" v-model="passward" maxlength="8" class="passward" placeholder="验证码">
                <p>新用户登录即自动注册，并表示已同意<a href="javascript:;">《用户服务协议》</a></p>
                <div class="login">
                    <a href="javascript:;">登录</a>
                </div>
                <a href="javascript:;" class="about">关于我们</a>
            </div>
        </div>
    </div>
</template>

<script>
import { clearInterval } from 'timers';
export default {
    data(){
        return{
            flag:true,
            timer:0,
            Countdown:0,
            tell:undefined,
            passward:undefined
        }
    },
    methods:{
        aler(){
            console.log(this.tell,this.passward);
            this.flag = false;
            this.Countdown = 30;
            // if(this.timer !== 0){
            //     window.clearInterval(this.timer);
            // }
            this.timer = setInterval(() => {
                this.Countdown--;
                if(this.Countdown <= 0){
                    window.clearInterval(this.timer);
                }
            }, 1000);
        }
    },
    watch:{   
        tell(newValue, oldValue){
            var tells = /^\d{11}$/;
            if(tells.test(newValue)){
                this.$refs.btn1.disabled = false;
                this.$refs.btn1.style.color = '#2395ff';
            }else{
                this.$refs.btn1.disabled = true;
                this.$refs.btn1.style.color = '#ccc';
            }
        },
        Countdown(newValue, oldValue){
            if(newValue <=0){
               
            }
        }
    },
    computed:{
        code(){
            if(this.Countdown > 0){
                this.$refs.btn1.disabled = true;
                this.$refs.btn1.style.color = '#ccc';
                return '已发送'+this.Countdown+'s';
            }else{
                this.$refs.btn1.disabled = false;
                this.$refs.btn1.style.color = '#2395ff';
                return '请重新发送';
            }
                
        }
    }
}
</script>

<style lang="scss" scoped>
.loginBox{
    padding: 50px 45px;
    .eleLogin{
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        img{
            width: 45%;
        }
    }
    .input{
        width: 100%;
        .userName,.passward{
            width: 100%;
            height: 45px;
            outline: none;
            color: #999;
            font-size: 14px;
            padding-left: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            box-sizing: border-box;
            border: 1px solid #dddddd;
            &:hover{
                border-color:  #0089dc;
            }
        }
        .first{
            position: relative;
            .userName{
        }
            .verification{
                top: 12px;
                right: 15px;
                border: 0;
                outline: none;
                font-size: 14px;
                color: #cccccc;
                // color: #2395ff;
                position: absolute;
                background-color: white;
            }
        }
        .passward{

        }
        >p{
            font-size: 14px;
            color: #999999;
            margin-bottom: 25px;
            a{
                color: #2395ff;
                text-decoration: none;
           }
        }
        .login{
            font-size: 14px;
            line-height: 43px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 15px;
            background-color: #4cd964;
            a{
                color: white;
                text-decoration: none;
            }
        }
    }  
    .about{
        display: block;
        color: #999999;
        font-size: 12px;
        text-decoration: none;
        text-align: center;
    }
}
</style>