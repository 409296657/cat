<template>
    <div id="User">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="0"></UserList>
                </div>
                <div class="body">
                    <p>个人资料</p>
                    <div class="flex-box">
                        <img src="@/images/6.jpg">
                        <div class="text">
                            <div class="upload">浏览</div>
                            请选择jpg、gif格式，小于2M的图片（使用高质量图片，可生成高清头像）
                        </div>
                    </div>
                    <div class="flex-box">
                        <span class="type"><span class="red">*</span>昵称:</span>
                        <input type="text" v-model="name" placeholder="请输入昵称">
                    </div>
                    <div class="flex-box">
                        <span class="type"><span class="red">*</span>性别:</span>
                        <div class="circle" @click="sex=0"><div v-if="sex===0"></div></div><span> 男</span>
                        <div class="circle last" @click="sex=1"><div v-if="sex===1"></div></div><span> 女</span>
                    </div>
                    <div class="flex-box">
                        <span class="type"><span class="red">*</span>生日:</span>
                        <el-date-picker
                            v-model="birthady"
                            type="date"
                            size="mini"
                            :picker-options="pickerOptions"
                            placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="flex-box">
                        <span class="type"><span class="red">*</span>手机号:</span>
                        <input type="text" v-model="mobile" placeholder="请输入手机号码">
                    </div>
                    <div class="flex-box">
                        <span class="type"><span class="red">*</span>现居住地:</span>
                        <input type="text" v-model="adress" placeholder="请输入您所在的地址">
                    </div>
                    <div class="submit">
                        提交
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
    name: 'User',
    components:{
        Nav,
        UserList,
        Foot
    },
    data () {
        return {
            adress:'',
            mobile:'',
            name:'',
            sex:'',
            birthady:'',
            pickerOptions:{
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#User{
    width: 100%;
    input::-webkit-input-placeholder{
        color:#a9a9a9;
    }
    .el-input__prefix{
        display: none;
    }
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
                color: #9a9a9a;
                margin-bottom: 190px;
                .flex-box{
                    display: flex;
                    align-items: center;
                    margin: 20px 0;
                    font-size: 14px;
                    img{
                        width: 80px;
                        height: 80px;
                        margin-left: 30px;
                    }
                    .text{
                        margin-left: 10px;
                        height: 80px;
                        font-size: 12px;
                        .upload{
                            width: 40px;
                            height: 20px;
                            box-sizing: border-box;
                            border-radius: 4px;
                            border: 1px solid #9a9a9a;
                            line-height: 20px;
                            text-align: center;
                            margin-bottom: 10px;
                        }
                    }
                    .type{
                        width: 67px;
                        text-align: right;
                        margin-right: 10px;
                        .red{
                            color: red;
                        }
                    }
                    input{
                        width: 210px;
                        height: 30px;
                        text-indent: 10px;
                        font-size: 14px;
                        box-sizing: border-box;
                        border-radius: 5px;
                        border: 1px solid #a9a9a9;
                        outline: none;
                    }
                    .el-input__inner{
                        padding:0px;
                        
                    }
                    .el-input__suffix{
                        right: 10px;
                    }
                    .circle{
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;
                        border: 1px solid #666;
                        box-sizing: border-box;
                        padding: 1px;
                        margin-right: 3px;
                        cursor: pointer;
                        &.last{
                            margin-left: 10px;
                        }
                        div{
                            background-color: #666;
                            width: 100%;
                            height: 100%;
                            border-radius: 50%;
                        }
                    }
                }
                .submit{
                    width: 60px;
                    height: 30px;
                    font-size: 14px;
                    color: #fff;
                    line-height: 30px;
                    border-radius: 5px;
                    background-color: #ff8e55;
                    text-align: center;
                    margin-left: 30px;
                    margin-top: 50px;
                }
            }
        }
    }
}
</style>
