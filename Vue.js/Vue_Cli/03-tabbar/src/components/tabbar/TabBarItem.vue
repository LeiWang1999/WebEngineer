<template>
    <div class="tab-bar-item" @click="routeTransfer">
        <slot name="item-icon"></slot>
        <slot name="item-text"></slot>
    </div>
</template>

<script>
export default {
    name : 'TabBarItem',
    props: {
        link : String
    },
    methods : {
        routeTransfer(){
            console.log('click happen ');
            this.$router.push(this.link)
        }
    }
}
</script>

<style lang="less">
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
    height: 24px;
    width: 48px;
}
</style>