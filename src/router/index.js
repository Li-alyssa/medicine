import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../Home.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/home",
        meta: { show: true }

    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        meta: { show: true }
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../components/login/index.vue'),
        meta: { show: false }
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../components/register/index.vue'),
        meta: { show: false }
    },
    {
        path: '/companies',
        name: 'companies',
        component: () => import('../components/company.vue'),
        meta: { show: true }

    }, {
        path: '/companyDetails',
        name: 'companyDetails',
        component: () => import('../components/companyDetails.vue'),
        meta: { show: true }
    },
    // {
    //     path: '/variety',
    //     name: 'variety',
    //     component: () => import('../components/variety.vue')
    // },
    // {
    //     path: '/variety/:id',
    //     name: 'product',
    //     component: () => import('../components/product.vue')
    // },

    {
        path: '/goods',
        name: 'goods',
        component: () => import('../components/goods.vue'),
        meta: { show: true }
    },
    {
        path: '/product/:id/:name',
        name: 'product',
        component: () => import('../components/product.vue'),
        meta: { show: true }

    },
    {
        path: '/Rank',
        name: 'Rank',
        component: () => import('../components/Rank.vue'),
        meta: { show: true }

    },
    {
        path: '/:name',
        name: 'RankList',
        component: () => import('../components/Ranking/ranking.vue'),
        meta: { show: true }

    },

]



// 创建router实例，然后传`routes`配置
const router = new VueRouter({
    routes,
})


//增加路由权限跳转功能
//全局守卫：前置守卫 在路由跳转之间进行判断
// router.beforeEach(async (to, from, next) => {
//     // to:要跳转到哪个路由的信息
//     // from：从哪个路由开始跳
//     // next：放行函数
//     // next()
//     //next(path) 放行到指定路由
//     //next(false) 中断当前的导航
//     let token = store.state.user.token;
//     let name = store.state.user.userInfo.name;
//     if (token) {
//         //用户已经登陆 要去login
//         if (to.path == '/login') {
//             //如果要去的路由为login 跳转至home
//             next('/home')
//             // console.log(1);
//         } else {
//             // 用户登录 去的地方不是login
//             //判断是否存在用户名
//             if (name) {
//                 //存在用户信息 放行
//                 next();
//                 // console.log(2);

//             } else {
//                 //没有用户信息 派发action 让仓库存储用户信息在跳转
//                 try {
//                     await store.dispatch('getUserInfo')
//                     //放行
//                     next()
//                     console.log(3);
//                 } catch (error) {
//                     //token失效无法获取用户信息 清除token重新登陆
//                     store.dispatch('userLogout')
//                     next('/login')
//                 }
//             }
//         }
//     } else {
//         //未登录   还未完善
//         // next('/login')
//         // next()
//         //未登录 无法去交易相关路由、支付相关路由 pay paysuccess 个人中心路由 center
//         //转去登陆页面
//         // 其余路由放行
//         let toPath = to.path;
//         if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
//             //在未登录的时候想去未去的信息存储于地址栏中 路由
//             next('/login?redirect=' + toPath)
//         } else {
//             next()
//         }
//         console.log(4);

//     }
// })
export default router