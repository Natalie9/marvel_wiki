
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Personagens.vue') },
      { path: '/comics', component: () => import('pages/Comics.vue') },
      { path: '/stories', component: () => import('pages/Stories.vue') },
      { path: '/detail/:id', component: () => import('pages/PersonagensDetail.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
