<template>
  <div>
    <div class="flex flex-col h-screen">
      <site-header></site-header>
      <div class="flex justify-center flex-grow h-full">
        <slot name="header"></slot>
      </div>
    </div>
    <main class="flex-grow h-full">
      <slot></slot>
    </main>
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
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    "site-header": Header,
    "site-footer": Footer,
  },
};
</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.nav__link {
  margin-left: 20px;
}
</style>
