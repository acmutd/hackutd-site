<template>
  <home-layout>
    <template v-slot:header>
      <section id="hero" class="hero h-full flex flex-col">
        <div class="md:flex flex-grow max-w-4xl">
          <div class="w-full flex flex-col justify-center">
            <g-image src="~/assets/hackutd-logo-white.png" class="m-auto" />
          </div>
          <div class="w-full text-left md:my-auto">
            <div class="m-4">
              <div class="md:text-5xl text-bold">Hack.</div>
              <div class="md:text-5xl text-bold">Build.</div>
              <div class="md:text-5xl text-bold">Learn.</div>
              <div class="cta">
                <button
                  class="rounded-lg px-4 md:px-5 py-3 md:py-4 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md"
                >
                  <span class="bg-orange-500">Apply to HackUTD VII</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center h-8 m-2">
          <div>
            <i class="material-icons h-10 w-10 m-2">arrow_down</i>
            More
          </div>
        </div>
      </section>
    </template>
    <section
      id="about"
      class="py-4 my-4 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto"
    >
      <div class="mission">
        <h1 class="text-2xl">Mission</h1>
        <div class="flex">
          <div class="flex-grow">
            <p>
              HackUTD brings together students from across northern Texas and even the world to learn
              and grow as developers.
              HackUTD hosts technical workshops in preparation for its hackathons
              held in the fall and spring along with on-site events.
            </p>
            <g-link class="text-xl font-bold" to="/history">> See our events</g-link>
        </div>
        </div>
      </div>
    </section>
    <section id="team"
    class="py-4 my-4 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl">Team</h1>
      <div class="flex">
        <div class="flex-grow">
          <p>
            The HackUTD team is a set of dedicated students at The University of
            Texas at Dallas. As part of the student chapter for the Assocation for
            Computing Machinery at UT Dallas, the organizers are responsible for
            making the hacker experience as engaging as it can be.
          </p>
          <g-link class="text-xl font-bold" to="/team">> See the team</g-link>
        </div>
      </div>
    </section>
  </home-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Organization Information"
  }
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
  background: #666;
}

h1 {
  font-family: Raleway;
  font-weight: 600;
  text-transform: uppercase;
  @apply text-2xl;
}
</style>
