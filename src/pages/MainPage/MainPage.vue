<template>
    <div id="MainPage">
        <Nav isActive="0"></Nav>
        <div class="banner">
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

                <div class="condition">
                    <div class="searchBox_1">
                        <div class="item-box">
                            <span class="text" @click="asd">城市</span>
                            <el-cascader
                                placeholder="请输入所在城市"
                                :options="options"
                                filterable
                                size="small"
                                v-model="address"
                                :show-all-levels="false"
                            ></el-cascader>
                        </div>
                        <div class="item-box">
                            <span class="text">性别</span>
                            <div class="checkBox" v-for="(item,index) in cbList" :key="index">
                                <div class="sex-box" @click="sexSelect(item)">
                                    <div class="choose" v-if="sex==item.sex"></div>
                                </div>
                                <small>{{ item.text }}</small>
                            </div>
                        </div>
                    </div>

                    <div class="searchBox_2">
                        <div class="item-box">
                            <span class="text">年龄段</span>
                            <el-cascader
                                placeholder="请输入猫猫年龄段"
                                :options="options2"
                                filterable
                                size="small"
                                v-model="age"
                                :show-all-levels="false"
                            ></el-cascader>
                        </div>
                        <div class="item-box">
                            <span class="text">健康状态</span>
                            <div class="checkBox" v-for="(item,index) in healthList" :key="index">
                                <div class="sex-box" @click="stateSelect(item)">
                                    <div class="choose" v-if="healthStates==item.state"></div>
                                </div>
                                <small>{{ item.text }}</small>
                            </div>
                        </div>
                    </div>

                    <div class="searchBox_3">
                        <div class="item-box">
                            <div class="btn" @click="clear">重置</div>
                        </div>
                        <div class="item-box">
                            <div class="btn" @click="search">搜索</div>
                        </div>
                    </div>
                </div>

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
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
export default {
    name: 'MainPage',
    components:{
        Nav,
    },
    data () {
        return {
            collect:true,
            like:true,
            itemList:[
                {},{},{},{},{},{},{},{},{},{},{},{},
            ],
            healthStates:'',
            healthList:[
                {text:'健康',state:'0'},
                {text:'一般',state:'1'},
                {text:'较弱',state:'2'},
                {text:'小疾',state:'3'},
                {text:'残疾',state:'4'},
            ],
            options2:[
                {value:'1',label:'2-3周'},
                {value:'2',label:'3-6个月'},
                {value:'3',label:'5-12个月'},
                {value:'4',label:'12个月以上'},
            ],
            age:[],
            cbList:[
                {text:'公猫',sex:'0'},
                {text:'母猫',sex:'1'},
                {text:'不明',sex:'2'},
            ],
            sex:'',
            address:[],
            options:[{
                value: 'guangdong',
                label: '广东',
                children:[{
                    value: 'guangzhou',
                    label: '广州',
                },{
                    value: 'shenzhen',
                    label: '深圳',
                },{
                    value: 'foshan',
                    label: '佛山',
                },{
                    value: 'zhaoqing',
                    label: '肇庆',
                },{
                    value: 'huizhou',
                    label: '惠州',
                },]
            },{
                value: 'beijing',
                label: '北京',
                children:[{
                    value: 'beijing',
                    label: '北京',
                }]
            },{
                value: 'shanghai',
                label: '上海',
                children:[{
                    value: 'shanghai',
                    label: '上海',
                }]
            },],
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
        search:function(){

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
        .condition{
            display: flex;
            .item-box{
                margin: 15px 0;
                font-size: 14px;
                line-height: 33px;
                display: flex;
                align-items: center;
                .btn{
                    width: 50px;
                    line-height: 30px;
                    border: 1px solid #ff8e55;
                    color: #f92c22;
                    border-radius: 5px;
                    text-align: center;
                    cursor: pointer;
                }
                .el-cascader{
                    width: 150px;
                    .el-input__inner{
                        border-color: #79b0dd;
                        border-radius: 12px;
                    }
                }
                .text{
                    font-size: 16px;
                    padding: 0 15px;
                }
                .checkBox{
                    display: flex;
                    align-items: center;
                    .sex-box{
                        width: 20px;
                        height: 20px;
                        border-radius: 2px;
                        background-color: #d9f3f8;
                        display: inline-block;
                        box-sizing: border-box;
                        padding: 3px;
                        cursor: pointer;
                        .choose{
                            background-color: #007acc;
                            height: 100%;
                            width: 100%;
                            border-radius: 2px;
                        }
                    }
                }
                small{
                    line-height: 33px;
                    padding-left: 8px;
                    padding-right: 20px;
                }
            }
            .searchBox_1{
                width: 300px;
            }
            .searchBox_2{
                width: 730px;
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
