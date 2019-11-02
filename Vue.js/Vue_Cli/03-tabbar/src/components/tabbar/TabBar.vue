<template>
    <div>
        <tab-bar-item link="/home">
            <img slot="item-icon" src="@/assets/img/tabbar/home.png" alt="Home">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item link="/category">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item link="/cart">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item link="/profile">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </div>
</template>

<script>
import TabBarItem from "./TabBarItem"
export default {
    name : 'TabBar',
    components: {
        TabBarItem
    }
}
</script>

<style lang="less" scoped>

</style>