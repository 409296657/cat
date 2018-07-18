<template>
    <div id="Community">
        <Nav isActive="1"></Nav>
        <div class="banner">
            <div class="container">
                <div class="item-box">
                    <img src="@/images/Community/icon.png">
                    <b>发现喵星人</b>
                </div>
                <div class="flex-box">
                    <div class="pic"></div>
                    <div class="btn">发现喵星人</div>
                </div>
            </div>
        </div>

        <div class="main-box">
            <div class="container">
                <div class="bar">
                    <img src="@/images/Community/icon.png">
                    <b>发现喵星人</b>
                </div>
                <Search @conditionScreen="searching"></Search>
                <div class="content">
                    <div class="content-box" v-for="(item,index) in itemList" :key="index">
                        <div class="btn">申请成为他的主人</div>
                        <div class="title">
                            <img src="@/images/Community/icon-s.png">
                            <span>标题：XXXXXXXXXXXXXX</span>
                            <small>2018年7月12日 11:11</small>
                        </div>
                        <div class="flex-box">
                            <div class="text">
                                <div class="text-box">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒</span>
                                </div>
                                <div class="position-box">
                                    <router-link :to="{ path:'' }">查看全部></router-link>
                                </div>
                            </div>
                            <div class="pic">
                                <img src="@/images/Community/cat.png">
                            </div>
                        </div>
                        <div class="icon-bar">
                            <div class="icon-box">
                                <i class="iconfont icon-xin"></i>
                                <span>66</span>
                            </div>
                            <div class="icon-box">
                                <i class="iconfont icon-pinglun"></i>
                                <span>66</span>
                            </div>
                            <div class="icon-box">
                                <i class="iconfont icon-icon-test"></i>
                                <span>66</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="comment">
                    <div class="container">
                        <div class="commenting">
                            <img src="">
                            <input type="text">
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
import Search from '@/components/common/Search'
import Foot from '@/components/common/Foot'
export default {
    name: 'Community',
    components:{
        Nav,
        Search,
        Foot
    },
    data () {
        return {
            itemList:[
                {},{}
            ]
        }
    },
    methods:{
        searching:function(data){
            console.log(data)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Community{
    width: 100%;
    .banner{

        .container{
            width: 1200px;
            height: 315px;
            margin: 0 auto;
            background: url(../../images/Community/bg.png) no-repeat;
            border-bottom: 1px solid #f92c22;
            .item-box{
                margin-top: 55px;
                display: flex;
                align-items: center;
                b{
                    font-size: 22px;
                    margin: 0 20px;
                }
            }
            .flex-box{
                margin-top: 30px;
                display: flex;
                align-items: center;
                .pic{
                    width: 100px;
                    height: 100px;
                    background-color: #f9c7c7;
                    border-radius: 50%;
                    margin-left: 60px;
                }
                .btn{
                    font-weight: bold;
                    font-size: 22px;
                    color: #fff;
                    background-color: #ff8e55;
                    padding: 15px 45px;
                    margin-left: 50px;
                    border-radius: 5px;
                }
            }
        }
    }
    .main-box{

        .container{
            width: 1200px;
            margin: 0 auto;
            .bar{
                margin-top: 35px;
                margin-bottom: 5px;
                display: flex;
                align-items: center;
                b{
                    font-size: 22px;
                    margin: 0 20px;
                }
            }
            .content{
                width: 1000px;
                margin: 0 auto;
                .content-box{
                    border: 2px solid #cdcdcd;
                    margin: 30px 0;
                    position: relative;
                    .btn{
                        position: absolute;
                        left: 50px;
                        bottom: 10px;
                        font-size: 16px;
                        color: #fff;
                        background-color: #ff8e55;
                        padding: 10px 26px;
                        border-radius: 5px;
                    }
                    .title{
                        line-height: 35px;
                        padding-left: 30px;
                        padding-right: 20px;
                        position: relative;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        img{
                            position: absolute;
                            left: 3px;
                            top: 8px;
                        }
                        span{
                            font-size: 18px;
                        }
                        small{
                            font-size: 12px;
                            text-align: right;
                        }
                    }
                    .flex-box{
                        display: flex;
                        .pic{
                            width: 180px;
                            height: 180px;
                            border-radius: 5px;
                            padding-right: 20px;
                            padding-top: 10px;
                            margin-left: 15px;
                            img{
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 5px;
                            }
                        }
                        .text{
                            flex: 1;
                            padding: 15px 30px;
                            font-size: 14px;
                            line-height: 22px;
                            box-sizing: border-box;
                            height: 190px;
                            .text-box{
                                height: 150px;
                                overflow: hidden;
                            }
                            .position-box{
                                text-align: right;
                                a{
                                    color: #ff8e55;
                                }
                            }
                        }
                    }
                    .icon-bar{
                        display: flex;
                        flex-direction: row-reverse;
                        margin-top: 20px;
                        margin-bottom: 5px;
                        .icon-box{
                            margin-right: 60px;
                        }
                    }
                }
            }
        }
    }
    .comment{

        .container{
            width: 1000px;
            margin: 0 auto;
        }
    }
}
</style>
