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
                        <router-link
                            v-for="(item,index) in btnList"
                            :to="{ path:item.address }"
                            :key="index"
                            :class="{active:index==isActive}">
                            <div class="btn">
                                {{ item.text }}
                            </div>
                        </router-link>
                        
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
    name: "Nav",
    components: {

    },
    props:['isActive'],
    data() {
        return {
        btnList: [
            { text: "首页" ,address:"/"},
            { text: "社区" ,address:"/community"},
            { text: "日记" ,address:"/diary"},
            { text: "发布" ,address:"/release"},
            { text: "我的" ,address:"/user"}
        ]
        };
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Nav{
    
    .container{
        width: 1200px;
        margin: 0 auto;
        .nav{
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
                    a{

                        .btn{
                            font-size: 20px;
                            padding: 0px 20px;
                            line-height: 50px;
                            text-align: center;
                            cursor: pointer;
                        } 
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
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
