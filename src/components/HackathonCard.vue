<!-- A card with info about a past HackUTD event. -->
<template>
  <div class="rounded-lg bg-white shadow-md hover:shadow-lg p-6">
    <g-image :src="eventImage" :alt="title" />
    <div class="text-center md:text-left">
      <h2 class="text-lg text-black">{{ title }}</h2>
      <div class="text-black">{{ date }}</div>
      <div class="text-black">{{ attendees }} hackers</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    date: String,
    attendees: Number,
    eventImage: String,
  },
};
</script>