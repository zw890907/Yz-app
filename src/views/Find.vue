<template>
    <div class="yz-find">
        <ul class="yz-find-sidebar">
            <router-link
                v-for="list in lists"
                :key="list.id"
                tag="li"
                :to="`/find/${list.id}`"
            >{{list.name}}</router-link>
        </ul>
        <div class="yz-find-main">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                lists: []
            }
        },
        created () {
            ajax.getNav().then(resp => {
                // console.log(resp)
                let { list } = resp.data
                // 去掉今日推荐
                list = list.slice(1)
                this.lists = list
            })
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #fc454a;
.yz-find {
    display: flex;
    height: 100%;
    &-sidebar {
        width: 80px;
        background-color: $grey;
        overflow-x: hidden;
        li {
            height: 40px;
            line-height: 40px;
            padding-left: 5px;
            font-size: 12px;
            color: $deepGrey;
            border-left: 2px solid $grey;
        }
        .router-link-exact-active,
        .router-link-active {
            background-color: #ffffff;
            border-left: 2px solid $mainColor;
        }
    }

    &-main {
        flex: 1;
        overflow-x: hidden;
    }
}
</style>
