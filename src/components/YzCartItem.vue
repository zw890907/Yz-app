<template>
    <div class="yz-cart-item">
        <label class="yz-cart-item-check">
            <input type="checkbox" :checked="isCheck"  @change="toggleIsCheck(id)">
            <span></span>
        </label>
        <div class="yz-cart-item-img">
            <img :src="image" :alt="title">
        </div>
        <div class="yz-cart-item-info">
            <p class="yz-cart-item-info-title">{{title}}</p>
            <p class="yz-cart-item-info-action">
                <span class="yz-cart-item-info-action-price">￥ {{price}}</span>
                <span class="yz-cart-item-info-action-counter">
                    <span @click="countDecrement(id)">-</span>
                    <span>{{count}}</span>
                    <span @click="countIncrement(id)">+</span>
                </span>
            </p>
        </div>
    </div>
</template>

<script>
    import {
        mapMutations
    } from 'vuex'

    export default {
        props: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            count: {
                type: Number,
                default: 1
            },
            image: {
                type: String,
                required: true
            },
            isCheck: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            // 提交mutation进行修改
            ...mapMutations(['toggleIsCheck', 'countDecrement', 'countIncrement'])
        }
    }
</script>

<style lang="scss">
.yz-cart-item {
    height: 100%;
    display: flex;
    border-bottom: 1px solid #eee;
    &-check {
        width: 30px;
        input {
            display: none;
        }
        input:checked {
           + span {
               background-color: rgb(9, 154, 173);
               border-color: rgb(9, 154, 173);
               position: relative;
               &::after {
                   contain: '';
                   position: absolute;
                   width: 12px;
                   height: 7px;
                   border:2px solid #fff;
                   left: 0;
                   top: 0;
                   transform: rotate(-45deg);
               }
           }
        }
        span {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 1px solid rgb(65, 62, 62);
            border-radius: 50%;
            box-sizing: border-box;
            margin-left: 7px;
            margin-top: 30px;
        }
    }
    &-img {
        width: 80px;
        height: 80px;
        margin-bottom: 5px;
        img {
            width: 100%;
        }
    }
    &-info {
        &-title {
            line-height: 30px;
        }
        &-action {
            &-price {
                line-height: 30px;
            }
            &-counter {
                line-height: 30px;
                margin-left: 100px;
                font-size: 20px;
                span {
                    margin-left: 5px;
                }
            }
        }
    }
}
</style>
