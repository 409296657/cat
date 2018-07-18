<template>
    <div id="MainPage">
        <div class="banner">
            <Nav isActive="0"></Nav>
            <div class="container">
                <router-link :to="{ path:'' }">
                    <img src="@/images/MainPage/banner.png">
                </router-link>
            </div>
        </div>
        <div class="mainBox">
            <div class="container">
                <div class="title">
                    <div class="line"></div>
                    <div class="text">
                        <b>寻找喵星人</b>
                    </div>
                    <div class="line"></div>
                </div>

                <Search @conditionScreen="searching"></Search>

                <div class="content">
                    <div class="item-box" v-for="(item,index) in itemList" :key="index">
                        <div class="pic">
                            <img src="@/images/MainPage/mao.png" alt="">
                            <div class="tips">
                                已找到主人
                            </div>
                            <div class="collection">
                                <i class="iconfont icon-icon-test" v-if="collect" @click="collect= !collect"></i>
                                <i class="iconfont icon-xing" v-else @click="collect= !collect"></i>
                            </div>
                        </div>
                        <div class="info">
                            <div class="user">
                                <div class="user-pic"><img src="" alt=""></div>
                                <span>昵称</span>
                            </div>
                            <div class="operation">
                                <i class="iconfont icon-xin" v-if="like" @click="like= !like"></i>
                                <i class="iconfont icon-xin1" v-else @click="like= !like"></i>
                                <i class="iconfont icon-pinglun"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Foot from '@/components/common/Foot'
import Search from '@/components/common/Search'
export default {
    name: 'MainPage',
    components:{
        Nav,
        Foot,
        Search
    },
    data () {
        return {
            collect:true,
            like:true,
            itemList:[
                {},{},{},{},{},{},{},{},{},{},{},{},
            ],
        }
    },
    methods: {
        asd:function(){
            alert(this.sex)
        },
        sexSelect:function(e){
            this.sex = e.sex;
        },
        stateSelect:function(e){
            this.healthStates = e.state;
        },
        clear:function(){
            this.address = [];
            this.age = [];
            this.healthStates = '';
            this.sex = '';
        },
        searching:function(data){
            console.log(data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#MainPage{
    width: 100%;
    .container{
        width: 1200px;
        margin: 0 auto;
    }
    .banner{
        background-color: #ffd9d9;
    }
    .mainBox{
        background-color: #f6f6f6;
        .title{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: #666;
            border-bottom: 1px solid #f92c22;
            padding-bottom: 10px;
            .line{
                border: 1px solid #ff8e55;
                width: 100px;
            }
            .text{
                padding: 20px 30px;
            }
        }
        .content{
            display: flex;
            flex-wrap: wrap;
            margin-top: -20px;
            .item-box{
                margin: 60px 12px;
                .pic{
                    padding: 10px 0;
                    width: 275px;
                    height: 320px;
                    position: relative;
                    .tips{
                        position: absolute;
                        top:10px;
                        left: 0;
                        background-color:rgba(244, 244, 244, .7);
                        font-size: 14px;
                        line-height: 40px;
                        height: 40px;
                        padding: 0px 10px;
                        border-radius: 3px;
                    }
                    .collection{
                        position: absolute;
                        top: 20px;
                        right: 10px;
                        i{
                            font-size: 35px;
                            color: #ffe18c;
                        }
                    }
                    img{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                    }
                }
                .info{
                    display: flex;
                    justify-content: space-between;
                    .user{
                        display: flex;
                        line-height: 30px;
                        font-size: 16px;
                        .user-pic{
                            height: 30px;
                            width: 30px;
                            border-radius: 50%;
                            background-color: #f5c4c4;
                            margin-left: 15px;
                            margin-right: 10px;
                        }
                    }
                    .operation{
                        
                        i{
                            font-size: 22px;
                        }
                        .icon-xin1{
                            color: #f92c22;
                        }
                    }
                }
            }
        }
    }
}
</style>
