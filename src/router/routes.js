const Home = () => import('@/views/Home')
const Like = () => import('@/views/Like')
const Find = () => import('@/views/Find')
const Card = () => import('@/views/Card')
const Mine = () => import('@/views/Mine')

export default [
    {
        path: '/home',
        alias: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/like',
        name: 'like',
        component: Like
    },
    {
        path: '/find',
        name: 'find',
        component: Find
    },
    {
        path: '/card',
        name: 'card',
        component: Card
    },
    {
        path: '/mine',
        name: 'mine',
        component: Mine
    }
]
