<template>
  <div id="app">
    <div class="flex flex-col h-full">
      <comet-background />
      <site-header></site-header>
      <transition name="fade" appear>
      <main class="h-full">
        <slot></slot>
      </main>
      </transition>
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
import CometBackground from "../components/CometBackground";

export default {
  components: {
    'site-header': Header,
    'comet-background': CometBackground
  },
  config: config
};
</script>

<style lang="postcss">
#app {
  @apply h-full;
  background: url('../assets/starsbg-blue.svg') no-repeat fixed;
  background-size: 100% 100%;
  overflow: auto;
}

.page-title {
  @apply text-5xl text-center;
  @apply text-white font-display font-bold;
  @apply my-4;
}

.committee-title {
  @apply text-3xl text-center;
  @apply text-white font-display font-bold underline;
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

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

@screen md {
  /* scrollbar width */
  ::-webkit-scrollbar {
    background-color:#292F362c;
    width:8px;
  }

  /* scrollbar track */
  ::-webkit-scrollbar-track {
    background-color:#292f362c;
  }
  
  /* scrollbar handle */
  ::-webkit-scrollbar-thumb {
    background-color:#ffc286;
    border-radius:8px;
  }

  /* scrollbar handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ce9d6d; 
  }

  ::-webkit-scrollbar-button {
    display:none
  }
}
</style>
