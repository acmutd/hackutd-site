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
  background: url('../assets/starsbg-blue.svg') center center no-repeat;

  
}
</style>