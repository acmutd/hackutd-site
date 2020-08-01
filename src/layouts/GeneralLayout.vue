<template>
  <div id="app">
    <div class="min-h-screen flex flex-col">
      <site-header></site-header>
      <main class="min-h-full flex-grow">
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

body {
  background: #454545;
}

#app {
  background: url('../assets/starsbg-blue.svg');
  object-fit: cover;
}

@screen light {
  body {
    /* background: #fafafa; */
  }
}
</style>
