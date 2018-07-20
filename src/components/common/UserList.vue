<template>
    <div id="UserList">
        <b>设置</b>
        <p v-for="(item,index) in itemList" :key="index" :class="{active:isActive==index}">
            <router-link :to="{ path:item.address}">
                {{item.text}}
            </router-link>
         </p>
    </div>
</template>

<script>
export default {
    name: "UserList",
    components: {

    },
    props:['isActive'],
    data() {
        return {
        itemList: [
            { text: "个人资料" ,address:"/user/"+this.$route.params.id},
            { text: "消息通知" ,address:"/user/"+this.$route.params.id+"/message"},
            { text: "我的收藏" ,address:"/user/"+this.$route.params.id+"/collection"},
            { text: "关于领养" ,address:"/user/"+this.$route.params.id+"/aboutadopt"},
            { text: "关于我和喵星人" ,address:"/user/"+this.$route.params.id+"/aboutcat"}
        ]
        };
    },
    methods: {
        
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
#UserList{
    p{

        &.active{
            
            a{
                color: #ff8e55;
            }
        }
    }
}
</style>
