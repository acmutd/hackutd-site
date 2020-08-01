<template>
  <div>
    <section class="hero h-screen">
      <div class="md:m-auto md:max-w-3xl md:flex">
        <div class="flex-1">
          <img src="../assets/logo-square-white.svg" alt="HackUTD logo" class="">
        </div>
        <div class="flex-1 text-6xl font-display font-bold px-4">
          <span class="md:block">Hack.</span>
          <span class="md:block">Build.</span>
          <span class="md:block">Learn.</span>
          <a class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg" href="/">Sign up for our newsletter</a>
        </div>
      </div>
      <div class="text-center">
        <span class="material-icons">arrow_down</span>
        <span class="text-lg mx-2">Learn more</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style lang="postcss">
body {
  background-color: #292929;
  color: white;
}

.home-links a {
  margin-right: 1rem;
}

.hero {
  background: url('../assets/starsbg-blue.svg');
  background-size: contain;
}

h1 {
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
  @apply text-2xl;
}
</style>
