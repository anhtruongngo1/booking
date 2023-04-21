import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
    {
        path: "/",
        name: 'Home',
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/index.vue")
    },
    {
        path: "/register",
        name: 'Register',
        meta: {
            layout : 'auth'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/register.vue")
    },
    {
        path: "/login",
        name: 'Login',
        meta: {
            layout : 'default'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/auth/login.vue")
    },
    {
        path: "/system",
        name: 'System',
        meta: {
            layout : 'auth'
        } ,
        component: ()=> import(/* webpackChunkName : "home" */ "@/views/system/system.vue")
    },
    // {
    //     path: "/:pathMatch(.*)*",
    //     component: NotFound,
    // }
]
const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to, from, next) => {
    // chuyển đến trang login nếu chưa được login
    const publicPages = ['/', '/login' ,'/system'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('access_token');
  
    if (authRequired && !loggedIn) {
      return next('/login');
    }
  
    next();
  })
export default router