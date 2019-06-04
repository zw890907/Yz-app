<template>
    <div class="top">
        <mt-header title="有赞-精选">
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.top {
    background-color: rgb(90, 19, 138);
}
</style>
