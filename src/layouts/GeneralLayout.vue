<template>
  <div id="app">
    <div class="min-h-screen">
      <site-header></site-header>
      <main class="min-h-full">
        <slot></slot>
      </main>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

export default {
  components: {
    'site-header': Header,
    'site-footer': Footer,
  },
};
</script>

<style>
.nav__link {
  margin-left: 20px;
}
</style>
