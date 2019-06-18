import YzFooter from '@/components/YzFooter'

const Home = () => import('@/views/Home')
const Like = () => import('@/views/Like')
const Find = () => import('@/views/Find')
const Card = () => import('@/views/Card')
const Mine = () => import('@/views/Mine')
const ShopList = () => import('@/views/ShopList')
const Detail = () => import('@/views/Detail')

export default [
    {
        path: '/',
        redirect: '/home',
        meta: {}
    },
    {
        path: '/home',
        name: 'home',
        components: {
            default: Home,
            footer: YzFooter
        },
        meta: {
            isFooter: true,
            title: '首页',
            icon: '&#xe633;'
        }
    },
    {
        path: '/like',
        name: 'like',
        components: {
            default: Like,
            footer: YzFooter
        },
        meta: {
            isFooter: true,
            title: '喜欢',
            icon: '&#xe608;'
        }
    },
    {
        path: '/find',
        name: 'find',
        components: {
            default: Find,
            footer: YzFooter
        },
        meta: {
            isFooter: true,
            title: '发现',
            icon: '&#xe634;'
        },
        children: [
            {
                path: ':shopId',
                name: 'shoplist',
                component: ShopList
            }
        ]
    },
    {
        path: '/card',
        name: 'card',
        components: {
            default: Card,
            footer: YzFooter
        },
        meta: {
            isFooter: true,
            title: '购物车',
            icon: '&#xe630;'
        }
    },
    {
        path: '/mine',
        name: 'mine',
        components: {
            default: Mine,
            footer: YzFooter
        },
        meta: {
            isFooter: true,
            title: '我的',
            icon: '&#xe635;'
        }
    },
    {
        path: '/detail',
        name: 'detail',
        component: Detail,
        meta: {}
    }
]
