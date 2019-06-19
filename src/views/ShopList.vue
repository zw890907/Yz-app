<template>
    <div
        class="yz-shopList"
        v-infinite-scroll="onLoadMore"
        infinite-scroll-distance="10"
    >
        <ShopItem
            v-for="list in lists"
            :key="list.id"
            :id="list.id"
            :image="list.image"
            :title="list.title"
            :price="list.price"
            :saleNum="list.saleNum"
            :couponValue="list.couponValue"
        ></ShopItem>
        <p v-if="!isEnd" @click="onLoadMore">加载更多。。。</p>
        <p v-else>--底线在此，没有更多了--</p>
        <YzBackTop
            :distance="400"
            container=".yz-find-main"
        ></YzBackTop>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    import ShopItem from '@/components/ShopItem'
    export default {
        data () {
            return {
                isEnd: false,
                id: '',
                lists: [],
                nextIndex: 0
            }
        },
        // created () {
        //     // console.log(this.$route.params.shopId)
        //     let id = this.$route.params.shopId
        //     this.getList(id)
        // },
        // 导航守卫
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.id = to.params.shopId
                // vm.getList()
            })
        },

        beforeRouteUpdate (to, from, next) {
            this.id = to.params.shopId
            this.lists = []
            this.nextIndex = 0
            if (document.querySelector('.yz-find-main').scrollTop === 0) this.getList()
            // this.getList()
            next()
        },
        methods: {
            //  请求列表的方法
            getList () {
                ajax.getShopList(this.id, this.nextIndex).then(resp => {
                    // console.log(resp)
                    this.lists = this.lists.concat(resp.data.items.list)
                    this.nextIndex = resp.data.items.nextIndex
                    this.isEnd = resp.data.items.isEnd
                })
            },
            onLoadMore () {
                this.getList()
            }
        },
        components: {
            ShopItem
        }
    }
</script>

<style>

</style>
