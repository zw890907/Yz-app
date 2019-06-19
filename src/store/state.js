export default {
    cart: JSON.parse(window.localStorage.getItem('yz-cart')) || [],
    userInfo: JSON.parse(window.localStorage.getItem('yz-userInfo')) || {
        id: '',
        displayName: '',
        avatar: '',
        token: ''
    }
}
