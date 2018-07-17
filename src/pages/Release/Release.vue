<template>
    <div id="Community">
        <Nav isActive="3"></Nav>

    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
export default {
    name: 'Community',
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
}
</style>
