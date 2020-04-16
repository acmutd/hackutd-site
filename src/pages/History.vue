<template>
  <Layout>
    <div class="hero">
      <div class="hackutd-info">
        <p>
          HackUTD started in 2014 with the goal of bringing together people to build stuff.
        </p>
        <p>
          Since 2014, HackUTD has grown to be the largest hackathon in northern Texas.
        </p>
      </div>
    </div>
    <div class="past-hackathons">
      <hackathon-card></hackathon-card>
      <hackathon-card></hackathon-card>
      <hackathon-card></hackathon-card>
    </div>
  </Layout>
</template>

<script>
import HackathonCard from '../components/HackathonCard.vue';

export default {
  metaInfo: {
    title: 'HackUTD - Organization Information',
  },
  props: [

  ]
}
</script>

<style>
.hackutd-info {

}
.home-links a {
  margin-right: 1rem;
}
</style>
