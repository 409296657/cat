<template>
    <div id="AboutCat">
        <Nav isActive="4"></Nav>
        <div class="content">
            <div class="container">
                <div class="userList">
                    <UserList isActive="4"></UserList>
                </div>
                <div class="body"></div>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import UserList from '@/components/common/UserList'
export default {
    name: 'AboutCat',
    components:{
        Nav,
        UserList
    },
    data () {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#AboutCat{
    width: 100%;
    .content{
        margin-top: 40px;
        .container{
            width: 1080px;
            margin: 0 auto;
            display: flex;
            .userList{
                width: 160px;
            }
            .body{
                flex: 1;
                margin-left: 30px;
            }
        }
    }
}
</style>
