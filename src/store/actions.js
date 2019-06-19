import * as ajax from '@/request'

export default {
    goLogin (context, userInfo) {
        ajax.Login(userInfo).then(resp => {
            // console.log(resp)
            // 处理登陆成功后的逻辑
            context.commit('toggleIsLogin', true)
        })
    }
}
