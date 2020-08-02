<template>
  <Layout>
    <section class="team-page">
      <h1 class="page-title">The Team</h1>
      <div class="team-page--content">
        <g-link v-for="edge in $page.officers.edges" :key="edge.node.slug" :to="'/team'">
          <team-member
            :name="edge.node.name"
            :position="edge.node.position"
            :bio="edge.node.bio"
            :image-name="'https://www.acmutd.co/png/team-hackutd-camden.jpg'"
            :github="edge.node.github"
            :website="edge.node.website"
            :linkedin="edge.node.linkedin"
            :key="edge.node.id"
          ></team-member>
        </g-link>
      </div>
    </section>
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
import OrganizerInfo from '../components/OrganizerInfo.vue';

export default {
  metaInfo: {
    title: 'Team',
    description: 'All the officers on the HackUTD team.',
  },
  components: {
    'team-member': OrganizerInfo,
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

<style lang="postcss">
.team-page {
  @apply p-2;
}

@screen md {
  .team-page--content {
    @apply max-w-5xl;
    @apply mx-auto;
    @apply grid gap-4 grid-cols-2;
  }
}
</style>