<template>
  <div id="app">
    <div class="flex flex-col h-full">
      <site-header></site-header>
      <main class="h-full">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    'site-header': Header,
  },
};
</script>

<style lang="postcss">
#app {
  @apply h-full;
  background: url('../assets/starsbg-blue.svg') no-repeat fixed 100%;
  overflow: auto;
}

.page-title {
  @apply text-5xl text-center;
  @apply text-white font-display font-bold;
  @apply my-4;
}
</style>