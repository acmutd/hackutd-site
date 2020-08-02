<template>
  <Layout>
    <section>
      <div class="fancy-background">
        <h1 class="page-title">Our Flagship Events</h1>
        <div class="md:flex justify-center p-5 max-w-3xl m-auto">
          <div class="bg-white w-64 m-4 rounded-lg p-4 flex-1">
            <img
              class="h-16 w-16 md:h-48 md:w-48 rounded-full mx-auto md:mx-auto"
              src="../assets/logo-square-orange.svg"
            />
            <div class="event-card">
              <h2 class="text-3xl text-gray-900 font-bold font-display">HackUTD</h2>
              <div class="text-orage-500 text-md mt-1">Our hackathon for everyone.</div>
              <div class="text-gray-600 text-lg mt-3">Spring 2021</div>
            </div>
          </div>
          <div class="bg-white m-4 rounded-lg p-4 flex-1">
            <img
              class="h-16 w-16 md:h-48 md:w-48 rounded-full mx-auto md:mx-auto"
              src="../assets/logo-square-dark.svg"
            />
            <div class="event-card">
              <h2 class="text-3xl text-gray-900 font-bold font-display">Secret Project</h2>
              <div class="text-orange-500 text-md mt-1">An experimental online experience.</div>
              <div class="text-gray-600 text-lg mt-3">Fall 2020</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import WorkshopInfo from "../components/WorkshopInfo.vue";

export default {
  components: {
    "hack-workshop": WorkshopInfo
  },
  methods: {
    prettifyDate(date) {
      return new Date(date).toString();
    },
  },
};
</script>

<style lang="postcss">
.event-card {
  @apply text-black text-left mt-4;
}

@screen md {
  .event-card {
    @apply text-center;
  }
}
</style>