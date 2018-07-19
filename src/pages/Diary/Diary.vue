<template>
    <div id="Diary">
        <Nav isActive="2"></Nav>

    </div>
</template>

<script>
import Nav from '@/components/common/Nav'
export default {
    name: 'Diary',
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
#Diary{
    width: 100%;
    .container{
        width: 1200px;
        margin: 0 auto;
    }
}
</style>
