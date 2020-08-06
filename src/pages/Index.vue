<template>
  <Layout>
    <section class="flex flex-col items-center justify-center h-full">
      <div class="md:flex md:flex-col">
        <div class="md:flex md:flex-row justify-evenly">
          <div class="flex flex-col justify-evenly mx-8 text-4xl font-display font-bold">
            <img src="../assets/logo-square-orange.svg" alt="HackUTD logo" width="100%" />
            <div class="text-center mt-4">HackUTD</div>
          </div>
          <div class="inline-block font-display font-bold text-3xl mt-4 md:flex md:flex-col md:text-6xl">
            <span class="mx-2">Hack.</span>
            <span class="mx-2">Build.</span>
            <span class="mx-2">Learn.</span>
          </div>
        </div>
        <div :class="actionsStyle">
            <CallToAction 
              v-for="(edge, index) in $page.ctas.edges" :key="edge.node.text"
              :text="edge.node.text"
              :href="edge.node.link"
              :animationDelay="index" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  ctas: allCallToAction(order: ASC) {
    edges {
      node {
        text,
        link
      }
    }
  }
}
</page-query>

<script>
import CallToAction from "../components/CallToAction";

export default {
  metaInfo: {
    title: "Home",
  },
  components: {
    CallToAction,
  },
  computed: {
    actionsStyle() {
      return this.$page.ctas.edges.length == 1 ? "actions-single": "actions-multiple";
    }
  }
};
</script>

<style lang="postcss">
.actions-single {
  @apply flex flex-col;
}

.actions-multiple {
  @apply flex flex-col;
}

@screen md {
  .actions-multiple {
    @apply grid gap-4 grid-cols-2;
  }

  .actions-multiple > * {
    width: 100%;
  }
}
</style>
