<template>
  <Layout>
    <div class="hero flex justify-center p-5">
      <div class="bg-white m-4 rounded-lg p-4">
        <img
          class="h-16 w-16 md:h-48 md:w-48 rounded-full mx-auto md:mx-0 md:mr-6"
          src="avatar.jpg"
        />
        <div class="md:text-center text-left">
          <h2 class="text-lg text-gray-900">HackUTD</h2>
          <div class="text-purple-500">Our hackathon for everyone</div>
          <div class="text-gray-600">November 7, 2020</div>
        </div>
      </div>
      <div class="bg-white m-4 rounded-lg p-4">
        <img
          class="h-16 w-16 md:h-48 md:w-48 rounded-full mx-auto md:mx-0 md:mr-6"
          src="avatar.jpg"
        />
        <div class="md:text-center text-left">
          <h2 class="text-lg text-gray-900">Spring Hackathon</h2>
          <div class="text-purple-500">Our hackathon for UTD Students</div>
          <div class="text-gray-600">Some time next year</div>
        </div>
      </div>
    </div>
    <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
      <h1 class="text-2xl m-2 text-left">Past Workshops</h1>
      <div class="workshop-list">
        <hack-workshop
          class="m-4"
          title="Workshop 1"
          date="March 7, 2020"
          description="Learn about Arudino! We'll teach you how to build something cool."
        ></hack-workshop>
        <hack-workshop
          class="m-4"
          title="Workshop 2"
          date="March 14, 2020"
          description="Learn about Arudino!"
        ></hack-workshop>
        <hack-workshop
          class="m-4"
          title="Workshop 3"
          date="March 21, 2020"
          description="Learn about Arudino!"
        ></hack-workshop>
        <hack-workshop
          class="m-4"
          title="Workshop 4"
          date="March 28, 2020"
          description="Learn about Arudino!"
        ></hack-workshop>
      </div>
    </div>
  </Layout>
</template>

<script>
import WorkshopInfo from "../components/WorkshopInfo.vue";

export default {
  components: {
    "hack-workshop": WorkshopInfo
  }
};
</script>

<style>
.hero {
  background: #454545;
}
</style>