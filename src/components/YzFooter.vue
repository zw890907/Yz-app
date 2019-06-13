<template>
    <ul class="Yz-app-ul">
        <router-link
            v-for="tabbar in tabbars"
            :key="tabbar.name"
            :to="tabbar.path"
            tag="li"
        >
            <i class="icon" v-html="tabbar.meta.icon"></i>
            <span>{{tabbar.meta.title}}</span>
        </router-link>
    </ul>
</template>

<script>
    import routes from '@/router/routes'
    export default {
        data () {
            return {
                tabbars: routes.filter(route => route.meta.isFooter)
            }
        }
    }
</script>

<style lang="scss" scoped>
$mainColor: #fc454a;
.Yz-app-ul {
    height: 50px;
    border-top: 1px solid #cccccc;
    display: flex;
    justify-content: space-around;
    text-align: center;
    .router-link-exact-active,
    .router-link-active {
        color: $mainColor;
    }
    i {
        display: block;
        font-size: 20px;
        height: 30px;
        line-height: 30px;
    }
    span {
        display: block;
        font-size: 12px;
        height: 20px;
        line-height: 12px;
    }
}
</style>
