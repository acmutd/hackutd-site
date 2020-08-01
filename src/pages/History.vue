<template>
  <Layout>
    <section class="hero max-w-4xl mx-auto mt-4 p-4">
      <h1 class="text-4xl text-center font-bold pt-8">How We Began</h1>
      <div class="hackutd-info">
        <p>
          HackUTD started in 2014 with the goal of bringing together people to build stuff.
          Since 2014, HackUTD has grown to be the largest hackathon in northern Texas.
        </p>
      </div>
    </section>
    <section class="container max-w-4xl mx-auto">
      <h1 class="text-4xl text-center font-bold pt-8">Past Events</h1>
      <div class="past-hackathons">
        <hackathon-card
        class="m-4"
        v-for="edge in $page.events.edges" :key="edge.id"
        :title="edge.node.title"
        :attendees="attendees"
        :description="edge.node.description">
      </hackathon-card>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query HackUTDHistory {
  events: allEvent {
    edges {
      node {
        title
        description
        date
        imageName
        venue
        attendees
        layout
      }
    }
  }
}
</page-query>

<script>
import HackathonCard from '../components/HackathonCard.vue';

export default {
  metaInfo: {
    title: 'HackUTD - Organization Information',
  },
  components: {
    'hackathon-card': HackathonCard,
  },
};
</script>

<style>
.hackutd-info {

}
.home-links a {
  margin-right: 1rem;
}
</style>
