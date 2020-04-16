<template>
  <Layout>
    <div class="hero md:flex flex">
      <g-image src="~/assets/hackutd-logo-white.png" />
      <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto m-auto">
        <div
          class="description text-color-white text-2xl"
        >HackUTD is the largest hackathon in northern Texas.</div>
        <div class="cta text-center">
          <button
            class="m-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
          >
            <span class>Apply to HackUTD VII</span>
          </button>
        </div>
      </div>
    </div>
    <section
      id="about"
      class="px-6 m-4 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto"
    >
      <div class="mission">
        <h1 class="text-2xl">Mission</h1>
        <div class="flex">
          <p>
            HackUTD brings together students from across northern Texas and even the world to learn
            and grow as developers.
          </p>
        </div>
      </div>
    </section>
    <!-- <section
      id="events"
      class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto"
    >
      <h1 class="text-2xl">Our Events</h1>
      <div class="events-box flex">
        <div class="hackutd m-6">
          <h2>HackUTD - For the Fall</h2>
          <div class="hack-info">
            <p>HackUTD</p>
          </div>
        </div>
        <div class="springhack m-6">
          <h2>Spring Hackathon</h2>
          <g-image src="~/assets/hackutd-logo-white.png" width="128"></g-image>
          <div class="hack-info"></div>
        </div>
      </div>
    </section> -->
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "HackUTD - Organization Information"
  }
};
</script>

<style>
body {
  background-color: #292929;
  color: white;
}
.home-links a {
  margin-right: 1rem;
}

.hero {
  background: #666;
}

h1 {
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
  @apply text-2xl;
}
</style>
