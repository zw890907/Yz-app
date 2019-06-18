<template>
    <div class="yz-detail">
        <div class="yz-detail-img">
            <mt-swipe :auto="3000">
                <mt-swipe-item
                    v-for="photo in detail.photos"
                    :key = "photo.id"
                ><img :src="photo.url" :alt="photo.cid"></mt-swipe-item>
            </mt-swipe>
        </div>
        <p class="yz-detail-title">{{detail.title}}</p>
        <p class="yz-detail-price">￥ {{detail.price}}</p>
        <button>加入购物车</button>
    </div>
</template>

<script>
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                id: '',
                detail: []
            }
        },
        created () {
            this.id = this.$route.query.id
            ajax.getDetail(this.id).then(resp => {
                console.log(resp)
                this.detail = resp.data.detail
            })
        }
    }
</script>

<style lang="scss">
.yz-detail {
    height: 100%;
    &-img {
        width: 100%;
        height: 0;
        padding-top: 100%;
        position: relative;
        img {
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
    }
    &-title {
        line-height: 30px;
        color: rgb(26, 12, 218);
    }
    &-price {
        line-height: 20px;
        color: #f00;
    }
    button {
        width: 90%;
        margin-left: 5%;
    }
}
</style>
