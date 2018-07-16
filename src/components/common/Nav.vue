<template>
    <div id="Nav">
        <div class="container">
            <div class="nav">
                <div class="navList">
                    <div class="radio"></div>
                    <div class="text">
                        <p>公益猫</p>
                        <small>每一只猫猫都被爱 为ta寻找港湾</small>
                    </div>
                    <div class="list">
                        <div class="btn" 
                            v-for="(item,index) in btnList" 
                            :key="index" 
                            @click="choose(index)" 
                            :class="{active:index==isActive}">
                        {{ item.text }}
                        </div>
                    </div>
                </div>
                <div class="user">
                    <div class="login">登录</div>
                    <div class="register">注册</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainPage",
    components: {},
    data() {
        return {
        isActive: "0",
        btnList: [
            { text: "首页" },
            { text: "社区" },
            { text: "日记" },
            { text: "发布" },
            { text: "我的" }
        ]
        };
    },
    methods: {
        choose: function(e) {
            this.isActive = e;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Nav{
    background-color: #ffd9d9;
    .container{
        width: 1200px;
        margin: 0 auto;
        .nav{
            height: 50px;
            display: flex;
            justify-content: space-between;
            .navList{
                display: flex;
                .radio{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #ff8e55;
                }
                .text{
                    color: #ff8e55;
                    margin: 0 10px;
                    p{
                        margin: 0;
                        font-size: 20px;
                    }
                }
                .list{
                    display: flex;
                    margin: 0 20px;
                    .btn{
                        font-size: 20px;
                        width: 80px;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        cursor: pointer;
                        &.active{
                            background-color: #ff8e55;
                            color: #fff;
                        }
                    } 
                }
            }
            .user{
                display: flex;
                align-items: center;
                div{
                    width: 50px;
                    height: 30px;
                    font-size: 14px;
                    background-color: #ff8e55;
                    border-radius: 5px;
                    margin-left: 20px;
                    color: #fff;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }
    }
}
</style>
