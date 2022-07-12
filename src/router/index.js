import { createRouter, createWebHistory } from 'vue-router'

const Home = () =>
  import ('views/home/Home')
const Category = () =>
  import ('views/category/Category')
const Shopcart = () =>
  import ('views/shopcart/Shopcart')
const Profile = () =>
  import ('views/profile/Profile')
const Detail = () =>
  import ('views/detail/Detail')

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/profile',
  component: Profile
}, {
  path: '/shopcart',
  component: Shopcart
}, {
  path: '/detail/:iid',
  component: Detail
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router