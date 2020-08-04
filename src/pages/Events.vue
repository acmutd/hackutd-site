<template>
  <Layout>
    <section class="events-page background-scrim">
      <h1 class="page-title">Our Flagship Events</h1>
      <div class="md:flex">
        <div class="event-card">
          <picture>
            <source srcset="../assets/logo-square-dark.svg" media="(prefers-color-scheme: light)">
            <source srcset="../assets/logo-square-white.svg" media="(prefers-color-scheme: dark)">
            <img 
              src="../assets/logo-square-dark.svg" 
              class="event-card--image"
              />
          </picture>
          <div class="">
            <h2 class="event-card--title">HackUTD Game Jam</h2>
            <div class="event-card--description">An experimental online experience.</div>
            <div class="event-card--cta">Fall 2020</div>
          </div>
        </div>
        <div class="event-card">
          <img
            src="../assets/logo-square-orange.svg"
            class="event-card--image"
          />
          <div class="">
            <h2 class="event-card--title">HackUTD</h2>
            <div class="event-card--description">Our hackathon for everyone.</div>
            <div class="event-card--cta">Spring 2021</div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import WorkshopInfo from '../components/WorkshopInfo.vue';

export default {
  metaInfo: {
    title: 'Events'
  },
  components: {
    'hack-workshop': WorkshopInfo,
  },
  methods: {
    prettifyDate(date) {
      return new Date(date).toString();
    },
  },
};
</script>

<style lang="postcss">
.events-page {
  @apply h-full pb-8;
  @apply flex flex-col items-center justify-center;
  @apply flex-1;
}

.event-card {
  @apply text-black text-left mt-4 bg-white;
  @apply rounded-lg;
  @apply text-center;
  @apply p-4 mx-4;
}

.event-card--image {
  @apply h-16 w-16 mx-auto;
}

.event-card--title {
  @apply text-3xl font-bold font-display text-center;
  @apply my-2;
}

.event-card--description {
  @apply text-gray-800 mt-1;
}

.event-card--cta {
  @apply font-display font-bold text-gray-600 text-lg;
  @apply mt-3;
}

@screen md {
  .event-card {
    width: 368px;
  }

  .event-card--image {
    @apply h-48 w-48;
  }
}

@screen dark {
  .event-card {
    @apply bg-black;
    @apply text-white;
  }

  .event-card--description {
    @apply text-gray-300;
  }

  .event-card--cta {
    @apply text-gray-200;
  }
}
</style>