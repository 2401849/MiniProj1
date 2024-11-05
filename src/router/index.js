import { createRouter, createWebHistory } from 'vue-router';
import WhoAmI from '../components/WhoAmI.vue'
import WhatIDo from '../components/WhatIDo.vue'
import Hobbies from '../components/Hobbies.vue'

const routes = [
  {
    path: '/',
    name: 'Who Am I',
    component: WhoAmI
  },
  {
    path: '/whatido',
    name: 'What I Do',
    component: WhatIDo
  },
  {
    path: '/hobbies',
    name: 'Hobbies',
    component: Hobbies
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
