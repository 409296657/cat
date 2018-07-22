<template>
    <div id="AboutAdopt">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="3"></UserList>
                </div>
                <div class="body">
                    <div class="nav">
                        <span :class="{active:isActive==0}" @click="isActive=0">我领养的</span>
                        <span :class="{active:isActive==1}" @click="isActive=1">领养我的</span>
                    </div>
                    <div class="card" v-if="isActive==0">
                        <div class="flex-box" v-for="(item,index) in commentList" :key="index">
                            <img src="@/images/2.jpg">
                            <div class="content">
                                <p v-for="(item,index) in item.itemList" :key="index">
                                    <span class="type">{{item.type}}</span>
                                    <span class="text">{{item.text}}</span>
                                    <span class="change">修改</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card" v-if="isActive==1">
                        <div class="flex-box" v-for="(item,index) in commentList" :key="index">
                            <img src="@/images/3.jpg">
                            <div class="content">
                                <p v-for="(item,index) in item.itemList" :key="index">
                                    <span class="type">{{item.type}}</span>
                                    <span class="text">{{item.text}}</span>
                                    <span class="change">修改</span>
                                </p>
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
    name: 'AboutAdopt',
    components:{
        Nav,
        UserList,
        Foot
    },
    data () {
        return {
            isActive:0,
            commentList:[
                {
                    itemList:[
                        {type:'猫猫',text:'XX'},
                        {type:'主人',text:'XX'},
                        {type:'领养日',text:'20XX-XX-XX'},
                        {type:'健康状况',text:'健康'},
                        {type:'领养地点',text:'XX市区'},
                    ],
                },
                {
                    itemList:[
                        {type:'猫猫',text:'XX'},
                        {type:'主人',text:'XX'},
                        {type:'领养日',text:'20XX-XX-XX'},
                        {type:'健康状况',text:'健康'},
                        {type:'领养地点',text:'XX市区'},
                    ],
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#AboutAdopt{
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
                    .flex-box{
                        display: flex;
                        border-bottom: 1px solid #d0d0d0;
                        margin: 30px 0;
                        img{
                            display: inline-block;
                            width: 180px;
                            height: 180px;
                            border-radius: 5px;
                            margin: 10px;

                        }
                        .content{
                            margin: 0;
                            font-size: 14px;
                            flex: 1;
                            padding-right: 10px;
                            margin-left: 30px;
                            p{
                                font-size: 14px;
                                span{
                                    display: inline-block;
                                }
                                .type{
                                    font-weight: bold;
                                    width: 60px;
                                }
                                .text{
                                    width: 485px;
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
