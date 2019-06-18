<template>
    <div class="yz-backTop" v-show="isShow" v-backTop="{ container, distance }" @click="onToTop">
        TOP
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isShow: false
            }
        },
        props: {
            distance: Number,
            container: String
        },
        directives: {
            backTop: {
                inserted (el, binding) {
                    // console.log(el)
                    // 滚动事件
                    document.querySelector(binding.value.container).addEventListener('scroll', (e) => {
                        // console.log(e.target.scrollTop)
                        if (e.target.scrollTop > binding.value.distance) {
                            el.style.display = 'block'
                        } else {
                            el.style.display = 'none'
                        }
                    })
                }
            }
        },
        methods: {
            onToTop () {
                document.querySelector(this.container).scrollTop = 0
            }
        }
    }
</script>

<style lang="scss">
.yz-backTop {
    position: fixed;
    bottom: 60px;
    right: 30px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    background-color: #f00;
    color: #ffffff;
    font-size: 14px;
    box-shadow: 0 0 10px 0 rgba(255,0,0,.8);
}
</style>
