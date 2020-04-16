<!-- A card with info about a past HackUTD event. -->
<template>
  <div class="bg-white rounded-lg p-6">
    <g-image :src="eventImage" :alt="eventName" />
    <div class="text-center md:text-left">
      <h2 class="text-lg">{{ eventName }}</h2>
      <div class="text-purple-500">{{ date }}</div>
      <div class="text-gray-600">{{ attendees }} hackers</div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'info',
    'eventName',
    'date',
    'attendees',
    'eventImage',
  ]
};
</script>