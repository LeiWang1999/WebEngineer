<template>
    <div>
        <h1>This a User page</h1>
        <!-- $route 属性 -->
        <p>{{userId}}</p>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed : {
        userId() {
            // 拿到当前活跃的路由
            return this.$route.params.userId
        }   
    }
}
</script>