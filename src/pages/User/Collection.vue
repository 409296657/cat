<template>
    <div id="Collection">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="2"></UserList>
                </div>
                <div class="body">
                    <div class="title">
                        <p>我的收藏</p>
                    </div>
                    <div class="mainbox">
                        <div class="item-box" v-for="(item,index) in itemList" :key="index">
                            <div class="pic">
                                <img src="@/images/MainPage/mao.png" alt="">
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
        </div>
        <Foot></Foot>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import UserList from '@/components/common/UserList'
import Foot from '@/components/common/Foot'
export default {
    name: 'Collection',
    components:{
        Nav,
        UserList,
        Foot
    },
    data () {
        return {
            collect:true,
            like:true,
            itemList:[
                {},{},{},{},{},{},{},{},{},
            ],
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Collection{
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
                min-height: 1950px;
                .mainbox{
                    display: flex;
                    flex-wrap: wrap;
                    .item-box{
                        margin: 30px 12px;
                        .pic{
                            padding: 10px 0;
                            width: 275px;
                            height: 320px;
                            position: relative;
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
    }
}
</style>
