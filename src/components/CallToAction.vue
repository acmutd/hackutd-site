<template>
  <a
    id="button"
    :style="style"
    class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg text-center mt-8"
    :href="href"
  >{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: String,
    href: String,
    idx: Number,
    numButtons: Number,
  },
  computed: {
      style() {
          const needsDifferentColumns = this.numButtons % 2 == 1 && this.idx == this.numButtons - 1;
          return {
              '--delay': (this.idx / 10) + 's',
              'grid-column-start': needsDifferentColumns ? 1 : 'auto',
              'grid-column-end': needsDifferentColumns ? 3 : 'auto'
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