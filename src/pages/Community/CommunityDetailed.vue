<template>
    <div id="CommunityDetailed">
        <Nav isActive="1"></Nav>
        <div class="banner">
            <div class="container">
                <div class="item-box">
                    <img src="@/images/Community/icon.png">
                    <b>发现喵星人</b>
                </div>
                <div class="flex-box">
                    <div class="pic"></div>
                    <router-link :to="{path:''}">
                        <div class="btn">
                            发现喵星人
                        </div>
                    </router-link>
                    
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
                    <div class="content-box">
                        <div class="title">
                            <img src="@/images/Community/icon-s.png">
                            <span>标题：XXXXXXXXXXXXXX</span>
                            <small>2018年7月12日 11:11</small>
                        </div>
                        <div class="text">
                            <div class="text-box">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒呵呵哒</span>
                            </div>
                        </div>
                        <div class="pic">
                            <img :src="picList[select].add">
                        </div>
                        <div class="pictures">
                            <img v-for="(item,index) in picList" :key="index" :src="item.add" :class="{active:select==index}" @click="select=index">
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
                            <img src="@/images/Community/cat.png">
                            <input type="text" placeholder="说点什么...">
                            <div class="btn">评论</div>
                        </div>
                        <div class="commentList">
                            <img src="@/images/Community/cat.png">
                            <div class="content">
                                <div class="text">
                                    <span>皮一下很开心:</span>aaaaa啊呵呵
                                </div>
                                <div class="flex-box">
                                    <span>今天11:11</span>
                                    <span>回复</span>
                                </div>
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
import Search from '@/components/common/Search'
import Foot from '@/components/common/Foot'
export default {
    name: 'CommunityDetailed',
    components:{
        Nav,
        Search,
        Foot
    },
    data () {
        return {
            select:0,
            picList:[
                {add:require('../../images/1.jpg')},
                {add:require('../../images/2.jpg')},
                {add:require('../../images/3.jpg')},
                {add:require('../../images/4.jpg')},
                {add:require('../../images/5.jpg')},
                {add:require('../../images/6.jpg')},
                {add:require('../../images/7.jpg')},
                {add:require('../../images/8.jpg')},
                {add:require('../../images/9.jpg')},
            ],
        }
    },
    methods:{
        searching:function(data){
            console.log(data)
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#CommunityDetailed{
    width: 100%;
    position: relative;
    input::-webkit-input-placeholder,{
        color: #b6b6b6; 
    }
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
                        cursor: pointer;
                        display: none;
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
                    .pic{
                        height: 400px;
                        display: flex;
                        justify-content: center;
                        img{
                            display: inline-block;
                            height: 100%;
                        }
                    }
                    .pictures{
                        display: flex;
                        justify-content: center;
                        margin-top: 15px;
                        img{
                            width: 80px;
                            height: 80px;
                            border: 2px solid transparent;
                            margin: 3px;
                            &.active{
                                border: 2px solid #ff8e55;
                            }
                        }
                    }
                    .text{
                        flex: 1;
                        padding: 15px 30px;
                        font-size: 14px;
                        line-height: 22px;
                        box-sizing: border-box;
                        .position-box{
                            text-align: right;
                            a{
                                color: #ff8e55;
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
        margin-bottom: 300px;
        .container{
            width: 1000px;
            margin: 0 auto;
            .commenting{
                display: flex;
                align-items: center;
                padding: 20px 0;
                margin-top: -32px;
                border-bottom: 1px solid #cdcdcd;
                img{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin: 0 10px;
                }
                input{
                    width: 860px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 16px;
                    text-indent: 20px;
                    border:1px solid #cdcdcd;
                }
                .btn{
                    padding: 4px 8px;
                    border-radius: 5px;
                    background-color: #ff8e55;
                    color: #fff;
                    font-size: 12px;
                    margin: 0 20px;
                }
            }
            .commentList{
                display: flex;
                align-items: center;
                border-bottom: 1px solid #cdcdcd;
                padding: 5px 10px;
                img{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right:10px;
                }
                .content{
                    font-size: 13px;
                    line-height: 20px;
                    .text{

                        span{
                            color: #ff8e55;
                        }
                    }
                    .flex-box{
                        display: flex;
                        justify-content: space-between;
                        span{
                            text-align: right;
                            &:last-child{
                                cursor: pointer;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
