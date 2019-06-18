<template>
    <ul class="Yz-app-ul">
        <router-link
            v-for="tabbar in tabbars"
            :key="tabbar.name"
            :to="tabbar.path"
            :event="$route.path.includes(tabbar.path) ? '' : 'click'"
            tag="li"
        >
            <i class="icon" v-html="tabbar.meta.icon"></i>
            <span>{{tabbar.meta.title}}</span>
            <b v-if="tabbar.name === 'card'" class="count">{{totalCount}}</b>
        </router-link>
    </ul>
</template>

<script>
    import routes from '@/router/routes'
    import {
        mapGetters
    } from 'vuex'

    export default {
        data () {
            return {
                tabbars: routes.filter(route => route.meta.isFooter)
            }
        },
        computed: {
            ...mapGetters(['totalCount'])
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
    li {
        position: relative;
    }
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
    b {
        position: absolute;
        top: 3px;
        left: 30px;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        background-color: #f00;
        color: #fff;
        padding: 0 5px;
        border-radius: 8px;
    }
}
</style>
