import Vue from "vue"      
import VueRouter from "vue-router"   //导入

Vue.use(VueRouter)    //使用

const routes = [      //配置映射关系
  {
  	path: '',
  	redirect: '/home'
  },
  {
  	path: '/home',
  	component: () => import('../views/home/Home')
  },
  {
  	path: '/profile',
  	component: () => import('../views/profile/Profile')
  },
  {
  	path: '/cart',
  	component: () => import('../views/cart/Cart')
  },
  {
  	path: '/category',
  	component: () => import('../views/category/Category')
  }, 
  {
    path: '/detail',
    component: () => import('../views/detail/Detail')
  }, 
 ]


const router = new VueRouter({     //创建实例
	routes,
	mode:'history'
})

export default router     //导出 在main.js中使用