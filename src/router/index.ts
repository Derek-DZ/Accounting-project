import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/components/Money.vue';
import Statistic from '@/views/Statistic.vue';
import Accounts from '@/views/Accounts.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/accounts'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/accounts',
    component: Accounts
  },
  {
    path: '/statistic',
    component: Statistic
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
