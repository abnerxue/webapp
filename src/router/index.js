import Vue from 'vue'
import Router from 'vue-router'
import map from './map'
/* import mainRouters from './main.js'
import mapRouters from './map.js' */



Vue.use(Router);

/* const router = new Router({
    mode: 'history',
    routes: [ ...mainRouters],
    routes: [ ...mapRouters]
    
}); */
const router=new Router(map)

//全局前置守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
      document.title = to.meta.title
    }
    next()
})
router.afterEach((to, from) => {

})
export default router;
