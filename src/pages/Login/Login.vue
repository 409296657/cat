<template>
    <div id="Login">
        <div class="container">
            <div class="pic">
                <img src="@/images/Login/welcome.png">
            </div>
            <div class="flex-box">
                <b>登陆</b>
            </div>
            <div class="flex-box">
                <div class="content">
                    <div class="item-box">
                        <span>密码：</span><input type="password" placeholder="请输入6位以上字符密码">
                    </div>
                    <div class="item-box">
                        <span>邮箱：</span><input type="text">
                    </div>
                    <p><input type="checkbox">30天记住我</p>
                    <div class="btn">
                        登陆
                    </div>
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

                .item-box{
                    border-bottom: 2px solid #cdcdcd;
                    display: flex;
                    align-items: center;
                    span{
                        font-weight: bold;
                        font-size: 22px;
                    }
                    input{
                        border: none;
                        font-size: 16px;
                        text-indent: 20px;
                        width: 335px;
                        height: 28px;
                        outline:none;
                    }
                }
            }
        }
    }
}
</style>
