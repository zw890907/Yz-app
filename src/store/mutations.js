import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT,
    ON_ADD_CART,
    TOGGLE_IS_LOGIN
} from './mutationtypes'

export default {
    [TOGGLE_IS_CHECK] (state, id) {
        state.cart = state.cart.map(item => {
            if (item.id === id) {
                item.isCheck = !item.isCheck
            }
            return item
        })
    },
    [COUNT_DECREMENT] (state, id) {
        state.cart = state.cart.map(item => {
            if (item.id === id) {
                item.count--
                if (item.count < 1) {
                    item.count = 1
                }
            }
            return item
        })
    },
    [COUNT_INCREMENT] (state, id) {
        state.cart = state.cart.map(item => {
            if (item.id === id) {
                item.count++
            }
            return item
        })
    },
    [ON_ADD_CART] (state, shopInfo) {
        const isExist = state.cart.some(item => {
            return item.id === shopInfo.id
        })
        if (isExist) {
            state.cart = state.cart.map(item => {
                if (item.id === shopInfo.id) {
                    item.count++
                }
                return item
            })
        } else {
            state.cart.push({ ...shopInfo, count: 1, isCheck: true })
        }
    },
    [TOGGLE_IS_LOGIN] (state, userInfo) {
        state.userInfo = userInfo
    }
}
