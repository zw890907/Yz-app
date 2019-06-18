import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import store from '@/store'
import YzBackTop from '@/components/YzBackTop'

Vue.component('YzBackTop', YzBackTop)

store.subscribe((mutation, state) => {
  // 订阅所有的mutation，只要有任意一个mutation提交，这里都会执行
  window.localStorage.setItem('yz-cart', JSON.stringify(state.cart))
})
Vue.use(Mint)

Vue.config.productionTip = false

Vue.mixin({
  filters: {
    countShow (val) {
      if (val > 99) {
        return '99+'
      } else {
        return val
      }
    },
    toFix2 (val) {
      return val.toFixed(2)
    }
  }
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
