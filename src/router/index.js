import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';  // если вы настроили алиас '@'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home', // Лучше использовать более описательные имена
      component: App
    },
    // Добавьте дополнительные маршруты по мере необходимости
  ],

  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
