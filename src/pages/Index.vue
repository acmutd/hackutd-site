<template>
  <Layout>
    <section class="background-scrim flex flex-col items-center justify-center h-full">
      <div class="md:flex md:flex-col">
        <div class="md:flex md:flex-row">
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
        <div class="call-to-actions">
          <div v-for="(edge, index) in $page.ctas.edges" :key="edge.node.text">
            <CallToAction :text="edge.node.text" :href="edge.node.link" :animationDelay="index" />
          </div>
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
};
</script>

<style lang="postcss">
.background-scrim {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(255, 255, 255, 0.25) 100%
  );
}

.call-to-actions {
  @apply grid gap-4 grid-cols-2;
}
</style>
