<template>
  <Layout>
    <section class="background-scrim flex flex-col items-center justify-center h-full">
      <div class="md:flex md:flex-col">
        <div class="md:flex md:flex-row">
          <div class="flex flex-col justify-evenly mx-8 text-4xl font-display font-bold">
            <img src="../assets/logo-square-orange.svg" alt="HackUTD logo" width="100%"/>
            <div class="text-center mt-4">HackUTD</div>
          </div>
          <div class="inline-block font-display font-bold text-3xl mt-4 md:flex md:flex-col md:text-6xl">
            <span class="mx-2">Hack.</span>
            <span class="mx-2">Build.</span>
            <span class="mx-2">Learn.</span>
          </div>
        </div>
        <div class="flex flex-row items-center justify-center mt-8">
          <a
            class="rounded-md shadow-md font-sans font-normal text-lg bg-orange p-4 text-black focus:shadow-lg hover:shadow-lg"
            href="/"
          >Sign up for our newsletter</a>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home',
  },
};
</script>

<style lang="postcss">
.background-scrim {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(255,255,255,0.25) 100%);
}
</style>
