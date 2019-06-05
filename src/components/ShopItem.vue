<template>
    <router-link tag="div" to="/detail" class="yz-item">
        <div class="yz-item-img">
            <img :src="image" alt="">
        </div>
        <p class="yz-item-title">{{title}}</p>
        <p class="yz-item-num">
            <span class="yz-item-num-price">￥{{price}}</span>
            <span class="yz-item-num-saleNum"><b>{{saleNum}}</b>人已买</span>
            <span class="yz-item-num-couponValue">{{couponValue}}</span>
        </p>
        <p class="yz-item-btn" @click.stop="onAddCart">加入购物车</p>
    </router-link>
</template>

<script>
    import router from '@/router/index'
    export default {
        props: {
            id: Number,
            image: String,
            title: String,
            saleNum: Number,
            price: Number,
            couponValue: String
        },
        methods: {
            onAddCart () {
                console.log(this.id)
                router.push('/card')
            }
        }
    }

</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #fc454a;
.yz-item {
    width: 50%;
    box-sizing: border-box;
    display: inline-block;
    padding: 8px;
    &-title {
        font-size: 12px;
        line-height: 25px;
        color: $deepGrey;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    &-num {
        font-size: 12px;
        color: $deepGrey;
        line-height: 25px;
        position: relative;
        &-price {
            color: #e00;
        }
        &-saleNum {
            margin-left: 3px;
        }
        &-couponValue {
            margin-left: 5px;
            color: #e00;
            position: absolute;
            right: 0;
            top: 0;
        }
    }
    &-btn {
        width: 100px;
        height: 20px;
        line-height: 20px;
        background-color: $mainColor;
        border-radius: 5px;
        font-size: 12px;
        text-align: center;
        margin: 0 auto;
        color: #ffffff;
    }
    img {
        width: 100%;
    }
}
</style>
