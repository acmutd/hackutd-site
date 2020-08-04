<template>
  <div id="app">
    <div class="flex flex-col h-full">
      <site-header></site-header>
      <main class="h-full">
        <slot></slot>
      </main>
    </div>
    <Particles
      id="tsparticles"
      :options="$options.config"
    />
  </div>
</template>

<script>
import config from '~/assets/particlesjs-config.json';
import Header from '../components/Header.vue';

export default {
  components: {
    'site-header': Header,
  },
  config: config
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

#tsparticles {
  width:100%;
  height:100%;
  position:fixed;
  z-index:-10;
  top:0;
  left:0;
}
</style>