<template>
    <div id="Login">
        <div class="container">
            <div class="pic">
                <img src="@/images/Login/welcome.png">
            </div>
            <div class="flex-box">
                <b>登录</b>
            </div>
            <div class="flex-box">
                <div class="content">
                    <div class="item-box">
                        <span>密码：</span><input type="password" placeholder="请输入6位以上字符密码">
                    </div>
                    <div class="item-box">
                        <span>邮箱：</span><input type="text" placeholder="请输入您的常用邮箱">
                    </div>
                    <p><input type="checkbox">30天记住我</p>
                    <div class="btn">
                        登 录
                    </div>
                    <h6><router-link :to="{path:'/password'}">忘记密码?</router-link></h6>
                    <h6>没有账号?<router-link :to="{path:'/register'}"> 注册账号</router-link></h6>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components:{
        
    },
    data () {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Login{
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
                    border-bottom: 2px solid #cdcdcd;
                    display: flex;
                    align-items: center;
                    padding: 10px 0;
                    span{
                        font-size: 22px;
                        width: 95px;
                    }
                    input{
                        border: none;
                        font-size: 15px;
                        width: 335px;
                        height: 28px;
                        outline:none;
                    }
                }
                p{
                    padding: 0 30px;
                    font-size: 14px;
                    display: flex;
                    align-items: center;
                    color: #ff8e55;
                    input{
                        margin-right: 10px;
                        width: 15px;
                        height: 15px;
                        background-color: #cdcdcd;
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
                }
                h6{
                    text-align: center;
                    font-weight: normal;
                    color: #999;
                    a{
                        font-size: 16px;
                        color: #ff8e55;
                    }
                }
            }
        }
    }
}
</style>
