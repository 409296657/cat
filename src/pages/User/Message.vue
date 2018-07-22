<template>
    <div id="Message">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="1"></UserList>
                </div>
                <div class="body">
                    <div class="nav">
                        <span :class="{active:isActive==0}" @click="isActive=0">收到的评论</span>
                        <span :class="{active:isActive==1}" @click="isActive=1">收到的赞</span>
                    </div>
                    <div class="card" v-if="isActive==0">
                        <div class="icon"></div>
                        <div class="flex-box" v-for="(item,index) in commentList" :key="index">
                            <img src="@/images/6.jpg">
                            <div class="content">
                                <div class="head">
                                    <b>昵称</b>
                                    <span>2018年11月11日 11:11</span>
                                </div>
                                <div class="text">
                                    突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突突
                                </div>
                                <p>
                                    <span><i class="iconfont icon-pinglun"></i>回复</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-if="isActive==1">
                        <div class="icon2"></div>
                        <div class="flex-box" v-for="(item,index) in commentList" :key="index">
                            <img src="@/images/6.jpg">
                            <div class="content">
                                <div class="head">
                                    <b>昵称</b>
                                    <span>2018年11月11日 11:11</span>
                                </div>
                                <div class="text">
                                    赞了我的日记
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
import UserList from '@/components/common/UserList'
import Foot from '@/components/common/Foot'
export default {
    name: 'Message',
    components:{
        Nav,
        UserList,
        Foot
    },
    data () {
        return {
            isActive:0,
            commentList:[
                {},{},{},
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Message{
    width: 100%;
    .content{
        margin-top: 40px;
        .container{
            width: 1100px;
            margin: 0 auto;
            display: flex;
            .userList{
                width: 160px;
            }
            .body{
                flex: 1;
                margin-left: 30px;
                .nav{
                    margin-top: 15px;
                    font-size: 16px;
                    span{
                        margin-left: 10px;
                        cursor: pointer;
                        &.active{
                            color: red;
                        }
                    }
                }
                .card{
                    position: relative;
                    min-height: 690px;
                    .icon{
                        position: absolute;
                        top: -8px;
                        left: 40px;
                        background-color: #fff;
                        width: 16px;
                        height: 16px;
                        border: 1px solid;
                        border-color: #d0d0d0 #d0d0d0 transparent transparent;
                        transform:rotate(-45deg);
                    }
                    .icon2{
                        position: absolute;
                        top: -8px;
                        left: 126px;
                        background-color: #fff;
                        width: 16px;
                        height: 16px;
                        border: 1px solid;
                        border-color: #d0d0d0 #d0d0d0 transparent transparent;
                        transform:rotate(-45deg);
                    }
                    .flex-box{
                        display: flex;
                        border: 1px solid #d0d0d0;
                        border-radius: 5px;
                        margin: 30px 0;
                        img{
                            display: inline-block;
                            width: 50px;
                            height: 50px;
                            border-radius: 50%;
                            margin: 5px;

                        }
                        .content{
                            margin: 0;
                            font-size: 14px;
                            flex: 1;
                            padding-right: 10px;
                            .head{
                                margin: 10px 0 5px 0;
                                display: flex;
                                justify-content: space-between;
                            }
                            .text{
                                width: 650px;
                                margin-bottom: 10px;
                            }
                            p{
                                color: red;
                                text-align: right;
                                margin: 10px 0;
                                span{
                                    cursor: pointer;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
