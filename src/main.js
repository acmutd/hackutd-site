// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import HomeLayout from '~/layouts/Home.vue';
import GeneralLayout from '~/layouts/GeneralLayout.vue';

export default function (Vue, { router, head, isClient }) {
  Vue.component('home-layout', HomeLayout);
  Vue.component('Layout', GeneralLayout);
}
