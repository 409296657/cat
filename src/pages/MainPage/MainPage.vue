<template>
    <div id="MainPage">
        <Nav isActive="0"></Nav>
        <div class="banner">
            <div class="container">
                <img src="@/images/MainPage/banner.png">
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
                        <div>
                            <span @click="asd">城市</span>
                            <el-cascader
                                placeholder="请输入所在城市"
                                :options="options"
                                filterable
                                size="small"
                                v-model="address"
                                :show-all-levels="false"
                            ></el-cascader>
                        </div>
                        <div>
                            <input type="radio" name="sex" value="0" v-model="sex">
                            <input type="radio" name="sex" value="1" v-model="sex">
                            <input type="radio" name="sex" value="2" v-model="sex">
                        </div>
                    </div>
                    <div class="searchBox_2"></div>
                    <div class="searchBox_3"></div>
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
            sex:"",
            address:"",
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
    }
}
</style>
