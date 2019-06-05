<template>
    <div class="yz-home">
        <ul class="yz-home-ensure">
            <li>
                <i class="icon">&#xe634;</i>
                <span>人工优选</span>
            </li>
            <li>
                <i class="icon">&#xe634;</i>
                <span>品质担保</span>
            </li>
            <li>
                <i class="icon">&#xe634;</i>
                <span>售后无忧</span>
            </li>
        </ul>
        <!-- :show-indicators="false"隐藏下标 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item
                v-for="banner in banners"
                :key="banner.id"
            >
                <img :src="banner.imageUrl" :alt="banner.title">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    // 这个写法指的是把模块导出的所有方法放到ajax对象里，index可以省略
    import * as ajax from '@/request'
    export default {
        data () {
            return {
                banners: []
            }
        },
        created () {
            ajax.getBanner().then(resp => {
                console.log(resp)
                this.banners = resp.data.banners
            })
        }
    }
</script>

<style lang="scss">
$grey: #eee;
$deepGrey: #383838;
$mainColor: #fc454a;

.yz-home {
    .yz-home-ensure {
        display: flex;
        justify-content: space-around;
        color:#ba9d5b;
        line-height: 30px;
        font-size: 14px;
        span {
            margin-left: 5px;
        }
    }
    .mint-swipe-items-wrap {
        height: 0;
        padding-top: (400 / 1080) * 100%;
        width: 95%;
        margin: 0 auto;
        .mint-swipe-item {
            position: absolute;
            top: 0;
            left: 0;
        }
        img {
            width: 100%;
            border-radius: 5px;
        }
    }
}

</style>
