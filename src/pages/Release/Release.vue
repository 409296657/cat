<template>
    <div id="Release">
        <Nav isActive="3"></Nav>
        <div class="content">
            <div class="container">
                <div class="type">
                    <div class="text">
                        我和喵星人的故事
                        <div class="border"></div>
                    </div>
                    <div class="text active">
                        为喵星人寻找主人
                        <div class="border"></div>
                    </div>
                </div>
                <div class="text-box">
                    <div class="circle"></div>
                    <textarea id="sad" v-model="text"></textarea>
                </div>
                <div class="pic">
                    <div class="left">
                        <div class="add">点击添加图片</div>
                        <div class="addpic">
                            <div class="mini" v-for="(item,index) in picList" :key="index" :class="{active:index==active}" @click="active=index">
                                <img :src=item.add>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <img :src=picList[active].add>
                    </div>
                </div>

                <div class="address">
                    <input type="text" placeholder="所在位置">
                    <i class="iconfont icon-weizhi"></i>
                </div>

                <div class="send">
                    发布
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
    name: 'Release',
    components:{
        Nav,
        Foot
    },
    data () {
        return {
            active:0,
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
            text:'有人收养这个皮皮猫吗',
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Release{
    width: 100%;
    .content{

        .container{
            width: 1200px;
            margin: 0 auto;
            .type{
                display: flex;
                justify-content: space-between;
                padding: 0 200px;
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
            .text-box{
                display: flex;
                margin-top: 60px;
                .circle{
                    width: 80px;
                    height: 80px;
                    background-color: #cdcdcd;
                    margin: 0 40px;
                    border-radius: 50%;
                }
                textarea{
                    width: 960px;
                    height: 160px;
                    resize:none;
                    border: 1px solid #cdcdcd;
                    border-radius: 5px;
                    padding-top: 30px;
                    font-size: 14px;
                    outline: none;
                }
            }
            .pic{
                padding-left: 160px;
                margin-top: 30px;
                display: flex;
                width: 940px;
                .right{
                    margin-right: 20px;
                    width: 400px;
                    height: 400px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                .left{
                    flex: 1;
                    .add{
                        color: #fff;
                        font-size: 14px;
                        background-color: #ff8e55;
                        width: 120px;
                        height: 32px;
                        line-height: 32px;
                        border-radius: 5px;
                        text-align: center;
                        margin-bottom: 15px;
                    }
                    .addpic{
                        padding: 0 80px;
                        .mini{
                            width: 80px;
                            height: 80px;
                            overflow: hidden;
                            display: inline-block;
                            margin: 13px;
                            border: 1px solid transparent;
                            &.active{
                                border: 1px solid #ff8e55;
                            }
                            img{
                                height: 100%;
                                width: 100%;
                            }
                        }
                    } 
                }
            }
            .address{
                padding-left: 160px;
                margin-top: 30px;
                position: relative;
                margin-bottom: 100px;
                input{
                    width: 500px;
                    height: 44px;
                    text-indent: 40px;
                    outline: none;
                    border-radius: 5px;
                    border: 1px solid #cdcdcd;
                }
                i{
                    font-size: 30px;
                    color: red;
                    position: absolute;
                    left: 167px;
                    top: 10px;
                }
            }
            .send{
                margin-left: 390px;
                width: 500px;
                height: 60px;
                line-height: 60px;
                text-align: center;
                font-size: 30px;
                color: #fff;
                background-color: #ff8e55;
                border-radius: 8px;
                margin-bottom: 410px;
            }
        }
    }
}
</style>
