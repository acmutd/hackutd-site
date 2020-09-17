<template>
  <Layout>
    <section class="team-page">
      <h1 class="page-title">The Team</h1>
      <div v-for="edge in $page.officers.edges" :key="edge.node.committeeName">
        <h2 class="committee-title">{{ edge.node.committeeName }}</h2>
        <div class="team-page--content">
          <g-link v-for="organizer in edge.node.organizers" :key="organizer.slug" :to="'/team'">
            <team-member 
              :name="organizer.name"
              :position="organizer.position"
              :bio="organizer.bio"
              :imageName="organizer.imageName"
              :github="organizer.github"
              :website="organizer.website"
              :linkedin="organizer.linkedin"
              :key="organizer.slug"
            ></team-member>
          </g-link>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  officers: allOrganizer {
    edges {
      node {
        committeeName
        organizers {
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
    image(name) {
      return `../../data/images/${name}`
    }
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