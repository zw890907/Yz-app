import * as ajax from '@/request'

export default {
    goLogin (context, userInfo) {
        ajax.Login(userInfo).then(resp => {
            // console.log(resp)
            // 把用户信息存localStorage
            window.localStorage.setItem('yz-userInfo', JSON.stringify(resp.data.data.userInfo))
            // 处理登陆成功后的逻辑
            context.commit('toggleIsLogin', resp.data.data.userInfo)
        })
    }
}
