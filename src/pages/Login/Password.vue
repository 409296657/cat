<template>
    <div id="Password">
        <div class="container">
            <div class="pic">
                <img src="@/images/Login/welcome.png">
            </div>
            <div class="flex-box">
                <b>修改密码</b>
            </div>
            <div class="flex-box">
                <div class="content">
                    <div class="item-box">
                        <span>新密码：</span><input type="password" placeholder="请设置新密码" v-model="psw" @blur="checkPsw">
                        <p class="warn" v-if="checkpsw==1">*请输入密码</p>
                        <p class="warn" v-if="checkpsw==2">*密码最少6位</p>
                    </div>
                    <div class="item-box">
                        <span>新密码：</span><input type="password" placeholder="请再次输入新密码" v-model="psw2" @blur="checkPsw2">
                        <p class="warn" v-if="checkpsw2==1">*请再次输入密码</p>
                        <p class="warn" v-if="checkpsw2==2">*两次输入密码不一致</p>
                    </div>
                    <div class="item-box">
                        <span>邮箱：</span><input type="text" placeholder="请输入您注册时使用的邮箱" v-model="email" @blur="checkEmail">
                        <p class="warn" v-show="checkemail==1">*请输入邮箱地址</p>
                        <p class="warn" v-show="checkemail==2">*请输入正确的邮箱地址</p>
                    </div>
                    <div class="item-box">
                        <span>验证码：</span><input type="text" placeholder="请输入正确的验证码">
                        <div class="botton">获取验证码</div>
                    </div>
                    <div class="btn" @click="submit">
                        确认修改
                    </div>
                    <p>改变主意，直接<router-link :to="{path:'/login'}">登录</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Password',
    components:{
        
    },
    data () {
        return {
            checkemail:'',
            checkpsw:'',
            checkpsw2:'',
            email:'',
            psw2:'',
            psw:'',
        }
    },
    methods:{
        submit:function(){
            if(!this.psw2){
                this.checkpsw2 = 1;
            };
            if(!this.email){
                this.checkemail = 1;
            };
            if(!this.psw){
                this.checkpsw = 1;
            };
            if(!this.checkpsw2&&!this.checkpsw&&!this.checkemail){
                alert('ok')
            }
        },
        checkPsw:function(){
            if(!this.psw){
                this.checkpsw = 1;
            }else if(this.psw.length<6){
                this.checkpsw = 2;
            }else{
                this.checkpsw = '';
            }
            if(this.psw2&&this.psw!=this.psw2){
                this.checkpsw2 = 2;
            }else if(this.psw2&&this.psw==this.psw2){
                this.checkpsw2 = '';
            }
        },
        checkPsw2:function(){
            if(!this.psw2){
                this.checkpsw2 = 1;
            }else if(this.psw!=this.psw2){
                this.checkpsw2 = 2;
            }else{
                this.checkpsw2 = '';
            }
        },
        checkEmail:function(){
            const e = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!this.email){
                this.checkemail = 1;
            }else if(!e.test(this.email)){
                this.checkemail = 2;
            }else{
                this.checkemail = '';
            }
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Password{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container{
        margin-top: 100px;
        .pic{
            margin-bottom: 20px;
        }
        .flex-box{
            display: flex;
            justify-content: center;
            b{
                font-size: 32px;
                color: #ff8e55;
            }
            .content{
                margin-top: 60px;
                .item-box{
                    width: 400px;
                    position: relative;
                    border-bottom: 2px solid #cdcdcd;
                    display: flex;
                    align-items: center;
                    padding: 10px 0;
                    margin-bottom: 30px;
                    span{
                        font-size: 22px;
                        width: 95px;
                    }
                    input{
                        border: none;
                        font-size: 15px;
                        width: 210px;
                        height: 28px;
                        outline:none;
                    }
                    .botton{
                        background-color: #ff8e55;
                        color: #fff;
                        font-size: 14px;
                        padding: 5px 5px;
                        border-radius: 4px;
                        cursor: pointer;
                        margin-left: 15px;
                    }
                    .warn{
                        position: absolute;
                        left: 0;
                        bottom:-45px;
                        font-size: 14px;
                        color: red;
                    }
                }
                p{
                    font-size: 14px;
                    text-align: center;
                    a{
                        color: #ff8e55;
                        text-decoration: underline;
                    }
                }
                .btn{
                    font-size: 30px;
                    color: #fff;
                    width: 350px;
                    height: 60px;
                    line-height: 60px;
                    background: #ff8e55;
                    margin: 0 auto;
                    text-align: center;
                    border-radius: 10px;
                    margin-top: 25px;
                    cursor: pointer;
                    margin-top: 55px;
                    margin-bottom: 25px;
                }
            }
        }
    }
}
</style>
