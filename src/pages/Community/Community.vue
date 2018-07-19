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
                    <div class="content-box" v-for="(item,index) in itemList" :key="index">
                        <div class="btn" @click="showWindow">申请成为他的主人</div>
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
        <div class="shadow" v-show="show==1">
            <div class="window" :class="{show:down==1}">
                <div class="tips">
                    <p><i class="iconfont icon-guanbi" @click="close"></i></p>
                    <b>温馨提示</b>
                </div>
                <div class="text">
                   <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;喂养喵星人可不是一件简单的事，不仅要保证它的温饱，还要时刻注意他的健康状况，更不可因为自身原因随意丢弃。你确定自己准备好了吗?</span> 
                </div>
                <div class="flex-box">
                    <div class="btn" :class="{ok:count!=0}" @click="close">
                        <router-link :to="{path:''}">
                            我准备好了
                            <small v-if="count!=0">{{count}}s</small>
                        </router-link>
                    </div>
                    <div class="btn" @click="close">我再想想吧</div>
                </div>
            </div>
        </div>
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
            time:'',
            count:3,
            down:'',
            show:'',
            itemList:[
                {},{}
            ]
        }
    },
    methods:{
        searching:function(data){
            console.log(data)
        },
        close:function(){
            this.down = '';
            clearInterval(this.time);
            setTimeout(()=>{
                this.show = '';
                this.count = 3;
            },200);
        },
        showWindow:function(){
            this.show = 1;
            setTimeout(()=>{
                this.down = 1;
            },10);
            this.time= setInterval(()=>{
                this.count--;
                if(this.count==0){
                    clearInterval(this.time)
                }
            },1000)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Community{
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
                    border: 2px solid #cdcdcd;
                    margin: 30px 0;
                    position: relative;
                    &:hover{
                        background-color: #f1f1f1;
                        .btn{
                            display: block;
                        }
                    }
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
    .shadow{
        position: fixed;
        top: 0;
        left:0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, .2);
        .window{
            width: 600px;
            height: 300px;
            box-sizing: border-box;
            background-color: #fff;
            border: 4px solid #ff8e55;
            border-radius: 8px;
            position: absolute;
            margin-left: -300px;
            margin-top: -150px;
            left: 50%;
            top: -150px;
            transition: top .3s;
            &.show{
                top: 50%;
            }
            .tips{
                padding-left: 18px;
                p{
                    text-align: right;
                    margin: 0;
                    i{
                        color: #9a9a9a;
                        font-size: 34px;
                        cursor: pointer;
                    }
                }
                b{
                    font-size: 22px;
                }
            }
            .text{
                padding: 25px 50px;
                font-size: 14px;
                color: #363636;
            }
            .flex-box{
                display: flex;
                justify-content: space-between;
                width: 460px;
                margin:0 auto;
                margin-top: 20px;
                .btn{
                    height: 40px;
                    width: 150px;
                    font-size: 18px;
                    line-height: 40px;
                    text-align: center;
                    color: #fff;
                    border-radius: 5px;
                    background-color: #ff8e55;
                    cursor: pointer;
                    transition: background-color .3s;
                    &.ok{
                        background-color: #a9a9a9;
                        cursor: not-allowed;
                        a{
                            cursor: not-allowed;
                        }
                    }
                    a{
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
