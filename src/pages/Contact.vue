<template>
  <Layout>
    <section id="contact" class="md:max-w-3xl my-4 p-2 mx-auto">
      <h1 class="text-4xl text-center">Contact Us</h1>
      <p class="text-center text-xl">
        Have any questions or want to say hello? Find us at
        <a
          href="mailto:hello@hackutd.co"
        >hello@hackutd.co</a>.
      </p>
      <div>
        <!-- TODO: Social media -->
      </div>
    </section>
    <section class="md:max-w-3xl my-4 p-2 mx-auto">
      <h1 class="text-3xl text-center">For Sponsors</h1>
      <p class="text-center text-xl">
        Want to sponsor HackUTD? Contact us at
        <a href="mailto:sponsor@hackutd.co">sponsor@hackutd.co</a>.
      </p>
      <h2 class="text-2xl text-center my-4">Prospectus</h2>
      <object data="/sponsorship-packet.pdf" type="application/pdf" class="prospectus-container mx-auto">
        <embed src="/sponsorship-packet.pdf" type="application/pdf" />
      </object>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  }
}
</script>

<style lang="postcss">
.prospectus-container {
  width: 100vw;
  height: 60vh;
  padding: 8px;
}

@media screen and (min-width: 600px) {
  .prospectus-container {
    width: 768px;
    padding: 8px;
    height: 1024px;
  }
}
</style>