<template>
    <div>
        <div v-if="isCartEmpty">
            购物车是空的，去逛逛~~
        </div>
        <div class="yz-cart-container" v-else>
            <YzCartItem
                v-for="item in cart"
                :key="item.id"
                :id="item.id"
                :title="item.title"
                :image="item.image"
                :count="item.count"
                :price="item.price"
                :isCheck="item.isCheck"
            ></YzCartItem>
        </div>
        <P>您总共有{{totalCount}}件商品，已选中了{{totalChecked}}件商品</P>
        <p>选中的总价为￥{{totalCheckedPrice | toFix2}}元</p>
    </div>
</template>

<script>
    import YzCartItem from '@/components/YzCartItem'
    import {
        mapState,
        mapGetters
    } from 'vuex'

    export default {
        components: {
            YzCartItem
        },
        computed: {
            ...mapState(['cart']),
            ...mapGetters(['totalCount', 'totalChecked', 'totalCheckedPrice', 'isCartEmpty'])
        },
        created () {
            // console.log(this.cart)
        }
    }
</script>

<style>

</style>
