import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './../store/index'
import Home from '../views/Home.vue'
import Index from '../views/index.vue'
import Detail from '../views/detail.vue'
import Product from '../views/product.vue'
import Cart from '../views/cart.vue'
import Order from '../views/order.vue'
import OrderConfirm from '../views/orderConfirm.vue'
import OrderList from '../views/orderList.vue'
import OrderPay from '../views/orderPay.vue'
import Login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: Product
      }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    // redirect: '/list',
    children: [{
        path: '/list',
        name: 'order-list',
        component: OrderList
      },
      {
        path: '/confirm',
        name: 'order-confirm',
        component: OrderConfirm
      }, {
        path: '/pay',
        name: 'order-pay',
        component: OrderPay
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})
// eslint-disable-next-line no-unused-vars
// router.beforeEach((to, from) => {
//   //  console.log(store.state.userName);
// })

export default router