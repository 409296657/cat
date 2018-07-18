<template>
    <div id="Search">
        <div class="condition">
            <div class="searchBox_1">
                <div class="item-box">
                    <span class="text">城市</span>
                    <el-cascader
                        placeholder="请输入所在城市"
                        :options="options"
                        filterable
                        size="small"
                        v-model="screenList.address"
                        :show-all-levels="false"
                    ></el-cascader>
                </div>
                <div class="item-box">
                    <span class="text">性别</span>
                    <div class="checkBox" v-for="(item,index) in cbList" :key="index">
                        <div class="sex-box" @click="sexSelect(item)">
                            <div class="choose" v-if="screenList.sex==item.sex"></div>
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
                        v-model="screenList.age"
                        :show-all-levels="false"
                    ></el-cascader>
                </div>
                <div class="item-box">
                    <span class="text">健康状态</span>
                    <div class="checkBox" v-for="(item,index) in healthList" :key="index">
                        <div class="sex-box" @click="stateSelect(item)">
                            <div class="choose" v-if="screenList.healthStates==item.state"></div>
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
    </div>
</template>

<script>
export default {
    name: "Search",
    components: {

    },
    data() {
        return {
            screenList:{
                healthStates:'',
                age:[],
                sex:'',
                address:[],
            },
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
            cbList:[
                {text:'公猫',sex:'0'},
                {text:'母猫',sex:'1'},
                {text:'不明',sex:'2'},
            ],
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
        };
    },
    methods: {
        sexSelect:function(e){
            this.screenList.sex = e.sex;
        },
        stateSelect:function(e){
            this.screenList.healthStates = e.state;
        },
        clear:function(){
            this.screenList.address = [];
            this.screenList.age = [];
            this.screenList.healthStates = '';
            this.screenList.sex = '';
        },
        search:function(){
            this.$emit('conditionScreen',this.screenList)
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Search{
    
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
}
</style>
