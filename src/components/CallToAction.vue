<template>
  <div class="flex flex-row items-center justify-center mt-8">
    <a
      id="button"
      :style="cssVars"
      class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg text-center"
      :href="href"
    >{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    href: String,
    animationDelay: Number
  },
  computed: {
      cssVars() {
          console.log(this.animationDelay);
          return {
              '--delay': (this.animationDelay / 10) + 's'
          }
      }
  }
};
</script>

<style scoped>
@keyframes pulse {
  25% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(1.1);
  }
}

#button {
  animation: pulse 0.5s ease;
  animation-delay: var(--delay);
}
</style>