<template>
  <Layout>
    <section class="page px-4 text-left md:text-center xl:text-left max-w-2xl md:max-w-6xl mx-auto">
      <h1 class="text-5xl text-center text-white font-display font-bold my-4">The Current HackUTD Team</h1>
      <div class="team-members md:grid md:gap-4 md:grid-cols-2">
        <g-link v-for="edge in $page.officers.edges" :key="edge.node.slug" :to="'/team/#'">
          <team-member
            :name="edge.node.name"
            :position="edge.node.position"
            :bio="edge.node.bio"
            :image-url="edge.node.imageName"
            :github="edge.node.github"
            :website="edge.node.website"
            :linkedin="edge.node.linkedin"
            :key="edge.node.id"
          ></team-member>
        </g-link>
      </div>
    </section>
    <!-- <section class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl">Past Team</h1>
    </section> -->
  </Layout>
</template>

<page-query>
query {
  officers: allOrganizer {
    edges {
      node {
        slug
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
  metaInfo: {
    title: 'Team',
    description: 'All the officers on the HackUTD team.',
  },
  components: {
    "team-member": OrganizerInfo
  },
  computed: {
    pastTeam() {
      // TODO: Filter by current term
      return [];
    },
  },
  data() {
    return {};
  },
};
</script>
