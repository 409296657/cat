<template>
    <div id="Diary">
        <Nav isActive="2"></Nav>
        <div class="content">
            <div class="container">
                <div class="type flex-box">
                    <div class="text active">
                        我和喵星人的故事
                        <div class="border"></div>
                    </div>
                    <div class="text">
                        为喵星人寻找主人
                        <div class="border"></div>
                    </div>
                </div>
                <router-link :to="{path:'/release'}"><div class="btn">发布</div></router-link>

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
        <Foot></Foot>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Foot from '@/components/common/Foot'
export default {
    name: 'Diary',
    components:{
        Nav,
        Foot
    },
    data () {
        return {
            itemList:[
                {},{},{}
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Diary{
    width: 100%;
    .flex-box{
        display: flex;
    }
    .content{

        .container{
            width: 1000px;
            margin: auto;
            .type{
                justify-content: space-between;
                padding: 0 100px;
                font-size: 24px;
                margin-top: 35px;
                .text{
                    position: relative;
                    &.active{
                        font-weight: bolder;
                        .border{
                            display: block;
                        }
                    }
                    .border{
                        position: absolute;
                        bottom: -45px;
                        left: 50%;
                        margin-left: -18px;
                        border-width: 20px 18px;
                        border-style: solid;
                        border-color: #ff8e55 transparent transparent transparent;
                        display: none;
                    }
                }
            }
            .btn{
                width: 100px;
                height: 28px;
                margin: 0 auto;
                margin-top: 40px;
                line-height: 28px;
                text-align: center;
                font-size: 16px;
                color: #ff8e55;
                border: 1px solid #ff8e55;
                border-radius: 5px;
            }
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
</style>
