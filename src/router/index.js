import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../Home.vue'



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '/home',
                // component: () => import('../views/Index.vue')
            },
            {
                path: '/variety',
                name: 'variety',
                component: () => import('../components/variety.vue')
            },
            {
                path: '/TotalRank',
                name: 'TotalRank',
                component: () => import('../components/Ranking/totalRanking.vue')
            },
            {
                path: '/FeatureRank',
                name: 'FeatureRank',
                component: () => import('../components/Ranking/featureRanking.vue')
            },
            {
                path: '/ProvinceRank',
                name: 'ProvinceRank',
                component: () => import('../components/Ranking/provinceRanking.vue')
            },
            {
                path: '/ThesisRank',
                name: 'ThesisRank',
                component: () => import('../components/Ranking/thesisRanking.vue')
            },
            {
                path: '/PatentRank',
                name: 'PatentRank',
                component: () => import('../components/Ranking/patentRanking.vue')
            }, {
                path: '/EthnicRank',
                name: 'EthnicRank',
                component: () => import('../components/Ranking/ethnicRanking.vue')
            },

            {
                path: '/InjectionRank',
                name: 'InjectionRank',
                component: () => import('../components/Ranking/injectionRanking.vue')
            }
        ]
    },

]

// 创建router实例，然后传`routes`配置
const router = new VueRouter({
    routes,
})

export default router