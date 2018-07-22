<template>
    <div id="AboutCat">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="4"></UserList>
                </div>
                <div class="body">
                    <p>关于我和喵星人</p>
                    <div class="content-box" v-for="(item,index) in itemList" :key="index">
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
    name: 'AboutCat',
    components:{
        Nav,
        UserList,
        Foot
    },
    data () {
        return {
            itemList:[
                {},{}
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#AboutCat{
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
                min-height: 900px;
                .content-box{
                    border-bottom: 1px solid #cdcdcd;
                    margin: 30px 0;
                    position: relative;
                    padding-bottom: 30px;
                    &:hover{
                        background-color: #f1f1f1;
                        .btn{
                            display: block;
                        }
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
                }
            }
        }
    }
}
</style>
