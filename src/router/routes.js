const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
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
        path: '/Mall',
        name: 'Mall',
        component: Mall
    },
    {
        path: '/Find',
        name: 'Find',
        component: Find
    },
    {
        path: '/Card',
        name: 'Card',
        component: Card
    },
    {
        path: '/Mine',
        name: 'Mine',
        component: Mine
    }
]
