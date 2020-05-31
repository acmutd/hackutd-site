<template>
  <Layout>
    <section class="px-4 text-left md:text-center xl:text-left max-w-2xl md:max-w-6xl mx-auto">
      <h1 class="text-2xl">Current Team</h1>
      <div class="team-members md:grid md:gap-4 md:grid-cols-2">
        <team-member
          v-for="edge in $page.events.edges"
          :name="edge.node.name"
          :position="edge.node.position"
          :bio="edge.node.bio"
          :image-url="imageName"
          :github="edge.node.github"
          :website="edge.node.website"
          :linkedin="edge.node.linkedin"
          :key="edge.node.id"
        ></team-member>
      </div>
    </section>
    <!-- <section class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl">Past Team</h1>
    </section> -->
  </Layout>
</template>

<page-query>
query {
  events: allOrganizers {
    edges {
      node {
        id
        name
        position
        bio
        imageName
        github
        website
        linkedin
      }
    }
  }
}
</page-query>

<script>
import OrganizerInfo from "../components/OrganizerInfo.vue";

export default {
  components: {
    "team-member": OrganizerInfo
  },
  computed: {
    pastTeam() {
      return [];
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
.layout {
  height: 100vh;
}
</style>