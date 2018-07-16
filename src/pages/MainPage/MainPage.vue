<template>
    <div id="MainPage">
        <Nav></Nav>
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
