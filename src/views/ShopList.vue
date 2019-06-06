<template>
    <div>
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
    </div>
</template>

<script>
    import * as ajax from '@/request'
    import ShopItem from '@/components/ShopItem'
    export default {
        data () {
            return {
                id: '',
                lists: []
            }
        },
        // created () {
        //     // console.log(this.$route.params.shopId)
        //     let id = this.$route.params.shopId
        //     this.getList(id)
        // },
        // 导航守卫
        beforeRouteEnter (to, from, next) {
            let id = to.params.shopId
            next(vm => {
                vm.getList(id)
            })
        },

        beforeRouteUpdate (to, from, next) {
            let id = to.params.shopId
            this.getList(id)
            next()
        },
        methods: {
            //  请求列表的方法
            getList (id) {
                ajax.getShopList(id).then(resp => {
                    console.log(resp)
                    this.lists = resp.data.items.list
                })
            }
        },
        components: {
            ShopItem
        }
    }
</script>

<style>

</style>
