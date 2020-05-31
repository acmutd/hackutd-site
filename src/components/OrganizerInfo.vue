<template>
  <div class="flex bg-white rounded-lg p-6 m-4 shadow-md">
    <g-image
      class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
      :src="'https://www.acmutd.co/png/team-hackutd-camden.jpg'"
    />
    <div class="text-center md:text-left">
      <h2 class="text-lg text-gray-700">{{ name }}</h2>
      <div class="text-gray-600">{{ position }}</div>
      <div class="text-teal-500">{{ bio }}</div>
      <div class="social-links">
        <span v-if="github" class="social-link text-gray-500 block md:inline-block md:pr-4">
          <!-- TODO: Add icon -->
          <a :href="'https://github.com/' + github">GitHub</a>
        </span>
        <div v-if="linkedin" class="social-link text-gray-500 block md:inline-block md:pr-4">
          <!-- TODO: Add icon -->
          <a :href="linkedin">LinkedIn</a>
        </div>
        <div v-if="website" class="social-link text-gray-500 block md:inline-block md:pr-4">
          <!-- TODO: Add icon -->
          <a :href="website">Personal Site</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "bio",
    "position",
    "imageUrl",
    "github",
    "linkedin",
    "website"
  ]
};
</script>

<style>
</style>