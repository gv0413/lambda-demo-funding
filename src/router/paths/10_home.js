export default {
  routes: [
    {
      title: 'home',
      path: '/',
      name: 'home',
      component: function(resolve) {
        require(['@/components/index.vue'], resolve)
      },
    },
    {
      title: 'header',
      path: '/header',
      name: 'header',
      component: function(resolve) {
        require(['@/components/header.vue'], resolve)
      },
    },
    {
      title: 'detail',
      path: '/detail',
      name: 'detail',
      component: function(resolve) {
        require(['@/components/detail.vue'], resolve)
      },
    },
    {
      title: 'product',
      path: '/product',
      name: 'product',
      component: function(resolve) {
        require(['@/components/product.vue'], resolve)
      },
    },
    
  ],
}
