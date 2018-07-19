<template>
    <div id="Register">
        <div class="container">
            <div class="pic">
                <img src="@/images/Login/welcome.png">
            </div>
            <div class="flex-box">
                <b>注册账号</b>
            </div>
            <div class="flex-box">
                <div class="content">
                    <div class="item-box">
                        <span>昵称：</span><input type="password" placeholder="请输入你的昵称">
                        <p class="warn" v-show="nickname">*该昵称已经存在</p>
                    </div>
                    <div class="item-box">
                        <span>密码：</span><input type="password" placeholder="请输入6位以上字符密码">
                        <p class="warn" v-show="nickname">*该昵称已经存在</p>
                    </div>
                    <div class="item-box">
                        <span>邮箱：</span><input type="text" placeholder="请输入您的常用邮箱">
                        <p class="warn" v-show="nickname">*该昵称已经存在</p>
                    </div>
                    <div class="item-box">
                        <span>验证码：</span><input type="text" placeholder="请输入验证码">
                        <div class="botton">获取验证码</div>
                    </div>
                    <p>点击注册账号，表示同意<router-link :to="{path:''}"> 服务条款 </router-link>和<router-link :to="{path:''}"> 隐私条款 </router-link></p>

                    <div class="btn">
                        注册账号
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    components:{
        
    },
    data () {
        return {
            nickname:'1',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Register{
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
                    margin-bottom: 100px;
                }
            }
        }
    }
}
</style>
