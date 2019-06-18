import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from '@/store'

store.subscribe((mutation, state) => {
  // 订阅所有的mutation，只要有任意一个mutation提交，这里都会执行
  window.localStorage.setItem('yz-cart', JSON.stringify(state.cart))
})
Vue.use(Mint)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
