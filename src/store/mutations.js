import {
    TOGGLE_IS_CHECK,
    COUNT_DECREMENT,
    COUNT_INCREMENT
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
    }
}
