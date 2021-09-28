import router from '.'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', 
      component: () => import('src/pages/PageHome.vue'),
      name: 'Welcome',
      meta:{
        title: "Welcome"
      }
      },

      { path: '/home', 
      component: () => import('src/pages/PageHome.vue'),
      name: 'Home',
      meta:{
        title: "Home"
      }
      },

      { path: '/about', 
      component: () => import('src/pages/PageAbout.vue'),
      name: 'About',
      meta:{
        title: "About"
      }
    },

      { path: '/explore', 
      component: () => import('src/pages/PageExplore.vue'),
      name: 'Explore',
      meta:{
        title: "Explore"
      }},

      { path: '/notifications', 
      component: () => import('src/pages/PageNotifications.vue'),
      name: 'Notifications',
      meta:{
        title: "Notifications"
      }},

      { path: '/messages', 
      component: () => import('src/pages/PageMessages.vue'),
      name: 'Messages',
      meta:{
        title: "Messages"
      }},

      { path: '/profile', 
      component: () => import('src/pages/PageProfile.vue'),
      name: 'Profile',
      meta:{
        title: "Profile"
      }}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
