<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <mt-button type="primary" size="large" @click="onLogin">登陆</mt-button>
    </div>
</template>

<script>
    import {
        mapActions,
        mapState
    } from 'vuex'

    export default {
        data () {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapActions(['goLogin']),
            onLogin () {
                // 用户名和密码的验证，参考 validate vee-validate validator
                let username = this.username
                let password = this.password
                this.goLogin({ username, password })
            }
        },
        computed: {
            ...mapState(['isLogin'])
        },
        watch: {
            isLogin (newVal, oldVal) {
                // console.log({ newVal, oldVal })
                if (newVal === true) {
                    const { from = '/' } = this.$route.params
                    this.$router.push(from)
                }
            }
        }
    }
</script>

<style>

</style>
