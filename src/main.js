// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import GeneralLayout from '~/layouts/GeneralLayout.vue';
import Particles from "particles.vue";

export default function (Vue, { router, head, isClient }) {
  head.htmlAttrs = { style: 'height:100vh;' }
  head.bodyAttrs = {
    style:`
      height:100vh;
      background-color: #292929;
      color: white;
      `
  }
  router.beforeEach((to, from, next) => {
    if (to.name === '*') {
      router.push('/404');
    } else {
      next();
    }
  });
  Vue.component('Layout', GeneralLayout);
  Vue.use(Particles);
}
