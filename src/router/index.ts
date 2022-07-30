import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layout/layout'),
      children: [
        {
          path: '/button',
          component: () => import('@/views/button/button')
        }
      ]
    }
  ]
});

export default router;
