<template>
  <div class="md:flex bg-white rounded-lg p-6 m-4">
    <g-image
      class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      :src="imageUrl"
    />
    <div class="text-center md:text-left">
      <h2 class="text-lg">{{ name }}</h2>
      <div class="text-gray-600">{{ position }}</div>
      <div class="text-teal-500">{{ bio }}</div>
      <div class="social-links text-gray-500">
        <a :href="github">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "fullName",
    "bio",
    "position",
    "imageUrl",
    "github",
    "linkedin",
    "personalSite"
  ]
};
</script>

<style>
</style>