<template>
    <ul class="Yz-app-ul">
        <router-link to="/home" tag="li">
            <i class="icon">&#xe633;</i>
            <span>首页</span>
        </router-link>
        <router-link to="/find" tag="li">
            <i class="icon">&#xe634;</i>
            <span>发现</span>
        </router-link>
        <router-link to="/like" tag="li">
            <i class="icon">&#xe608;</i>
            <span>喜欢</span>
        </router-link>
        <router-link to="/card" tag="li">
            <i class="icon">&#xe630;</i>
            <span>购物车</span>
        </router-link>
        <router-link to="/mine" tag="li">
            <i class="icon">&#xe635;</i>
            <span>我的</span>
        </router-link>
    </ul>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.Yz-app-ul {
    height: 50px;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
    text-align: center;
    i {
        display: block;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
        color: #0c0b0b;
    }
    span {
        display: block;
        font-size: 12px;
        height: 20px;
        line-height: 12px;
        color: #0c0b0b;
    }
}
</style>
