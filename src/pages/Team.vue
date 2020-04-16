<template>
  <Layout>
    <section class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl">Current Team</h1>
      <div class="team-members">
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
      </div>
    </section>
    <section class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl">Past Team</h1>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
        <team-member name="Camden Squire" image-url="https://www.acmutd.co/png/team-hackutd-camden.jpg" position="HackUTD Officer" bio="I organize things. When I'm not organizing things, I'm off programming and being a CS god."></team-member>
    </section>
  </Layout>
</template>

<script>
import OrganizerInfo from "../components/OrganizerInfo.vue";

export default {
  components: {
    "team-member": OrganizerInfo
  }
};
</script>

<style>
.layout {
  height: 100vh;
}
</style>