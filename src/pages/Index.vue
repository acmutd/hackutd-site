<template>
  <Layout>
    <section class="flex flex-col items-center justify-center h-full">
      <div class="flex flex-col">
        <div class="flex flex-row mb-20">
          <div class="flex flex-col justify-evenly mr-20 text-4xl font-display font-bold">
            <img src="../assets/logo-square-orange.svg" alt="HackUTD logo" width="100%"/>
            <span>HackUTD</span>
          </div>
          <div class="flex flex-col text-6xl font-display font-bold">
            <span>Hack.</span>
            <span>Build.</span>
            <span>Learn.</span>
          </div>
        </div>

        <div class="flex flex-row items-center justify-center">
          <a
            class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg"
            href="/"
          >Sign up for our newsletter</a>
        </div>
      </div>
    </section>
    <!-- <section class="flex items-center justify-center h-full">
      <div class="logo">
        <img src="../assets/logo-square-white.svg" alt="HackUTD logo" width="100%"/>
      </div>
      <div class="flex flex-col text-6xl font-display font-bold px-4">
        <span>Hack.</span>
        <span>Build.</span>
        <span>Learn.</span>
        <a
          class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg"
          href="/"
        >Sign up for our newsletter</a>
      </div>
    </section>-->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style lang="postcss">
/* .logo {
  margin-right: 5%;
}

img {
  height: 100% !important;
} */

/*
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
} */
</style>
