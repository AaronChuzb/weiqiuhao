export default [{
  path: '/',
  name: 'Login',
  component: () => import('@/views/Login.vue')
}, {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/Home.vue')
}, ]