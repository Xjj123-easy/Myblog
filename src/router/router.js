import { createWebHistory, createRouter } from 'vue-router';

const routes = [{
        path: "/",
        redirect: "login"
    }, {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../view/login')
    },
    {
        path: '/index',
        name: "首页",
        component: () =>
            import ('../view/index.vue'),
        meta: {
            title: "首页"
        },
        children: [{
                path: '',
                name: '首页1',
                component: () =>
                    import ('../view/house.vue'),
                meta: {
                    title: "首页"
                },
            },
            {
                path: 'article',
                name: '文章管理',
                meta: {
                    title: "文章管理"
                },
                children: [{
                        path: '',
                        name: '写文章',
                        component: () =>
                            import ('../view/article/Write.vue'),
                        meta: {
                            title: "写文章"
                        },
                    },
                    {
                        path: 'Classify',
                        name: '文章分类',
                        component: () =>
                            import ('../view/article/Classify'),
                        meta: {
                            title: "文章分类"
                        },
                    },
                ]
            },
            {
                path: 'commit',
                name: '评论管理',
                component: () =>
                    import ('../view/commit/management.vue'),
                meta: {
                    title: "评论管理"
                },
            },
            {
                path: 'user',
                name: '用户管理',
                component: () =>
                    import ('../view/user/management.vue'),
                meta: {
                    title: "用户管理"
                },
            },
        ]
    }

]
const router = createRouter({
    history: createWebHistory(),
    routes,

})
export default router;