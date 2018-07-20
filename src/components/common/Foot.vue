<template>
    <div id="Foot">
        <div class="container">
            <div class="foot-box item">
                <div class="logo">

                </div>
            </div>
            <div class="foot-box info">
                <p>联系我们 CONTANT</p>
                <h3>E-mail:XXXXXX@XX.com</h3>
                <h3>QQ:XXXXXXXXX</h3>
            </div>
            <div class="foot-box item">
                <div class="wx">
                    <p>微信公众号</p>
                        <div class="QR">

                        </div>
                    <span>扫一扫,我们一起来养猫</span>
                </div>
            </div>
        </div>
        <div class="position-box">
            <p>Copyright 2018-2018 公益猫 版权所有</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Foot",
    components: {

    },
    props:['isActive'],
    data() {
        return {
        
        };
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#Foot{
    background-color: #ff8e55;
    position: relative;
    .position-box{
        position: absolute;
        width: 400px;
        margin-left: -200px;
        left: 50%;
        bottom: 0;
        text-align: center;
        color: #fff;
        p{
            margin: 10px 0;
            font-size: 12px;
        }
    }
    .container{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        .foot-box{
            box-sizing: border-box;
            width: 400px;
            .logo{
                width: 150px;
                height: 150px;
                background-color: rgba(255, 255, 255, .2);
            }
        }
        .info{
            margin: 20px 0;
            padding: 0 60px;
            border-left: 2px solid #cdcdcd;
            border-right: 2px solid #cdcdcd;
            color: #fff;
            height: 160px;
            p{
                margin-top: 0px;
                font-size: 14px;
            }
            h3{
                font-weight: normal;
                font-size: 14px;
                margin: 0;
                line-height: 20px;
            }
        }
        .item{
            display: flex;
            justify-content: center;
            align-items: center;
            .wx{
                color: #fff;
                text-align: center;
                font-size: 14px;
                .QR{
                    width: 130px;
                    height: 130px;
                    margin: 0 auto;
                    background-color: rgba(255, 255, 255, .2);
                }
                p{
                    margin-bottom: 10px;
                    margin-top: 0;
                }
                span{
                    font-size: 13px;
                }
            }
        }
    }
}
</style>
